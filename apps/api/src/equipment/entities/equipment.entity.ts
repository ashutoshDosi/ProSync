import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Businesses } from "../../business/entities/business.entity";
import { EquipmentCategory } from "./equipment_category.entity";
import { Status } from "@repo/enums/equipment_status.enum";

@Entity()
export class Equipment {
  @PrimaryGeneratedColumn()
  equipment_id!: number;

  @ManyToOne(()=>Businesses)
  @JoinColumn({name: 'business_id'})
  business!: Businesses

  @ManyToOne(()=>EquipmentCategory)
  @JoinColumn({name: 'category_id'})
  category!: EquipmentCategory

  @Column({type:'varchar', length: 150})
  name!: string;

  @Column({type: "varchar", length: 100, nullable: true})
  barcode!: string;

  @Column({type: 'varchar', length: 20, default: Status.AVAILABLE})
  status!: Status;

  @Column({type:'int', default: 7})
  rental_cycle_count!: number;

  @Column({type: "int", nullable: true})
  rental_price!: number;

  @Column({type: 'date'})
  last_maintenance!: Date;
}
