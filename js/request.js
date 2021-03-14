const https = require("https")

module.exports = (path) => {
  return new Promise(
    (resolve, reject) => {
      const options = {
        protocol: "https:",
        method: "GET",
        host: "gameinfo.albiononline.com",
        path: `/api/gameinfo/${path}`,
      }
      // console.log("REQUESTING", options)
      const request = https.request(
        options,
        (response) => {
          let data = ""
          response.on(
           'data',
           function (chunk) {
             // console.log("Chunk => ", chunk)
              data += chunk
           }
          )

          response.on(
            'end',
            function () {
              // console.log("RESPONSE ", data)
              resolve(JSON.parse(data))
            }
          )
        }
      )

      request.on(
        'error',
        (error) => {
          console.log("Error while querying killboard API", error)
          reject(error)
        }
      )

      request.end()
    }
  )
}
