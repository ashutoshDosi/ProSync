import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Equipment } from "./entities/equipment.entity";
import { EquipmentDto } from "./dto/equipment.dto";

@Injectable()
export class EquipmentService{
  constructor(
    @InjectRepository(Equipment) private equipments: Repository<Equipment>
  ){}

  async add(dto: EquipmentDto){
    try{
      const equipment = await this.equipments.save({...dto})
      return equipment;
    }catch(err: any){
      throw err;
    }
  }

  async update(id: string, dto: Partial<EquipmentDto>){
    try{
      await this.equipments.update(id, dto);
      return this.equipments.findOneBy({equipment_id: id})
    }catch(err: any){
      throw err;
    }
  }

  async delete(id: string){
    try{
      return await this.equipments.delete(id);
    } catch (err){
      throw err;
    }
  }
}