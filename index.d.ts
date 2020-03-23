export interface showBottomSheetWithOptionsDTO {
  options: string[]
  title: string
  dark?: boolean
  cancelButtonIndex?: number
}

export interface showBottomSheetWithOptionsCallBackDTO {
  callBack?: (value: number) => void
}

export interface showShareBottomSheetWithOptionsDTO {
  url: string
  subject: string
  message: string
}

export default class BottomSheet {
  static showBottomSheetWithOptions: (
    options?: showBottomSheetWithOptionsDTO,
    callback?: showBottomSheetWithOptionsCallBackDTO,
  ) => void
  static showShareBottomSheetWithOptions: (
    options: showShareBottomSheetWithOptionsDTO,
    callBack: (value: any) => void,
  ) => void
}
