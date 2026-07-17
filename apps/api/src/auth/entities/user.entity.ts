import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Roles } from "@repo/enums/user_roles.enum";

@Entity('users')
export class User{
  @PrimaryGeneratedColumn('uuid')
  user_id!: string;

  @Column({type: 'varchar', length: 50})
  name!: string;
  
  @Column({unique: true, type: 'varchar', length:225})
  email!: string;

  @Column()
  password!: string;

  @Column({
    type: 'enum',
    enum: Roles,
    default: Roles.CUSTOMER,
  })
  role!: string;

  @Column({type: 'varchar', length: 10})
  phone!: string;
}