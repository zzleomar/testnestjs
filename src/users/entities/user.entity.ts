import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'users', timestamps: true })
export class User extends Document {
  @Prop()
  fullName: string;

  @Prop()
  email: string;

  @Prop()
  bio: string;

  @Prop()
  password: string;

  // Otras propiedades del usuario

  constructor(partial: Partial<User>) {
    super();
    Object.assign(this, partial);
  }
}

export const UserSchema = SchemaFactory.createForClass(User);
