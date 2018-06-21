# Albion killboard api client

Node Js client to interact with albion killboard API.

Doesn't work for frontend js due to cross origin policies.

## Install

```
npm i node-albion-api
```

## Usage

All the methods are async and return promises.

```javascript
const {
  search
} = require("node-albion-api")

search("yogourt")
  .then((results) => console.log(results))

// or using async
const doAwesomeStuff = async () => {
  const searchResults = await search("yogourt")
  console.log(searchResults)
}

```

## TODO

- detailed documentation for now read the sources my friend.
- say hello to yogourt IG if you like the stuff
- use my referal link https://albiononline.com/?ref=ZWCXX1QQDW

## API urls (reminder for devs)
### Search player / guild name
https://gameinfo.albiononline.com/api/gameinfo/search?q={name}

### Search item
https://gameinfo.albiononline.com/api/gameinfo/items/search?q={name}&limit=1

### GvG
https://gameinfo.albiononline.com/api/gameinfo/guildmatches/top
https://gameinfo.albiononline.com/api/gameinfo/guildmatches/next
https://gameinfo.albiononline.com/api/gameinfo/guildmatches/past

### Kill / loss (killboard)
https://gameinfo.albiononline.com/api/gameinfo/events

### Player info
https://gameinfo.albiononline.com/api/gameinfo/players/{player_id}

### Guild info
https://gameinfo.albiononline.com/api/gameinfo/guilds/{guild_id}
https://gameinfo.albiononline.com/api/gameinfo/guilds/{guild_id}/members

### Alliance info
https://gameinfo.albiononline.com/api/gameinfo/alliances/{alliance_id}

### Item / Weapon Categories
https://gameinfo.albiononline.com/api/gameinfo/items/_itemCategoryTree
https://gameinfo.albiononline.com/api/gameinfo/items/_weaponCategories

### Item info / icon
https://gameinfo.albiononline.com/api/gameinfo/items/{item_id}/data
https://gameinfo.albiononline.com/api/gameinfo/items/{item_id}

### Spell icon
https://gameinfo.albiononline.com/api/gameinfo/spells/{spell_id}
