import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ChassiCacheService } from 'lib/cache/cache.service';
import { PaginationOptions } from 'lib/interfaces/findInterfaces';
import mongoose, { Connection, FilterQuery, Model, Schema } from 'mongoose';

@Injectable()
export class BaseRepository<T, TSchema extends Schema = any> {
  model: Model<T>;
  constructor(
    private readonly schema: TSchema,
    private readonly IchassiCacheService: ChassiCacheService,
    private readonly IconfigService: ConfigService,
  ) { }

  async repo(tenant?: string) {
    const connections: Connection[] = mongoose.connections;
    const databaseConnection = tenant ? tenant : this.IconfigService.get('databaseConnection.masterDatabase');
    const connection = connections.find((c) => c.name === tenant);
    const recentlyUsed = await this.IchassiCacheService.get(tenant);
    if (connection && recentlyUsed) {
      this.model = connection.model<T>(this.model.name, this.schema);
      return this
    }
    else {
      const newConnection = mongoose.createConnection(
        `${this.IconfigService.get('databaseConnection.uri')}/${databaseConnection}`,
        {
          ...this.IconfigService.get('databaseConnection.options'),
        },
      );
      await this.IchassiCacheService.set(tenant, true);
      this.model = newConnection.model<T>(this.model.name, this.schema);

      return this;
    }
  }

  async create(data: T): Promise<T> {
    return await this.model.create(data);
  }

  async findAll(filter?: FilterQuery<T>, sort?: any, pagination?: PaginationOptions): Promise<T[]> {
    const { page, pageSize } = pagination;
    return await this.model.find(filter || {}).sort(sort || {}).skip(page * pageSize).limit(pageSize);
  }

  async findOne(filter: FilterQuery<T>): Promise<T> {
    return await this.model.findOne(filter);
  }

  async update(filter: FilterQuery<T>, data: T): Promise<T> {
    return await this.model.findOneAndUpdate(filter, data, { new: true });
  }

  async delete(filter: FilterQuery<T>): Promise<T> {
    return await this.model.findOneAndDelete(filter);
  }
}
