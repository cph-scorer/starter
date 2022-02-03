import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from '../exemple/app.controller';
import { AppService } from '../exemple/app.service';
import databaseConfig from '../db/database.config';

@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
