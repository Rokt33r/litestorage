import { LiteStorage } from './LiteStorage'

export const localLiteStorage: LiteStorage = {
  getItem(key: string): string | null {
    return window.localStorage.getItem(key)
  },
  setItem(key: string, value: string) {
    window.localStorage.setItem(key, value)
  },
  removeItem(key: string) {
    return window.localStorage.removeItem(key)
  },
  clear() {
    window.localStorage.clear()
  }
}
