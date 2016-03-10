import JsonRestBuilder from './lib/json-rest-builder';
import requestHandler from './lib/reques-handler';

class WebdriverWireProtocol {
  constructor(options) {
    new JsonRestBuilder({
      url: options.url,
      request: options.request || requestHandler
    })
      .get('getStatus', '/status')

      .post('initSession', '/session', ['desiredCapabilities'])
      .get('getSessions', '/sessions')
      .get('getSession', '/session/:sessionId')
      .delete('quit', '/session/:sessionId')

      .post('setTimeout', '/session/:sessionId/timeouts', ['type', 'ms'])
      .post('setScriptTimeout', '/session/:sessionId/timeouts/async_script', ['ms'])
      .post('setImplicitWait', '/session/:sessionId/timeouts/implicit_wait', ['ms'])

      .get('getWindow', '/session/:sessionId/window_handle')
      .get('getWindows', '/session/:sessionId/window_handles')

      .post('switchToWindow', '/session/:sessionId/window', ['name'])
      .delete('closeWindow', '/session/:sessionId/window')
      .post('setWindowSize', '/session/:sessionId/window/:windowHandle/size', ['width', 'height'])
      .get('getWindowSize', '/session/:sessionId/window/:windowHandle/size')
      .post('setWindowPosition', '/session/:sessionId/window/:windowHandle/position', ['x', 'y'])
      .get('getWindowPosition', '/session/:sessionId/window/:windowHandle/position')
      .post('maximizeWindow', '/session/:sessionId/window/:windowHandle/maximize')

      .get('getUrl', '/session/:sessionId/url')
      .post('openUrl', '/session/:sessionId/url', ['url'])
      .post('goForward', '/session/:sessionId/forward')
      .post('goBack', '/session/:sessionId/back')
      .post('refresh', '/session/:sessionId/refresh')

      .post('executeScript', '/session/:sessionId/execute', ['script', 'args'])
      .post('executeAsyncScript', '/session/:sessionId/execute_async', ['script', 'args'])

      .get('screenshot', '/session/:sessionId/screenshot')

      .get('getImeAvailableEngines', '/session/:sessionId/ime/available_engines')
      .get('getImeActiveEngine', '/session/:sessionId/ime/active_engine')
      .get('isImeActivated', '/session/:sessionId/ime/activated')
      .post('deactivateIme', '/session/:sessionId/ime/deactivate')
      .post('activateIme', '/session/:sessionId/ime/activate', ['engine'])

      .post('switchToFrame', '/session/:sessionId/frame', ['id'])
      .post('switchToParentFrame', '/session/:sessionId/frame/parent')

      .get('getCookies', '/session/:sessionId/cookie')
      .post('setCookie', '/session/:sessionId/cookie', ['cookie'])
      .delete('deleteAllCookies', '/session/:sessionId/cookie')
      .delete('deleteCookie', '/session/:sessionId/cookie/:name')

      .get('getSource', '/session/:sessionId/source')
      .get('getTitle', '/session/:sessionId/title')

      .post('findElement', '/session/:sessionId/element', ['using', 'value'])
      .post('findElements', '/session/:sessionId/elements', ['using', 'value'])
      .post('getActiveElement', '/session/:sessionId/element/active')
      .post('findChildElement', '/session/:sessionId/element/:id/element', ['using', 'value'])
      .post('findChildElements', '/session/:sessionId/element/:id/elements', ['using', 'value'])

      .post('type', '/session/:sessionId/keys', ['value'])
      //.get('getElementInfo', '/session/:sessionId/element/:id')
      .post('clickElement', '/session/:sessionId/element/:id/click')
      .post('clearElement', '/session/:sessionId/element/:id/clear')
      .post('submitElement', '/session/:sessionId/element/:id/submit')
      .get('getElementText', '/session/:sessionId/element/:id/text')
      .post('typeElement', '/session/:sessionId/element/:id/value', ['value'])
      .get('getElementTagName', '/session/:sessionId/element/:id/name')
      .get('isElementSelected', '/session/:sessionId/element/:id/selected')
      .get('isElementEnabled', '/session/:sessionId/element/:id/enabled')
      .get('getElementAttribute', '/session/:sessionId/element/:id/attribute/:name')
      .get('isElementEqual', '/session/:sessionId/element/:id/equals/:other')
      .get('isElementDysplayed', '/session/:sessionId/element/:id/displayed')
      .get('getElementLocation', '/session/:sessionId/element/:id/location')
      .get('getElementLocationInView', '/session/:sessionId/element/:id/location_in_view')
      .get('getElementSize', '/session/:sessionId/element/:id/size')
      .get('getElementCssProperty', '/session/:sessionId/element/:id/css/:propertyName')

      .get('getOrientation', '/session/:sessionId/orientation')
      .post('setOrientation', '/session/:sessionId/orientation', ['orientation'])

      .get('getAlertMessage', '/session/:sessionId/alert_text')
      .post('setAlertPrompt', '/session/:sessionId/alert_text', ['text'])
      .post('acceptAlert', '/session/:sessionId/accept_alert')
      .post('dismissAlert', '/session/:sessionId/dismiss_alert')

      .post('mouseMoveTo', '/session/:sessionId/moveto', ['element', 'xoffset', 'yoffset'])
      .post('mouseClick', '/session/:sessionId/click', ['button'])
      .post('mouseDoubleClick', '/session/:sessionId/doubleclick')
      .post('mouseDown', '/session/:sessionId/buttondown', ['button'])
      .post('mouseUp', '/session/:sessionId/buttonup', ['button'])

      .post('touchClick', '/session/:sessionId/touch/click', ['element'])
      .post('touchDown', '/session/:sessionId/touch/down', ['x', 'y'])
      .post('touchUp', '/session/:sessionId/touch/up', ['x', 'y'])
      .post('touchMove', 'session/:sessionId/touch/move', ['x', 'y'])
      .post('touchScroll', 'session/:sessionId/touch/scroll', ['element', 'xoffset', 'yoffset'])
      .post('touchDoubleClick', 'session/:sessionId/touch/doubleclick', ['element'])
      .post('touchLongClick', 'session/:sessionId/touch/longclick', ['element'])
      .post('touchFlick', 'session/:sessionId/touch/flick', ['element', 'xoffset', 'yoffset', 'speed', 'xspeed', 'yspeed'])

      .get('getGeoLocation', '/session/:sessionId/location')
      .post('setGeoLocation', '/session/:sessionId/location', ['location'])

      .post('setLocalStorage', '/session/:sessionId/local_storage', ['key', 'value'])
      .get('getLocalStorageKeys', '/session/:sessionId/local_storage')
      .delete('clearLocalStorage', '/session/:sessionId/local_storage')
      .get('getLocalStorageValue', '/session/:sessionId/local_storage/key/:key')
      .delete('deleteLocalStorageValue', '/session/:sessionId/local_storage/key/:key')
      .get('getLocalStorageSize', '/session/:sessionId/local_storage/size')

      .get('getSessionStorageKeys', '/session/:sessionId/session_storage')
      .post('setSessionStorage', '/session/:sessionId/session_storage', ['key', 'value'])
      .delete('deleteSessionStorage', '/session/:sessionId/session_storage')
      .get('getSessionStorageValue', '/session/:sessionId/session_storage/key/:key')
      .delete('deleteSessionStorageValue', '/session/:sessionId/session_storage/key/:key')
      .get('getSessionStorageSize', '/session/:sessionId/session_storage/size')

      .post('getLog', '/session/:sessionId/log', ['type'])
      .get('getLogTypes', '/session/:sessionId/log/types')
      .get('getAppCacheStatus', '/session/:sessionId/application_cache/status')

      .create(WebdriverWireProtocol.prototype)
  }
}

