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
    //Hàm hiển thị dữ liệu theo yêu cầu
    findOne(id: number){
        return this.userRepository.findOneBy({ id });
    }
    //Hàm cập nhật dữ liệu
    async update(id:number, data: Partial<User>){
        await this.userRepository.update(id, data);
        return this.findOne;
    }
    //Hàm xóa dữ liệu
    async remove (id: number){
        await this.userRepository.delete(id);
        return { delete: true};
    }
}