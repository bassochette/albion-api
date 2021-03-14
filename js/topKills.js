const request = require("./request")

module.exports = async (toonId, range="week", offset=0, limit=100) => {
    const results = await request(
      `players/${toonId}/topkills?range=${range}&offset=${offset}&limit=${limit}`
    )
    return results
}