export default WebdriverWireProtocol

declare interface WebdriverWireProtocol {
  getStatus(): Promise<any>

  initSession(options: any): Promise<any>
  getSession(options: any): Promise<any>
  getSessions(): Promise<any>
  quit(options: any): Promise<any>

  setTimeout(options: any): Promise<any>
  setScriptTimeout(options: any): Promise<any>
  setImplicitWait(options: any): Promise<any>

  getWindow(options: any): Promise<any>
  getWindows(options: any): Promise<any>

  switchToWindow(options: any): Promise<any>
  closeWindow(options: any): Promise<any>
  setWindowSize(options: any): Promise<any>
  getWindowSize(options: any): Promise<any>
  setWindowPosition(options: any): Promise<any>
  getWindowPosition(options: any): Promise<any>
  maximizeWindow(options: any): Promise<any>

  switchToFrame(options: any): Promise<any>
  switchToParentFrame(options: any): Promise<any>

  getUrl(options: any): Promise<any>
  openUrl(options: any): Promise<any>
  goForward(options: any): Promise<any>
  goBack(options: any): Promise<any>
  refresh(options: any): Promise<any>

  getSource(options: any): Promise<any>
  getTitle(options: any): Promise<any>

  getCookies(options: any): Promise<any>
  setCookie(options: any): Promise<any>
  deleteAllCookies(options: any): Promise<any>
  deleteCookie(options: any): Promise<any>

