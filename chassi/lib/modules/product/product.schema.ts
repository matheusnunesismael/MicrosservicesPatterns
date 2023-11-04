import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  collection: 'product',
})
export class Product {
  @Prop({
    index: true,
  })
  sku: string;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  available: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
