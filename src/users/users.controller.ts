import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  /*
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
  */

  @Get() //GET /users or /users?role=value
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return [role];
  }

  @Get('interns')
  findAllInterns() {
    return { interns: 'interns' };
  }

  @Get(':id') //GET /user/:id
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post()
  Create(@Body() user: {}) {
    return user;
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return { id };
  }
}