  setAlertPrompt(options: any): Promise<any>
  getAlertMessage(options: any): Promise<any>
  acceptAlert(options: any): Promise<any>
  dismissAlert(options: any): Promise<any>

  type(options: any): Promise<any>

  executeScript(options: any): Promise<any>
  executeAsyncScript(options: any): Promise<any>

  screenshot(options: any): Promise<any>

  findElement(options: any): Promise<any>
  findElements(options: any): Promise<any>
  getActiveElement(options: any): Promise<any>
  findChildElement(options: any): Promise<any>
  findChildElements(options: any): Promise<any>

  //getElementInfo(options: any) : Promise<any>
  clickElement(options: any): Promise<any>
  clearElement(options: any): Promise<any>
  submitElement(options: any): Promise<any>
  getElementText(options: any): Promise<any>
  typeElement(options: any): Promise<any>
  getElementTagName(options: any): Promise<any>
  getElementAttribute(options: any): Promise<any>
  getElementCssProperty(options: any): Promise<any>
  getElementSize(options: any): Promise<any>
  getElementLocation(options: any): Promise<any>
  getElementLocationInView(options: any): Promise<any>
  isElementSelected(options: any): Promise<any>
  isElementEnabled(options: any): Promise<any>
  isElementEqual(options: any): Promise<any>
  isElementDysplayed(options: any): Promise<any>

  mouseMoveTo(options: any): Promise<any>
  mouseClick(options: any): Promise<any>
  mouseDoubleClick(options: any): Promise<any>
  mouseDown(options: any): Promise<any>
  mouseUp(options: any): Promise<any>

  touchClick(options: any): Promise<any>
  touchDown(options: any): Promise<any>
  touchUp(options: any): Promise<any>
  touchMove(options: any): Promise<any>
  touchScroll(options: any): Promise<any>
  touchDoubleClick(options: any): Promise<any>
  touchLongClick(options: any): Promise<any>
  touchFlick(options: any): Promise<any>

  getOrientation(options: any): Promise<any>
  setOrientation(options: any): Promise<any>

  getGeoLocation(options: any): Promise<any>
  setGeoLocation(options: any): Promise<any>

  setLocalStorage(options: any): Promise<any>
  getLocalStorageKeys(options: any): Promise<any>
  clearLocalStorage(options: any): Promise<any>
  getLocalStorageValue(options: any): Promise<any>
  deleteLocalStorageValue(options: any): Promise<any>
  getLocalStorageSize(options: any): Promise<any>

  getSessionStorageKeys(options: any): Promise<any>
  setSessionStorage(options: any): Promise<any>
  deleteSessionStorage(options: any): Promise<any>
  getSessionStorageValue(options: any): Promise<any>
  deleteSessionStorageValue(options: any): Promise<any>
  getSessionStorageSize(options: any): Promise<any>

  getLog(options: any): Promise<any>
  getLogTypes(options: any): Promise<any>
  getAppCacheStatus(options: any): Promise<any>

  getImeAvailableEngines(options: any): Promise<any>
  getImeActiveEngine(options: any): Promise<any>
  isImeActivated(options: any): Promise<any>
  deactivateIme(options: any): Promise<any>
  activateIme(options: any): Promise<any>
}
