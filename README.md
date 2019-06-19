# react-native-bottomsheet

`react-native-bottomsheet` is a cross-platform ActionSheet for both Android and iOS. It uses original ActionSheet on iOS and [soarcn BottomSheet](https://github.com/soarcn/BottomSheet) on Android with some minor fixes, such as title and list item margins.

*Update*: The library now uses a pre-compiled binary of a fork of above BottomSheet library. It should be compatible with projects using AndroidX as of now.

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
```sh
npm install --save react-native-bottomsheet
```
Then link the native module, since we are using native bottom sheet on Android:
```sh
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
