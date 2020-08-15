import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Hero extends Document {
  @Prop()
  id: number;

  @Prop()
  name: string;

 
}

export const HeroSchema = SchemaFactory.createForClass(Hero);