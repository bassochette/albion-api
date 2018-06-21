const request = require("./request")

module.exports = async (id) => {
  const gvg = await request(
    `guildmatches/${id}`
  )
  return gvg;
}
