const request = require("./request")

module.exports = async (toonId) => {
    const results = await request(
      `players/${toonId}`
    )
    return results
}
