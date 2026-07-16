import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Businesses } from "../../business/entities/business.entity";
import { EquipmentCategory } from "./equipment_category.entity";

export enum Status {
  AVAILABLE = 'available',
  RENTED = 'rented',
  MAINTENANCE = 'under-maintenance',
}


@Entity()
export class Equipment {
  @PrimaryGeneratedColumn('uuid')
  equipment_id!: string;

  @ManyToOne(()=>Businesses)
  @JoinColumn({name: 'business_id'})
  business_id!: Businesses

  @ManyToOne(()=>EquipmentCategory)
  @JoinColumn({name: 'category_id'})
  category_id!: EquipmentCategory

  @Column({type:'varchar'})
  name!: string;

  @Column({type: "varchar"})
  barcode!: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.AVAILABLE,
  })
  status!: string;

  @Column({type:'int'})
  rental_cycle_count!: number;

  @Column({type: "int" })
  rental_price!: number;

  @Column({type: Date})
  last_maintenance!: Date;
}
