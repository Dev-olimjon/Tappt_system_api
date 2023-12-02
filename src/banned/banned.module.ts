import { Module } from '@nestjs/common';
import { BannedController } from './banned.controller';
import { BannedService } from './banned.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { BannedsTable } from './madel/banned.madel';

@Module({
  imports:[
    SequelizeModule.forFeature([BannedsTable])
  ],
  controllers: [BannedController],
  providers: [BannedService],
})
export class BannedModule {}
