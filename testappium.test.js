// javascript
const wdio = require('webdriverio');

const opts = {
  port: 4723,
  desiredCapabilities: {
    platformName: "Android",
    platformVersion: "7.1.1",
    deviceName: "Android Emulator",
    app: "/Program Files (x86)/Appium/node_modules/appium/ApiDemos-debug.apk",
    automationName: "UiAutomator2"
  }
};

const client = wdio.remote(opts);
//wdio.logs('logcat')

client
  .init()
  .click("~App")
  .click("~Alert Dialogs")
  .back()
  .back()
  .end();
  
  



