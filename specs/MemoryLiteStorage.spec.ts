import { MemoryLiteStorage } from '../src'

describe('MemoryLiteStorage', () => {
  describe('#setItem', () => {
    it('sets a string item', () => {
      // Given
      const storage = new MemoryLiteStorage()

      // When
      storage.setItem('test', 'value')

      // Then
      expect(storage.map.get('test')).toBe('value')
    })
  })

  describe('#getItem', () => {
    it('gets an item by a key', () => {
      // Given
      const storage = new MemoryLiteStorage()
      storage.map.set('test', 'value')

      // When
      const result = storage.getItem('test')

      // Then
      expect(result).toBe('value')
    })

    it('returns null if value does not exist', () => {
      // Given
      const storage = new MemoryLiteStorage()

      // When
      const result = storage.getItem('test')

      // Then
      expect(result).toBe(null)
    })
  })

  describe('#removeItem', () => {
    it('removes an item', () => {
      // Given
      const storage = new MemoryLiteStorage()
      storage.map.set('test', 'value')

      // When
      storage.removeItem('test')

      // Then
      expect(storage.map.get('test')).toBe(undefined)
    })
  })

  describe('#clear', () => {
    it('removes all items', () => {
      // Given
      const storage = new MemoryLiteStorage()
      storage.map.set('test', 'value')
      storage.map.set('test2', 'value2')

      // When
      storage.clear()

      // Then
      expect(storage.map.get('test')).toBe(undefined)
      expect(storage.map.get('test2')).toBe(undefined)
    })
  })
})
