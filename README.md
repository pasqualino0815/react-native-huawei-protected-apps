# Android module react-native-huawei-protected-apps
Huawei devices have enabled by default a battery safe mode called 'Protected Apps'. Freshly installed apps are flagged by default (if not popular enough) as 'not protected'. This feature prevents the apps from receiving push notifications (GCM, FCM, ...) in background. This module allows showing a customized dialog to prevent the user and to allow him to navigate directly to the corresponding settings activity.

### Notes & limitations

This Module cannot detect if the user has already enabled protected mode for the app. The dialog will be shown under the following conditions:

1. intent 'com.huawei.systemmanager/com.huawei.systemmanager.optimize.process.ProtectActivity' is callable
2. "Do not show again" checkbox hasn't been checked yet

It is not necessary to check for ```Platform.OS === 'android'``` as the module wrapper does this for you already

## Installation

```
npm install --save react-native-huawei-protected-apps@latest
react-native link react-native-huawei-protected-apps
```
  
## Usage

```javascript
import HuaweiProtectedApps from 'react-native-huawei-protected-apps';

const config = {
  title: "Huawei Protected Apps",
  text: "This app requires to be enabled in 'Protected Apps' in order to receive push notifcations",
  doNotShowAgainText: "Do not show again",
  positiveText: "PROTECTED APPS",
  negativeText: "CANCEL"
};

HuaweiProtectedApps.AlertIfHuaweiDevice(config);
```
<img src="screenshots/screen1.png?raw=tru" width="300px" />
<img src="screenshots/screen2.png?raw=tru" width="300px" />
  
## Credits
Special thanks to https://github.com/Aiuspaktyn and his post on http://stackoverflow.com/a/35220476/6826609
