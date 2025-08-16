# AniPlay

A simple Node.js package to fetch anime streaming URLs from multiple HD servers.  
Currently supports **4 HD servers** you can choose from.


## Installation

```yaml
npm install aniplay
```

## Example Usage:
```js
const hd = require('aniplay');

async function test() {
  const url = await hd.fetchHD1Stream('162804', '12', 'sub');
  console.log(url);
}

test();
```

## Source Requirements
| Source | Parameters | 
| ------ | ---------- |
| HD-1 | Anilist ID, Episode Number, Sub/Dub |
| HD-2 | Anilist ID, Episode Number, Sub/Dub |
| HD-3 | Anime Title, Episode Number |
| HD-4 | HiAnime Episode ID, Sub/Dub |

## Additional Notes
I recommend that you use HD-4 along side HD-1. HD-2 has some sort of issue on the servers end with getting episodes from that source, its just really really really really slow.

The example above provided uses HD-1, if its not in an async function you will get returned a "promise" url, an example is shown below:
```yaml
Promise { '<returned url>' }
```

***All response links are embeddable for an iframe, its an out of the box player. This does NOT scrape sites it just links to external sources for embedding!***
