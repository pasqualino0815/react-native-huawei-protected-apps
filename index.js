var HuaweiProtectedApps = require('react-native').NativeModules.HuaweiProtectedApps;
var DeviceEventEmitter = require('react-native').DeviceEventEmitter;

import { Platform } from 'react-native';


module.exports = {
  AlertIfHuaweiDevice(config) {
    if (Platform.OS === 'android') {
      HuaweiProtectedApps.AlertIfHuaweiDevice(config.title, config.text, config.doNotShowAgainText, config.positiveText, config.negativeText);
    }
  }
}
