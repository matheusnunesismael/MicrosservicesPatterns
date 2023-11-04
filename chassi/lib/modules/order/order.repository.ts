import { ChassiCacheService } from "lib/cache/cache.service";
import { BaseRepository } from "../base/base.repository";
import { ConfigService } from "@nestjs/config";
import { Injectable } from "@nestjs/common";
import { Order, OrderSchema } from "./order.schema";

@Injectable()
export class OrderRepository extends BaseRepository<Order>  {
  constructor(
    private readonly chassiCacheService: ChassiCacheService,
    private readonly configService: ConfigService,
  ) {
    super(OrderSchema, chassiCacheService, configService);
  }
}

