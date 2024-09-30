import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { encryptPassword } from './utils/encrypt-password';
import { isValidEmail } from './utils/valid-email';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createUserDto: Prisma.UserCreateInput) {
    const validEmail = isValidEmail(createUserDto.email);
    if (!validEmail) {
      return 'Please enter a valid email';
    }
    /**
     * hash password in order to store it in the data
     * warning: Don't store plain text into a database
     */
    const hashed = await encryptPassword(createUserDto.password);

    return this.databaseService.user.create({
      data: { ...createUserDto, password: hashed },
      select: {
        id: true,
        nickname: true,
        picture: true,
        pictureId: true,
        password: false,
        created: true,
        updated: true,
        email: true,
      },
    });
  }

  async findAll(nickname?: string) {
    if (nickname) {
      return this.databaseService.user.findMany({
        where: {
          nickname,
        },
        select: {
          id: true,
          nickname: true,
          picture: true,
          pictureId: true,
          password: false,
          created: true,
          updated: true,
          email: true,
        },
      });
    }
    return this.databaseService.user.findMany({
      select: {
        id: true,
        nickname: true,
        picture: true,
        pictureId: true,
        password: false,
        created: true,
        updated: true,
        email: true,
      },
    });
  }

  async findOne(id: string) {
    return this.databaseService.user.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        nickname: true,
        picture: true,
        pictureId: true,
        password: false,
        created: true,
        updated: true,
        email: true,
      },
    });
  }

  async findOneByEmail(email: string) {
    const validEmail = isValidEmail(email);
    if (!validEmail) {
      return 'Use valid email';
    }
    return this.databaseService.user.findUnique({
      where: { email },
      select: {
        id: true,
        nickname: true,
        picture: true,
        pictureId: true,
        password: false,
        created: true,
        updated: true,
        email: true,
      },
    });
  }

  async update(id: string, updateUserDto: Prisma.UserUpdateInput) {
    return this.databaseService.user.update({
      where: {
        id,
      },
      data: updateUserDto,
      select: {
        nickname: true,
        picture: true,
        pictureId: true,
        password: false,
        created: true,
        updated: true,
        email: true,
      },
    });
  }

  async remove(id: string) {
    return this.databaseService.user.delete({
      where: {
        id,
      },
    });
  }
}
