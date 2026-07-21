import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EquipmentCategory } from "../../equipment/entities/equipment_category.entity";


@Entity()
export class Businesses{
  @PrimaryGeneratedColumn()
  business_id!: number;

  @Column({type: 'varchar', length: 150})
  business_name!: string;

  @CreateDateColumn()
  created_at!: Date;

  @OneToMany(()=> EquipmentCategory, (category)=> category.business)
  categories!: EquipmentCategory[]
}