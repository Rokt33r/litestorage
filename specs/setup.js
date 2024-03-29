//browserMocks.js
var localStorageMock = (function() {
  var store = {}

  return {
    getItem: function(key) {
      return store[key] != null ? store[key] : null
    },
    setItem: function(key, value) {
      store[key] = value.toString()
    },
    removeItem: function(key, value) {
      delete store[key]
    },
    clear: function() {
      store = {}
    }
  }
})()

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
})
