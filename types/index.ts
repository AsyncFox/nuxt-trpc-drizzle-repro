export interface ConfirmDialogLabel {
  title: string
  description?: string
  confirm?: string
  cancel?: string
}
export type ConfirmDialogChoice = 'confirm' | 'cancel'

export interface ErrorDialogData {
  title: string
  messages: string[]
  close: string
}

export interface GuideDraft {
  content: string
}
