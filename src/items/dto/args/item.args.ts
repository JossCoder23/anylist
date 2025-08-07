import { ArgsType, Field, ID } from "@nestjs/graphql";
import { IsBoolean, IsOptional, IsUUID } from "class-validator";

@ArgsType()
export class ItemsArgs {

  @Field(() => String)
  @IsUUID()
  id:string;
  
}