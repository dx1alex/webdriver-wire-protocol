import Wd from '../'

const wd = new Wd({ url: 'http://localhost:9515' })

main()
async function main() {
  try {
    console.log(await wd.getStatus())
    let res = await wd.initSession({
      desiredCapabilities: {
        browserName: 'chrome'
      }
    })
    console.log(res)
    await wd.openUrl({ sessionId: res.sessionId, url: 'http://google.com' })
  } catch (err) {
    console.log(err)
  }
}
