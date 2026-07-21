import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Businesses } from './entities/business.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Businesses])],
})
export class BusinessModule {}
