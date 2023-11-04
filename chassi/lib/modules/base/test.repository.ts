import { Injectable } from '@nestjs/common';
import { Connection, Model, Schema } from 'mongoose';

@Injectable()
export class TestRepository<T, TSchema extends Schema = any> {
  constructor(
    private readonly model: Model<T>,
    private readonly schema: TSchema,
    private readonly mockList: T[],
    private readonly mockObject: T,
  ) { }

  async create(data: T): Promise<T> {
    return await this.model.create(data);
  }

  async findAll(): Promise<T[]> {
    return await this.model.find();
  }

  async findOne(id: string): Promise<T> {
    return await this.model.findById(id);
  }

  async update(id: string, data: T): Promise<T> {
    return await this.model.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<T> {
    return await this.model.findByIdAndDelete(id);
  }
}
