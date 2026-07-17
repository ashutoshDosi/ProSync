import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Businesses } from "../../business/entities/business.entity";
import { EquipmentCategory } from "./equipment_category.entity";
import { Status } from "@repo/enums/equipment_status.enum";

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
