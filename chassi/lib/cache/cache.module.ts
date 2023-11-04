
import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ChassiCacheService } from './cache.service';

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
      ttl: 600
    }),
  ],
  providers: [ChassiCacheService],
  exports: [ChassiCacheService],
})
export class ChassiCacheModule { }
