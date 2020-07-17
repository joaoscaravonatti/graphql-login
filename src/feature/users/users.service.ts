import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findById(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  findByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({
      where: {
        email,
      },
    });
  }

  create(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }

  async update(user: User): Promise<User> {
    const userData = await this.findById(user.id);
    this.usersRepository.merge(userData, user);
    return this.usersRepository.save(userData);
  }
}
