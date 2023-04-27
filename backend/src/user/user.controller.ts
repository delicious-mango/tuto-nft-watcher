import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Patch,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    try {
      return this.userService.findAll();
    } catch (err: unknown) {
      console.error(err);
      throw new HttpException('Internal server error', 500);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return this.userService.findByUnique(id);
    } catch (err: unknown) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        switch (err.code) {
          case 'P2025':
            throw new HttpException('User not found', 404);
          default:
            break;
        }
      }
      console.error(err);
      throw new HttpException('Internal server error', 500);
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: Prisma.UserUpdateInput,
  ) {
    try {
      return this.userService.update(id, updateUserDto);
    } catch (err: unknown) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        switch (err.code) {
          case 'P2025':
            throw new HttpException('User not found', 404);
          default:
            break;
        }
        console.error(err);
        throw new HttpException('Internal server error', 500);
      }
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return this.userService.remove(id);
    } catch (err: unknown) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        switch (err.code) {
          case 'P2025':
            throw new HttpException('User not found', 404);
          default:
            break;
        }
      }
      console.error(err);
      throw new HttpException('Internal server error', 500);
    }
  }
}
