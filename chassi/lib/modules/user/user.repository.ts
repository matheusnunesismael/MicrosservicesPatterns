
import { ChassiCacheService } from "lib/cache/cache.service";
import { BaseRepository } from "../base/base.repository";
import { ConfigService } from "@nestjs/config";
import { User, UserSchema } from "./user.schema";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository extends BaseRepository<User>  {
  constructor(
    private readonly chassiCacheService: ChassiCacheService,
    private readonly configService: ConfigService,
  ) {
    super(UserSchema, chassiCacheService, configService);
  }
}
