import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Businesses } from "../../business/entities/business.entity";

@Entity('equipment_categories')
export class EquipmentCategory{
  @PrimaryGeneratedColumn()
  category_id!: number;

  @ManyToOne(() => Businesses)
  @JoinColumn({name: 'business_id'})
  business!: Businesses;

  @ManyToOne(() => EquipmentCategory, {nullable: true})
  @JoinColumn({name: 'parent_category'})
  parent_category!: EquipmentCategory;

  @Column({type: 'varchar', length: 100})
  name!: string;
}