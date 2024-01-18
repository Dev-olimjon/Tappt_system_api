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
      port: 5432,
      autoLoadModels: true,
       uri: 'postgresql://olimjonmakhmudov26156:AP9rK6mNeVTR@ep-red-wildflower-993389-pooler.us-east-2.aws.neon.tech/tappt?sslmode=require',
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