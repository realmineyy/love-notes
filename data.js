// relationship data
const relationship = {
  startDate: "2025-09-15",
  anniversaryMonth: 9,
  anniversaryDay: 15
};
const messages = [
  {
    date: "2025-12-31",
    mood: "✨ Grateful",
    text: "I am so grateful to have you in my life going into this New Year! I hope you enjoy this year with me as much as I will with you! <3",
    image: "images/IMG_9065.jpeg"
  },
  {
    date: "2026-01-01",
    mood: "🤍 Worried",
    text: "Hope you're doing okay. Please talk to me if something's wrong. Love you <3",
    image: "images/IMG_9296.JPG"
  },
  {
    date: "2026-01-02",
    mood: "Chillin",
    text: "Even on quiet days, loving you feels like the easiest thing I've ever done. Thank you for being so amazing!",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-01-03",
    mood: "Chillin",
    text: "No matter how today looks, I'm grateful to have you in my life <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-01-04",
    mood: "",
    text: "I miss you a lot. We should hangout soon before I go to Atlanta. I dont even know if you read these, just know that I love you <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-01-05",
    mood: "",
    text: "I don't need perfect days to know that I love you :)",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-01-06",
    mood: "",
    text: "Glad to see you today! Hopefully you enjoyed our time as much as I did <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-01-07",
    mood: "Hilarious",
    text: "I am dramatic... dramatically in love with you hehe <3",
    image: "images/no_image_today.jpg"
  }
  ,
  {
    date: "2026-01-08",
    mood: "Worried",
    text: "Sorry you felt bad today, just want to make sure you know I still love you! <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-01-09",
    mood: "Sorry",
    text: "I am not very good at words but given the opportunity and some time I can try. You are by far the most amazing thing to ever happen to me. You came in at such a perfect time in my life and brought like a calm to the storm that was my life at the time. At this point in time, you probably feel as if you can't trust me or forgive me, and for that I have no excuse. No excuse being that I have no excuse for making you feel that way when you should always feel as if you can trust me and rely on me. I am sorry that I forgot to write this message sooner, you deserve it. I really hope that you stay with me because I have no idea where I'd be without you. Sincerely, Aiden.",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-01-10",
    mood: "Glad",
    text: "I am glad you're still with me and I honestly can't believe that you are. I am grateful to have you and happier everyday im with you. Thank you for being in my life. I love you <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-01-11",
    mood: "",
    text: "You are so incredibly beautiful and I am lucky to have you. I miss you tho, u should come over :) I love you <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-01-12",
    mood: "",
    text: "I love spending time and talking with you, it brightens my day. I love you <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-01-13",
    mood: "Happy",
    text: "You are the most beautiful and amazing girl ever! I'm so glad to have you! Love you <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-01-14",
    mood: "",
    text: "I'm so lucky to have you in my life, I love you so much <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-01-15",
    mood: "",
    text: "I'm so glad you came over this morning, I love hanging out with you. Sorry for that one thing, won't happen again but figured I'd try something new. Love you <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-01-16",
    mood: "",
    text: "I think you are beautiful and sweet and kind (sorta) and I hope you know that I will always love you, cherish you, and want the best for you. I love you so much <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-01-17",
    mood: "",
    text: "I'm gonna miss you a ton when I go back to college. I'm so glad i got to spend so much time with you over winter break. Love you <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-01-18",
    mood: "",
    text: "you are the greatest thing to happen to me and im happy that youve stuck with me even with the distance, i love you",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-01-19",
    mood: "",
    text: "I am sorry that I haven't been keeping up with writing you like I should. I finally got it fixed on my phone so that will never happen again. I'm so glad ur in my life and I can't imagine my life without you. I love you <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-01-20",
    mood: "",
    text: "You push me to be better every single day. I am so grateful to have you, I love you <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-01-21",
    mood: "",
    text: "Sorry my video has been delayed, just know you're on my mind always. Love you <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-01-22",
    mood: "",
    text: "I am writing this at 12:41 A.M. I am so sorry that you have a lot going on and I am not doing anything to help. I want you to know that I love you, care for you, and will always be on your side. Please talk to me or ask for help if you need to or just want to chat with me, I would love to talk to you about random stuff all the time. Love Always, Aiden.",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-01-23",
    mood: "",
    text: "I care about you so much and I am sorry that you're going through stuff but I want to be there for you always. JUst know that I am here for you if you need me, please talk to me. I love you <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-01-24",
    mood: "",
    text: "I love you so much and I am so glad you're in my life <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-01-25",
    mood: "",
    text: "I'm feeling better and I hope you start to feel better too. Sorry to get you sick digitally (or however you put it), I love you <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-01-26",
    mood: "Empty",
    text: "Couldn't find the words to write and didn't want to cheat you and make the seas rise any higher. Just know I love you <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-01-27",
    mood: "",
    text: "You are the most beautiful and amazing woman I have ever had the pleasure of being with and I hope that never ends. I love you so much <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-01-28",
    mood: "",
    text: "I want to be with you for the rest of my life. I have made plenty of mistakes during our relationship but I think you are the smartest, most wonderful, kindest, most beautiful girl in the world and I know that I haven't made you feel as if that is the truth, but I promise if you'll let me I'll dedicate the rest of my life to making sure that you know how amazing you are. I love you so much, stay with me forever. Truly yours, Aiden.",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-01-29",
    mood: "",
    text: "I think you are the most amazing person in the world and I am so lucky to have you in my life, I love you so much <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-01-30",
    mood: "",
    text: "You are the best thing to ever happen to me, I love you so much <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-01-31",
    mood: "",
    text: "I am so glad to have you in ym life and I hope you stay with me forever <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-02-01",
    mood: "",
    text: "Happy Black History Month!! Glad to have a beautiful queen like you in my life <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-02-02",
    mood: "",
    text: "I hope you actually enjoy reading these. It means a lot that you actually check this every single day. I put a lot of effort into it and I can appreciate that it means something to you. I love you so much <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-02-03",
    mood: "",
    text: "I appreciate your support everyday and I don't think I could go a day without talking to you. I love you so much <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-02-04",
    mood: "",
    text: "You're the prettiest girl in the world! I love you so much! <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-02-05",
    mood: "",
    text: "I love how independent and strong-willed you are. I can't imagine being with anybody else. I love you <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-02-06",
    mood: "",
    text: "I am really excited to be forgiven for my past mistakes. I'm so glad to have you in my life. I love you soooo much <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-02-07",
    mood: "",
    text: "I love how smart you are! I love everything about you <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-02-08",
    mood: "",
    text: "I hope you have the most amazing life! You deserve it for being so perfect. I love you <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-02-09",
    mood: "",
    text: "You're going to do so amazing on your ACT and you're gonna be valedictorian! I'm so proud of everything you've accomplished! I love you so much <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-02-10",
    mood: "",
    text: "You are the most beautiful, smartest, kindest girl in the world and I NEED you in my life. I love you so much <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-02-11",
    mood: "",
    text: "I can't wait to spend the rest of my life with you! I love you so much <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-02-12",
    mood: "",
    text: "You are so graceful and I couldn't have asked for a better partner! I love you <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-02-13",
    mood: "",
    text: "I love you so much and I can't see my life without you <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-02-14",
    mood: "",
    text: "Happy Valentines Day!!!",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-02-15",
    mood: "",
    text: "You are the most amazing woman in the world and it's almost unbelievable that you want to spend any time with me at all. I love you so much <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-02-16",
    mood: "",
    text: "You're so amazing and I can't wait to spend the rest of my time with you <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-02-17",
    mood: "",
    text: "Love you tons <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-02-18",
    mood: "",
    text: "You are the finest girl in the world. I lowk pulled a baddie asf and I can't say that I've felt any luckier in my life. I love you so much and I'm glad your in my life <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-02-19",
    mood: "",
    text: "You're just so objectively fun to talk to and be around, I can't wait to spend my life with you! Love you <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-02-20",
    mood: "",
    text: "You are the most amazing woman in the world and I love you so much <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-02-21",
    mood: "",
    text: "I love you so much and I am so sorry I forgot to write this until late. Sleep well, I love you so much sweet angel <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-02-22",
    mood: "",
    text: "Even when you're mad at me, I still love you more than life. I'm so lucky to have you and I am sorry that I do sucky things sometimes. I love you so much <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-02-23",
    mood: "",
    text: "Excited to spend prom with you (if you let me). It'll be a fun night fr <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-02-24",
    mood: "",
    text: "You are amazing and I love how independent you are <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-02-25",
    mood: "",
    text: "You are so smart and I am so proud of everything you have accomplished! Can't wait for many more achievements together <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-02-26",
    mood: "",
    text: "You are amazing and I love talking with you <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-02-27",
    mood: "",
    text: "You are the best thing that has ever happened to me. I am so glad to have you in my life and I love you so much <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-02-28",
    mood: "",
    text: "I love you so much <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-03-01",
    mood: "",
    text: "You are literally js the best person ever <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-03-02",
    mood: "",
    text: "You are such an amazing woman and I can't wait to spend my life with you! I love you so much <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-03-03",
    mood: "",
    text: "I am so proud of you everyday! I am so grateful to have someone as amazing as you in my life! <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-03-04",
    mood: "",
    text: "IM SORRY IM SORRY IM SORRY!!!! Okay now im done with ragebait, love you bunches <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-03-05",
    mood: "",
    text: "I am like so like in love with you like its kinda amazing how like in love with you I like am <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-03-08",
    mood: "",
    text: "You are absolutely stunning and an incredible woman. I would marry you tomorrow if you'd let me. I apologize for the break in between the last message and today's, I should've brought my macbook with me! Marry me? <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-03-09",
    mood: "",
    text: "I love you so much and I regret ever doing anything that put a strain on our relationship. I hope one day you'll be able to forgive me fully for it but until then I am dedicated to showing you every day that our relationship is worth it. I love you <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-03-10",
    mood: "",
    text: "You are so amazing and I can't believe you're with me! I love you so much <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-03-11",
    mood: "",
    text: "I am so happy I met you, you make me so happy and I am so lucky to have you in my life. I love you <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-03-12",
    mood: "",
    text: "Im so happy to see you tomorrow!! I love you <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-03-13",
    mood: "",
    text: "You are the most amazing girl I have ever met, I hope we're together forever! I love you <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-03-14",
    mood: "",
    text: "You are the most beautiful girl in the world, and no, your sun rash doesnt change that. I love you so much <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-03-15",
    mood: "",
    text: "I am so sorry I forgot to leave a note. I just want to say how grateful I am to have such an understanding and forgiving woman like you in my life. You're honesty and grace honestly just leaves me speechless and I am so lucky. I love you so much <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-03-16",
    mood: "",
    text: "I can't wait for you to come to Ole Miss next year. We are honestly going to have the time of our lives here and I just want to see you more regularly! I love you so much <3",
    image: "images/no_image_today.jpg"
  },
  {
    date: "2026-03-17",
    mood: "",
    text: "Happy St. Patricks Day to the woman who loves her ginger. Thanks for always being there for me. I love you <3",
    image: ""
  },
  {
    date: "2026-03-18",
    mood: "",
    text: "I really hate being on a break, I want to be able to talk to you. But the yin-yang of that thought is that I also want you to have everything you want so if you want space, you're going to get it. I hope you can forgive me. I love you so much <3",
    image: ""
  },
  {
    date: "2026-03-19",
    mood: "",
    text: "I am so happy you're coming to Ole Miss next year. Like you don't even understand how excited I am. You're amazing and you're going to do amazing things in life. I love you so much <3",
    image: ""
  }
];
