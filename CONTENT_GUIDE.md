# Updating Love Notes

The public site reads two separate, versioned JSON collections from GitHub. Their contents are shared by every visitor and persist across devices. Both collections intentionally start empty. They do not use browser storage. Only the appearance preference is saved on her device.

You can ask Codex to add a little thing, add a plan, or mark a plan completed. Daily messages continue to live in `data.js`; the redesign does not change that workflow. Publishing a content change through GitHub Pages updates her site.

## A little thing I notice

Add an object to `collections/little-things.json` → `items`:

```json
{
  "id": "little-thing-2026-09-08-01",
  "date": "2026-09-08",
  "text": "Your own personal note goes here."
}
```

Optional: `image`, a path to an uploaded repository photo such as `images/IMG_9230.JPG`. Each id must be unique. Do not add the example itself to the live collection.

## Something I want to do with you

Add an object to `collections/bucket-list.json` → `items`:

```json
{
  "id": "plan-2026-09-08-01",
  "date": "2026-09-08",
  "title": "Your own plan goes here",
  "description": "The details you want her to read.",
  "category": "A little adventure",
  "status": "planned"
}
```

When it happens, keep the same id and change `status` to `completed`. Add a `completedDate` in YYYY-MM-DD format, an optional `memory` with your reflection, and an optional `image` path. It moves to “We did it” on the site. Completion is an owner-managed content update, so visitors cannot accidentally change your shared collection.

Dates must be real YYYY-MM-DD dates; completion cannot precede the date added. Photos belong under `images/` or `assets/`. There is no entry limit in either collection. With multiple jar notes, the next draw avoids immediately repeating the last one. Drawing does not consume or delete a note.

## Preview and publish

- `npm run dev` starts the local preview.
- `npm test` checks content behavior and date calculations.
- `npm run build` validates notes, memories, new collections, and referenced assets, then prepares `dist/`.
- GitHub Pages can continue serving this repository's root; no framework or external database account is required.
- The separate Sites deployment is a private review copy. Its data is a snapshot. The GitHub Pages site remains the public source of truth.

Before any later content update, fetch current GitHub main and preserve all newer notes. Never overwrite `data.js` or either JSON collection with a stale preview copy.

## Public release

The mobile redesign replaces the temporary maintenance page. The scheduled restoration task has been removed at the owner's request. Future changes can be published normally when requested.
