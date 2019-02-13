// /events/playerfame?limit=11&offset=0&range=week&guildId=hX4eUgsXSo-YBybi6jcxDw

module.exports = async (guildId, range="week", offset=0, limit=20) => request(
    `events/playerfame?limit=${limit}&offset=0&range=${range}&guildId=${guildId}`
)
