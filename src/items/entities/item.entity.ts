import { Field, Float, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

//entidad para la base de datos
@Entity({ name: 'items' })
@ObjectType()
export class Item {

  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id:string;

  @Column()
  @Field(() => String)
  name:string;

  @Column()
  @Field(() => Float)
  quantity:number;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  quantityUnits?:string; //g, ml, kg, tsp
  
}
