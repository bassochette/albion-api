const request = require("./request")

module.exports = async (page=1) => {
  const pageSize = 50;
  const events = await request(
    `events?limit=${pageSize}&offset=${page === 0 ? 0 : page*pageSize-1}`
  )
  return events;
}
