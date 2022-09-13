import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CommandFactory } from 'nest-commander';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
async function bootstrapCommander() {
  console.log('starting command');
  await CommandFactory.run(AppModule);
}

if (process.argv[2] === 'create-user') {
  bootstrapCommander();
} else {
  bootstrap();
}
