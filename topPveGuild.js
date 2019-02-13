// https://gameinfo.albiononline.com/api/gameinfo/players/statistics?range=week&limit=11&offset=0&type=PvE&region=Total&guildId=hX4eUgsXSo-YBybi6jcxDw
module.exports = async (guildId, range="week", offset=0, limit=20) => request(
    `players/statistics?range=${range}&limit=${limit}&offset=0&type=PvE&region=Total&guildId=${guildId}`
)