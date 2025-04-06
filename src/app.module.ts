import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/user.module';

@Module({
  // imports: [MongooseModule.forRoot('mongodb://test:test123@localhost/nestjs_mongodb')],
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nestjs_mongodb'),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
