import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class ChassiCacheService {
  constructor(@Inject(CACHE_MANAGER) private readonly cache: Cache) { }

  get(key: string): Promise<any> {
    return this.cache.get(key);
  }

  async set(key: string, value: any) {
    await this.cache.set(key, value);
  }
}
