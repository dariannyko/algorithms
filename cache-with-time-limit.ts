class TimeLimitedCache {
  cache: Map<number, any>;
  constructor() {
    this.cache = new Map();
  }

  set(key: number, value: number, duration: number): boolean {
    let isElementAvailable = this.cache.has(key);
    if (isElementAvailable) {
      const existingTimeout = this.cache.get(key).timeout;
      clearTimeout(existingTimeout);
    }
    const timeout = setTimeout(() => {
      this.cache.delete(key);
    }, duration);
    this.cache.set(key, { value, timeout: timeout });
    return isElementAvailable;
  }

  get(key: number): number {
    if (this.cache.has(key)) {
      return this.cache.get(key).value;
    }
    return -1;
  }

  count(): number {
    return this.cache.size;
  }
}
