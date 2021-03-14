// https://gameinfo.albiononline.com/api/gameinfo/players/statistics?range=week&limit=11&offset=0&type=Gathering&subtype=All&region=Total&guildId=hX4eUgsXSo-YBybi6jcxDw
const request = require("./request")
module.exports = async (guildId, range="week", offset=0, limit=10) => request(
    `players/statistics?range=${range}&limit=${limit}&offset=${offset}&type=Gathering&subtype=All&region=Total&guildId=${guildId}`
)