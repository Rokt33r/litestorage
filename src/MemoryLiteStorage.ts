import { LiteStorage } from './LiteStorage'

export class MemoryLiteStorage implements LiteStorage {
  map = new Map<string, string>()

  getItem(key: string): string | null {
    const value = this.map.get(key)
    return value != null ? value : null
  }

  setItem(key: string, value: string) {
    this.map.set(key, value)
  }

  removeItem(key: string) {
    this.map.delete(key)
  }

  clear() {
    this.map.clear()
  }
}
