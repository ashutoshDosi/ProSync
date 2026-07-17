import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Businesses } from "../../business/entities/business.entity";

@Entity()
export class EquipmentCategory{
  @PrimaryGeneratedColumn('uuid')
  category_id!: string;

  @ManyToOne(()=>Businesses)
  @JoinColumn({name: 'business_id'})
  business!: Businesses;

  @ManyToOne(()=> EquipmentCategory)
  @JoinColumn({name: 'category_id'})
  equipment_category!: EquipmentCategory;

  @Column({type: 'varchar'})
  name!: string;
}