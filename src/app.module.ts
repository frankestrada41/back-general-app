import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImagesController } from './images/infraestructure/controllers/imagesController';

const controllers = [ImagesController]
const useCases = []
@Module({
  imports: [],
  controllers: [AppController,
    ...controllers,
  ],
  providers: [AppService],
})
export class AppModule { }
