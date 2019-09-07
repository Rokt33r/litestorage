import { localLiteStorage } from '../src'

describe('localLiteStorage', () => {
  afterEach(() => {
    localStorage.clear()
  })

  describe('#setItem', () => {
    it('sets a string item', () => {
      // When
      localLiteStorage.setItem('test', 'value')

      // Then
      expect(localStorage.getItem('test')).toBe('value')
    })
  })

  describe('#getItem', () => {
    it('gets an item by a key', () => {
      // Given
      localStorage.setItem('test', 'value')

      // When
      const result = localLiteStorage.getItem('test')

      // Then
      expect(result).toBe('value')
    })

    it('returns null if value does not exist', () => {
      // When
      const result = localLiteStorage.getItem('test')

      // Then
      expect(result).toBe(null)
    })
  })

  describe('#removeItem', () => {
    it('removes an item', () => {
      // Given
      localStorage.setItem('test', 'value')

      // When
      localLiteStorage.removeItem('test')

      // Then
      expect(localStorage.getItem('test')).toBe(null)
    })
  })

  describe('#clear', () => {
    it('removes all items', () => {
      // Given
      localStorage.setItem('test', 'value')
      localStorage.setItem('test2', 'value2')

      // When
      localLiteStorage.clear()

      // Then
      expect(localStorage.getItem('test')).toBe(null)
      expect(localStorage.getItem('test2')).toBe(null)
    })
  })
})
