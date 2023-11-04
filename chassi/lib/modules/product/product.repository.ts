import { ChassiCacheService } from "lib/cache/cache.service";
import { BaseRepository } from "../base/base.repository";
import { Product, ProductSchema } from "./product.schema";
import { ConfigService } from "@nestjs/config";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductRepository extends BaseRepository<Product>  {
  constructor(
    private readonly chassiCacheService: ChassiCacheService,
    private readonly configService: ConfigService,
  ) {
    super(ProductSchema, chassiCacheService, configService);
  }
}
