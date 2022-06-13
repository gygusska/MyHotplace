import { atom, selector } from 'recoil'

export const openPlace = atom<boolean>({
  key: '#openPlace',
  default: false,
})

export const openTheme = atom<boolean>({
  key: '#openTheme',
  default: false,
})
