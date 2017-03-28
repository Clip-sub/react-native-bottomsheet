# react-native-bottomsheet

RNBottomSheet is a cross-platform ActionSheet for both Android and iOS. It uses original ActionSheet on iOS and [soarcn BottomSheet](https://github.com/soarcn/BottomSheet) on Android with some minor fixes, such as title and list item margins.

Note: On Android, "message" property is not available.

## Installation
```
npm install --save react-native-bottomsheet
```

## Demo

Coming soon...

## Usage

### Import the package
```
import BottomSheet from 'react-native-bottom-sheet';
```

### Use it like how you do with ActionSheet.
````
BottomSheet.showBottomSheetWithOptions(options: Object, callback: Function)
BottomSheet.showShareBottomSheetWithOptions(options: Object, failureCallback: Function, successCallback: Function)
````