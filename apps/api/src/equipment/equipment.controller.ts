import { Body, Controller, Param, Post, Patch, Delete } from "@nestjs/common";
import { EquipmentService } from "./equipment.service";
import { EquipmentDto } from "./dto/equipment.dto";

@Controller('equipment')
export class EquipmentController{
  constructor(private readonly equipmentService: EquipmentService){}

  @Post('add')
  async add(@Body() body: EquipmentDto){
    return this.equipmentService.add(body);
  }

  @Patch(':id')
  async update(@Param('id') id:string, @Body() body:EquipmentDto){
    return this.equipmentService.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id:string){
    return this.equipmentService.delete(id);
  }
} 