import {parse} from 'url'
import {request} from 'http'

let requestHandler = function(options: any): Promise<any> {
  console.log(options)
  return new Promise((resolve, reject) => {
    Object.assign(options, parse(options.url))
    let headers = {
      'Connection': 'keep-alive',
      'Accept': 'application/json',
      'User-Agent': 'autoclick'
    }
    if (options.headers) Object.assign(options.headers, headers)
    else options.headers = headers
    let req = request(options, res => {
      let data: any = ''
      res.setEncoding('utf8')
      res.on('data', chunk => { data += chunk })
      res.on('end', () => {
        if (res.statusCode != 200) {
          data = {
            status: res.statusCode,
            value: { message: data }
          }
          return reject(data)
        }
        data = JSON.parse(data)
        if (data.status) return reject(data)
        //console.log(data)
        resolve(data)
      })
    })
    req.on('error', reject)
    if (options.method == 'POST' && options.postData !== {}) {
      req.write(options.postData)
    }
    req.end()
  })
}

export default requestHandler
