import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ViewerModule } from './viewer/viewer.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ViewerModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'aaa',
    database: 'bdflix',
    entities: [],
    synchronize: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


/*

*/