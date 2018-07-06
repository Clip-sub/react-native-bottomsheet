import { ActionSheetIOS } from 'react-native';

const BottomSheetIOS = {
  showBottomSheetWithOptions: (options, callback) => {
    return ActionSheetIOS.showActionSheetWithOptions(options, callback);
  },

  showShareBottomSheetWithOptions: (options, failureCallback, successCallback) => {
    return ActionSheetIOS.showShareActionSheetWithOptions(options, failureCallback, successCallback);
  }
}

export default BottomSheetIOS;