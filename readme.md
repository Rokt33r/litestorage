# LiteStorage

Simpler storage for your test experience!

## Install

```
npm i litestorage
```

## How to use

Let's assume you want to make a JSON stroage which storing data via localStorage.

```ts
import { LiteStorage, localLiteStorage, MemoryLiteStorage } from 'litestorage'

class JSONStorage {
  liteStorage: LiteStorage

  constructor(liteStorage: LiteStorage) {
    this.liteStorage = liteStorage
  }

  setData(key: string, value: any) {
    this.liteStorage.setItem(key, JSON.stringify(value))
  }

  getData(key: string) {
    return JSON.parse(this.liteStorage.getItem(key))
  }
}

// Implement
const myStorage = new JSONStorage(localLiteStorage)
myStorage.setData('someData', { some: 'data' })

// Test
describe('JSONStorage', () => {
  it('do something 1', () => {
    // Mock localLiteStorage with MemoryLiteStorage
    const myStorage = new JSONStorage(new MemoryLiteStorage())
    ...
  })

  it('do something 2', () => {
    // So you don't need to clean up lite storage in next tests.
    const myStorage = new JSONStorage(new MemoryLiteStorage())
    ...
  })
})
```

## APIs

### `LiteStorage`

An interface has same apis of Web Storage. The only difference is that it is not exposing any values directly. So you always have to use `#getItem` method to retrieve data.

### `localLiteStorage`

A wrapper for localStorage.

### `MemoryStorage`

A LiteStorage, using native `Map` to store data.

You can access the map via `MemoryStorage#map` for debugging.

## License

MIT
