// user.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }
    //Hàm hiển thị tất cả dữ liệu
    @Get()
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }
    //Hàm tạo mới dữ liệu
    @Post()
    create(@Body() data: Partial<User>): Promise<User> {
        return this.userService.create(data);
    }
    @Get(':id')
    findOne(@Param('id') id: string){
        return this.userService.findOne(+id);
    }
    @Put(':id')
    update(@Param('id') id:string, @Body() user:Partial<User>){
        return this.userService.update(+id, user);
    }

    @Delete(':id')
    remove(@Param('id') id:string){
        return this.userService.remove(+id);
    }
}