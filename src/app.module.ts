import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { UserCommand } from './user/user.command';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'postgres',
      entities: ['dist/**/*.entity.{ts,js}'],
      migrations: ['../dist/db/migration/*.{ts,js}'],
      migrationsRun: true,
      migrationsTransactionMode: 'all',
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, UserCommand],
})
export class AppModule {}
