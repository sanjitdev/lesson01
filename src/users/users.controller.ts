import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get() // GET /users or /users?role=value
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.usersService.findAll(role);
  }

  @Get(':id') // GET /users/:id
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Post() // POST /users
  create(@Body() user: { name: string; email: string; role: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
    return this.usersService.create(user);
  }

  @Patch(':id') // PATCH /users/:id
  update(@Param('id') id: string, @Body() user: { name?: string; email?: string; role?: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
    return this.usersService.update(+id, user);
  }

  @Delete(':id') // DELETE /users/:id
  delete(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}
