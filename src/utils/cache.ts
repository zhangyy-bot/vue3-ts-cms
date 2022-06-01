class LocalCache {
  setCache(key: string, value: any, days = 3) {
    const expires = new Date().getTime() + days * 24 * 60 * 60 * 1000
    window.localStorage.setItem(key, JSON.stringify({ value, expires }))
  }

  getCache(key: string) {
    const keyValue = JSON.parse(localStorage.getItem(key)!)
    if (keyValue !== null && Date.now() < keyValue.expires) {
      return keyValue.value
    }
  }

  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }

  clearCache() {
    window.localStorage.clear()
  }
}

export default new LocalCache()
