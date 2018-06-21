const request = require("./request")

module.exports = async (page=1) => {
  const pageSize = 51;
  const events = await request(
    `guildmatches/past?limit=${pageSize}&offset=${page}`
  )
  return events;
}
