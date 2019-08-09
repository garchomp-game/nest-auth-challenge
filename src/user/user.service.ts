import { User } from './user.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async findOne(name: string): Promise<User | undefined> {
        return this.userRepository.findOne({ name });
    }

    async signUp(name: string, email: string, password: string) {
        const user = new User();
        user.name = name;
        user.email = email;
        const bcrypt = await require('bcrypt');
        user.password = await bcrypt.hashSync(password, 15);
        return this.userRepository.save(user);
    }
}
