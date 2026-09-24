// user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        //Inject Repositoty vào Service
        @InjectRepository(User)
        private readonly userRepository: Repository<User>, // Inject repository
    ) { }

    //Tạo hàm tìm kiếm tất cả dữ liệu
    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    //Tạo hàm tạo cơ sở dữ liệu
    async create(userData: Partial<User>): Promise<User> {
        const user = this.userRepository.create(userData);
        return this.userRepository.save(user);
    }
}