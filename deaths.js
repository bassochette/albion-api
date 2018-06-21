const request = require("./request")

module.exports = async (toonId) => {
    const results = await request(
      `players/${toonId}/deaths?range=month&offset=0&limit=100`
    )
    return results
}
