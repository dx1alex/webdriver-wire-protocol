import Wd from '../'

const wd = new Wd({ url: 'http://localhost:9515' })

wd.getStatus().then(console.log)
wd.initSession({
  desiredCapabilities: {
  browserName: 'chrome'
}})
  .then(res => {
    console.log(res)
    return wd.openUrl({url:'http://google.com'})
  })
  .catch(console.log)
