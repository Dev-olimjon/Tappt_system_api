import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { UsersTable } from './users/madel/users.madel';
import { AuthModule } from './auth/auth.module';
import { BannedModule } from './banned/banned.module';
import { BannedsTable } from './banned/madel/banned.madel';
import { BooksModule } from './books/books.module';
import { BooksTable } from './books/madel/books.madel';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { LanuageModule } from './lanuage/lanuage.module';
import * as path from 'path'
import { LanguageTable } from './lanuage/madel/language.madel';
import { MarkedModule } from './marked/marked.module';
import {MarkedTable} from "./marked/madel/marked.madel";
import { HistoryModule } from './history/history.module';
import {HistoryTable} from "./history/madel/history.madel";
import { TypesModule } from './types/types.module';
import { TypesTable } from './types/madel/types.madel';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'secret',
      signOptions: { expiresIn: '30d' },
    }),
    ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'discover') }),
    ConfigModule.forRoot({ envFilePath: '.env' }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      uri: 'postgresql://olimjonmakhmudov26156:g2GuJmqDtof1@ep-rough-lab-a1fgysjf-pooler.ap-southeast-1.aws.neon.tech/seeuidb?sslmode=require',
      autoLoadModels: true,
      models: [
        UsersTable,
        BannedsTable,
        BooksTable,
        LanguageTable,
        MarkedTable,
        HistoryTable,
        TypesTable
      ],
    }),
    UsersModule,
    AuthModule,
    BannedModule,
    BooksModule,
    FileModule,
    LanuageModule,
    MarkedModule,
    HistoryModule,
    TypesModule,
  ],
})
export class AppModule {}
