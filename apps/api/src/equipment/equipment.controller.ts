import { Body, Controller, Param, ParseIntPipe, Post, Patch, Delete } from "@nestjs/common";
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
  async update(@Param('id', ParseIntPipe) id: number, @Body() body:EquipmentDto){
    return this.equipmentService.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number){
    return this.equipmentService.delete(id);
  }
}