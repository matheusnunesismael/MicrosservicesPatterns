import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from '../user/user.schema';
import { Product } from '../product/product.schema';

@Schema({
  collection: 'order',
})
export class Order {
  @Prop({
    index: true,
  })
  cod: string;

  @Prop()
  client: User;

  @Prop()
  product: Product;

  @Prop()
  total: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
