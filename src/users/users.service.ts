import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
/**
 * class to connect to users table and perform business operations.
 */

@Injectable()
export class UsersService {
  /**
   * declare initial value
   */
  private users = [
    {
      id: 1,
      name: 'Omar',
      email: 'omar@gamil.com',
      role: 'INTERN',
    },
    {
      id: 2,
      name: 'Faruk',
      email: 'faruk@gamil.com',
      role: 'ENGINEER',
    },
    {
      id: 3,
      name: 'Omar Faruk',
      email: 'omarfaruk@gamil.com',
      role: 'ADMIN',
    },
  ];
  /**
   * get all users
   */

  public findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      const rolesArray = this.users.filter((user) => user.role === role);
      if (!rolesArray.length) {
        throw new NotFoundException('User role not found.');
      }
      return rolesArray;
    }

    return this.users;
  }

  /**
   * get single user
   */
  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new NotFoundException('User does not exist');

    return user;
  }

  /**
   * create user
   */
  create(createUserDto: CreateUserDto) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...createUserDto,
    };

    this.users.push(newUser);
    return newUser;
  }

  /**
   * update single user
   */
  update(id: number, updatedUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUserDto };
      }
      return user;
    });

    return this.findOne(id);
  }

  /**
   * delete single user
   */
  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
