const request = require("./request")

module.exports = async (page=1) => {
    const pageSize = 50;
    const events = await request(
        `battles?offset=${page === 0 ? 0 : page*pageSize-1}&limit=${pageSize}&sort=recent`
    )
    return events;
}
