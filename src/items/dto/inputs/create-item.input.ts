import { InputType, Int, Field, Float } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsPositive, IsString } from 'class-validator';

//que campos son los requeridos para crear un registro
@InputType()
export class CreateItemInput {

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  name:string;

  @Field(() => Float)
  @IsPositive()
  quantity:number;

  //nullable es opcional puede venir o no
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  quantityUnits?:string;

}
