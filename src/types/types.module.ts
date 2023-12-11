import { Module } from '@nestjs/common';
import { TypesController } from './types.controller';
import { TypesService } from './types.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { TypesTable } from './madel/types.madel';

@Module({
  imports: [
      SequelizeModule.forFeature([TypesTable])
  ],
  controllers: [TypesController],
  providers: [TypesService]
})
export class TypesModule {}
