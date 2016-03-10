export default class JsonRestBuilder {
  proto: any = {}
  url: string = ''
  prefix: string = ''
  request: (any) => Promise<any> = null

  constructor(init: any) {
    Object.assign(this, init)
  }

  private _build(method: string, name: string, path: string, args?: string[]): JsonRestBuilder {
    let funcName = prefixName(this.prefix, name)
    let getOptions = (data?): any => {
      let options: any = {
        url: this.url + parsePath(path, data),
        method: method,
      }
      if (method === 'POST') {
        let postData: any = {}
        if (args && data && typeof data === 'object') {
          for (let p of args) if (p in data) postData[p] = data[p]
        }
        postData = JSON.stringify(postData)
        options.postData = postData
        options.headers = {
          'Content-Type': 'application/json; charset=UTF-8',
          'Content-Length': Buffer.byteLength(postData, 'UTF-8')
        }
      }
      return options
    }
    this.proto[funcName] = (data?): Promise<any> => {
      return this.request(getOptions(data))
    }
    return this
  }

  get(name: string, path: string): JsonRestBuilder {
    return this._build('GET', name, path)
  }

  delete(name: string, path: string): JsonRestBuilder {
    return this._build('DELETE', name, path)
  }

  post(name: string, path: string, args?: string[]): JsonRestBuilder {
    return this._build('POST', name, path, args)
  }

  create(obj: any): void {
    Object.assign(obj, this.proto)
  }
}

function parsePath(path, data) {
  return path.replace(/:([a-zA-Z_$]+)/g, (m, p) => {
    if (!(p in data)) throw new TypeError('invalid arguments')
    return data[p]
  })
}

function prefixName(prefix: string, name: string) {
  return prefix ? prefix + name.charAt(0).toUpperCase() + name.slice(1) : name
}
