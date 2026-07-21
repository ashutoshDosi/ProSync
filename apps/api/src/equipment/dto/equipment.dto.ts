import { IsDate, IsNumber, IsString, IsUUID } from "class-validator";


export class EquipmentDto {

  @IsString()
  name!: string;

  @IsNumber()
  rental_price!: number;

  @IsNumber()
  rental_cycle_count!: number;

  @IsString()
  barcode!: string;

  @IsDate()
  last_maintenance!: Date;
}

