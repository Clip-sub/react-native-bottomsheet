import { NativeModules, Platform } from 'react-native';
import BottomSheetIOS from "./module.ios";

export default Platform.OS === 'ios' ? BottomSheetIOS : NativeModules.RNBottomSheet;
