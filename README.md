# react-native-bottomsheet

`react-native-bottomsheet` is a cross-platform ActionSheet for both Android and iOS. It uses original ActionSheet on iOS and [soarcn BottomSheet](https://github.com/soarcn/BottomSheet) on Android with some minor fixes, such as title and list item margins.

*Update*: The library now uses a copy of original lib (source copied) so you can modify it whenever you need to.

![bottomsheet](https://raw.githubusercontent.com/acaziasoftcom/react-native-bottomsheet/master/image-demo.png)

Note: On Android, `message` property is not available. Instead, there's a `dark` option to turn on Dark Mode like so:

```js
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
```bash
npm install --save react-native-bottomsheet
```
Then:

### - If you are using React Native _0.60+_

You don't have to do anything, since it will be linked automatically for you.

### - If you are using React Native 0.59 and below

Then link the native module, since we are using native bottom sheet on Android:
```bash
react-native link react-native-bottomsheet
```

Or you can link it manually in `MainApplication.java`

```java
import com.clipsub.rnbottomsheet.RNBottomSheetPackage; // Import this

....
@Override
protected List<ReactPackage> getPackages() {
  return Arrays.<ReactPackage>asList(
       new RNBottomSheetPackage() // Add this
  );
}
```

## Usage

### Import the package
```js
import BottomSheet from 'react-native-bottomsheet';
```

### Use it like how you do with ActionSheet.
````js
BottomSheet.showBottomSheetWithOptions(options: Object, callback: Function)
BottomSheet.showShareBottomSheetWithOptions(options: Object, failureCallback: Function, successCallback: Function)
````

Example:

```js
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

```js
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
