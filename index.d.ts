export interface OptionsType {
  options?: string[];
  title?: string;
  dark?: boolean;
  cancelButtonIndex?: number;
}

export type ShareWithOptionsType = {
  url: string;
  subject: string;
  message: string;
}

export default class BottomSheet {
  static showBottomSheetWithOptions: (
    options?: OptionsType,
    callback?: (value: number) => void | undefined,
  ) => void
  static showShareBottomSheetWithOptions: (
    options: ShareWithOptionsType,
    callback: (value: any) => void | undefined,
  ) => void
}
