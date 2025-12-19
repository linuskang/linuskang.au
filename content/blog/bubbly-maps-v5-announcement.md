---
title: "Announcing Bubbly Maps V5"
date: "2025-12-19"
excerpt: "The new version of Bubbly Maps is here, now in beta."
tags: ["bubbly maps", "v5", "2025", "announcement"]
---

# V5 is here

Bubbly Maps V5 is now available in beta. I focused this release on performance, extensibility, and a smoother browsing experience. Try the beta, explore the new features, and tell us what you think.

## What’s new

- Faster waypoint rendering and lower memory usage.
- Complete UI overhaul for all pages.
- Improved developer APIs, see [Bubbly Index API](https://index.bubblymaps.org) for more info.
- Migrate tech stack to [Create T3 App](create.t3.gg).
- Mobile UI optimisations.
- Geolocating.
- Extra map layers like heatmaps, and geofences.
- New widgets and AI features.
- Upgrade to Next 16 and React 19.
- Full codebase cleanup.

## Migration & compatibility

There is no way to migrate smoothly, the entire codebase has changed. This means that you will need to reclone the v5 branch and edit your configuration in the new areas. However, database schemas remain the same.

If you run into any breaking changes migrating from v4 to v5, please open an issue so we can help and update the migration notes.

## Applications for becoming a moderator have opened

We're now hiring volunteer moderators to supervise the Bubbly Maps platform.

You can apply by emailing [us](mailto://become.a.mod@bubblymaps.org) with the following information:

- Your Bubbly Maps username.
- Why you want to become a moderator.
- Your availability (hours per month, timezone).
- Any relevant experience (other platforms, community work).
- Any relevant documents or information.

Before applying, please ensure that you meet all [eligibility criteria](http://localhost:3000/moderators#eligibility), or your application may not be accepted.

You can find more information about becoming a moderator [here](https://bubblymaps.org/moderators).

## New developer APIs

We've introduced new APIs you to incorporate Bubbly data into your own applications. This initative is called the Bubbly Fountain Index. You can find more information about that [here](https://index.bubblymaps.org).

You can retrieve waypoint data directly from the Bubbly Fountain Index using the following REST endpoints. All endpoints require a valid API token.

## Endpoints

| Method | URL                                             | Description                                   | Returns |
|--------|-------------------------------------------------|-----------------------------------------------|---------|
| GET    | /wp                  | Fetch all accessible waypoints                | Array of waypoint objects |
| GET    | /wp/{id}             | Fetch a single waypoint by ID                 | Waypoint object |

Here is some example code for fetching a waypoint's information:

```ts
async function getWp(id: string) {
 const res = await fetch(`https://index.bubblymaps.org/wp/${id}`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Authorization": `Bearer YOUR_DEVELOPER_TOKEN`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Waypoint fetch failed (${res.status})`);
  }

  return res.json();
}

const waypoint = await getWp("3331");
console.log(waypoint);

```

Please note that we only offer API level access to verified users on our platform at this time. You can register for an API token by contacting [register.for.apis@bubblymaps.org](mailto://register.for.apis@bubblymaps.org).

## Known issues

- Waypoints will randomly not load with large datasets over 40,000 waypoints.

That's all for now.