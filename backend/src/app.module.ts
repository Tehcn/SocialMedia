import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { SQL_LOGIN } from '../config.json';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mssql',
      host: 'localhost',
      port: 1433,
      username: SQL_LOGIN.username,
      password: SQL_LOGIN.password
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
