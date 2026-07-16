import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Equipment } from "../../equipment/entities/equipment.entity";


@Entity()
export class Businesses{
  @PrimaryGeneratedColumn('uuid')
  business_id!: string;

  @Column()
  business_name!: string;
}