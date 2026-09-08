export const dateKey = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
export const formatDate = date => new Intl.DateTimeFormat('en-US',{month:'long',day:'numeric',year:'numeric'}).format(new Date(date+'T12:00:00'));
export function validDate(value){if(typeof value!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(value))return false;const parsed=new Date(value+'T12:00:00Z');return !Number.isNaN(+parsed)&&parsed.toISOString().slice(0,10)===value;}
export function localImage(value){return typeof value==='string' && /^(?:\.\/)?(?:images|assets)\/[\w .()/-]+\.(?:jpe?g|png|webp|gif)$/i.test(value) && !value.split('/').includes('..');}
export function validateCollection(data,kind){
  if(!data||data.version!==1||!Array.isArray(data.items))throw new Error('Unsupported collection format.');
  const ids=new Set();
  for(const item of data.items){
    if(!item||typeof item.id!=='string'||!item.id.trim()||ids.has(item.id))throw new Error('Each entry needs a unique id.');ids.add(item.id);
    if(!validDate(item.date))throw new Error('Each entry needs a valid YYYY-MM-DD date.');
    if(kind==='jar'){
      if(typeof item.text!=='string'||!item.text.trim())throw new Error('A little thing needs text.');
    }else if(kind==='bucket'){
      if(typeof item.title!=='string'||!item.title.trim())throw new Error('A bucket-list item needs a title.');
      if(!['planned','completed'].includes(item.status))throw new Error('Status must be planned or completed.');
      if(item.status==='completed'&&!validDate(item.completedDate))throw new Error('Completed items need a completion date.');
      if(item.completedDate&&(!validDate(item.completedDate)||item.completedDate<item.date))throw new Error('Completion must be on or after the date added.');
      for(const key of ['description','category','memory'])if(item[key]!==undefined&&typeof item[key]!=='string')throw new Error(`${key} must be text.`);
    }else throw new Error('Unknown collection.');
    if(item.image && !localImage(item.image))throw new Error('Images must be local files inside images/ or assets/.');
  }
  return data.items;
}
export function timeTogether(relationship,now=new Date()){
  const start=new Date(relationship.startDate+'T00:00:00'), today=new Date(now.getFullYear(),now.getMonth(),now.getDate());
  const calendarDays=Math.max(0,Math.round((Date.UTC(today.getFullYear(),today.getMonth(),today.getDate())-Date.UTC(start.getFullYear(),start.getMonth(),start.getDate()))/86400000));
  let next=new Date(now.getFullYear(),relationship.anniversaryMonth-1,relationship.anniversaryDay);
  if(next<today)next=new Date(now.getFullYear()+1,relationship.anniversaryMonth-1,relationship.anniversaryDay);
  const until=Math.round((Date.UTC(next.getFullYear(),next.getMonth(),next.getDate())-Date.UTC(today.getFullYear(),today.getMonth(),today.getDate()))/86400000);
  const minutes=Math.max(0,Math.floor((now-start)/60000));
  return {days:calendarDays,hours:Math.floor(minutes/60)%24,minutes:minutes%60,until};
}
export function randomIndex(length,previous=-1,rng=Math.random){if(length<=0)return -1;if(length===1)return 0;const exclude=previous>=0&&previous<length;const index=Math.min(length-(exclude?2:1),Math.floor(rng()*(length-(exclude?1:0))));return exclude&&index>=previous?index+1:index;}
