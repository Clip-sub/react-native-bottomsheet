# react-native-bottomsheet

`react-native-bottomsheet` is a cross-platform ActionSheet for both Android and iOS. It uses original ActionSheet on iOS and [soarcn BottomSheet](https://github.com/soarcn/BottomSheet) on Android with some minor fixes, such as title and list item margins.

Note: On Android, `message` property is not available. Instead, there's a `dark` option to turn on Dark Mode like so:

```
BottomSheet.showBottomSheetWithOptions({
  options: ['Option 1', 'Option 2', 'Option 3'],
  title: 'Demo Bottom Sheet',
  dark: true,
  cancelButtonIndex: 3,
}, (value) => {
  alert(value);
});
```

## Installation

First, install the npm package:
```
npm install --save react-native-bottomsheet
```
Then link the native module, since we are using native bottom sheet on Android:
```
react-native link react-native-bottomsheet
```

## Demo

![Android](https://camo.githubusercontent.com/77908b5b2a67447d4337ab47a8a9626af0be12d0/68747470733a2f2f7331372e706f7374696d672e6f72672f706a6c716e68677a332f616e64726f69642e706e67 "Android")

![iOS](https://camo.githubusercontent.com/bb1ff00dc37a2b57452148d21fa18eafcd9222f8/68747470733a2f2f7331372e706f7374696d672e6f72672f6374686961653930762f696f732e706e67 "iOS")

## Usage

### Import the package
```
import BottomSheet from 'react-native-bottomsheet';
```

### Use it like how you do with ActionSheet.
````
BottomSheet.showBottomSheetWithOptions(options: Object, callback: Function)
BottomSheet.showShareBottomSheetWithOptions(options: Object, failureCallback: Function, successCallback: Function)
````

Example:

```
import BottomSheet from 'react-native-bottomsheet';
...
BottomSheet.showBottomSheetWithOptions({
  options: ['Option 1', 'Option 2', 'Option 3'],
  title: 'Demo Bottom Sheet',
  dark: true,
  cancelButtonIndex: 3,
}, (value) => {
  alert(value);
});
```

```
BottomSheet.showShareBottomSheetWithOptions({
  url: 'https://google.com',
  subject: 'Share',
  message: 'Simple share',
}, (value) => {
  alert(value);
}, (resultcode, path) => {
  alert(resultcode);
  alert(path);
})
```
