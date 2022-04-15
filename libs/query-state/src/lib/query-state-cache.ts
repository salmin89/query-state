import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QueryStateCache {
  private cache = new Map<
    string,
    Map<string, { data: unknown; meta: { timestamp: number } }>
  >();

  getCacheEntry(
    name: string,
    key: string
  ): { data: unknown; meta: { timestamp: number } } | undefined {
    return this.readCache(name).get(key);
  }

  setCacheEntry(
    name: string,
    key: string,
    value: { data: unknown; meta: { timestamp: number } }
  ): void {
    const cache = this.readCache(name);
    cache.set(key, value);
  }

  private readCache(
    name: string
  ): Map<string, { data: unknown; meta: { timestamp: number } }> {
    if (!this.cache.has(name)) {
      this.cache.set(name, new Map());
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.cache.get(name)!;
  }
}
