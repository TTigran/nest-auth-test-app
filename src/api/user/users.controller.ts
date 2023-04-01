import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateUserDto } from './users.dto';
import { User } from './users.entity';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  @Inject(UsersService)
  private readonly service: UsersService;

  @Get(':id')
  public getUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.service.getUser(id);
  }

  @Post()
  public createUser(@Body() body: CreateUserDto): Promise<User> {
    return this.service.createUser(body);
  }
}
