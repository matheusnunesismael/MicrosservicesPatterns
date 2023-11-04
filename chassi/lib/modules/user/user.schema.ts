import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  collection: 'user',
})
export class User {
  @Prop({
    index: true,
  })
  email: string;

  @Prop()
  name: string;

  @Prop()
  password: string;

}

export const UserSchema = SchemaFactory.createForClass(User);
