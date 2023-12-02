import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { LanguageTable } from './madel/language.madel';

@Module({
    imports: [
        SequelizeModule.forFeature([LanguageTable])
    ]
})
export class LanuageModule {}
