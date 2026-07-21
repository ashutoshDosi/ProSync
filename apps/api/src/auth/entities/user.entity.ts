import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from "typeorm";
import { Roles } from "@repo/enums/user_roles.enum";
import { Businesses } from "../../business/entities/business.entity";

@Entity('users')
export class User{
  @PrimaryGeneratedColumn()
  user_id!: number;

  @ManyToOne(() => Businesses)
  @JoinColumn({name: 'business_id'})
  business!: Businesses;

  @Column({type: 'varchar', length: 50})
  name!: string;

  @Column({unique: true, type: 'varchar', length: 150})
  email!: string;

  @Column({type: 'varchar', length: 255})
  password!: string;

  @Column({type: 'varchar', length: 20})
  role!: Roles;

  @Column({type: 'varchar', length: 10, nullable: true})
  phone!: string;

  @CreateDateColumn()
  created_at!: Date;
}