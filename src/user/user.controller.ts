import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

 
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAllUser();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.viewUser(+id);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.removeUser(+id);
  }
}