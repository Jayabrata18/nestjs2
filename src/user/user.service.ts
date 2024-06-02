import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  createUser(createUserDto: CreateUserDto): Promise<User> {
    const user: User = new User();
    user.name = createUserDto.name;
    // user.age = createUserDto.age;
    user.email = createUserDto.email;
    // user.username = createUserDto.username;
    user.password = createUserDto.password;
    // user.gender = createUserDto.gender;
    return this.userRepository.save(user);
  }

  findAllUser(): Promise<User[]> {
    return this.userRepository.find();
  }
  viewUser(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }
  removeUser(id: number): Promise<{ affected?: number }> {
    return this.userRepository.delete(id);
  }
}
