import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import * as cors from 'cors';

async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  // Cấu hình cors
  app.use(
    cors({
      origin: [
        'http://localhost:3000',
        'https://devbeta.online',
        'https://www.devbeta.online',
      ],
      credentials: true,
      methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    }),
  );

  server.use(express.json({ limit: '10mb' })); 
  server.use(express.urlencoded({ limit: '10mb', extended: true })); 

  const port = process.env.PORT || 5050;
  await app.listen(port);
}
bootstrap();
