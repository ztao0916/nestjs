/*
 * @Author: ztao
 * @Date: 2023-05-30 18:21:34
 * @LastEditTime: 2023-05-30 18:26:25
 * @Description:
 */
import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/demo')
  getDemo(): string {
    return '我是demo测试';
  }

  @Post('/post')
  sendMessage(@Body() params: object) {
    console.log('post', params);
    return params;
  }
}
