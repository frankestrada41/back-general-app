import { Controller, Get } from "@nestjs/common";

@Controller()
export class ImagesController {
  @Get('/images')
  getImage() {
    return 'Images working'
  }
}