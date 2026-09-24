import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm'; //Khai báo thư viện typeorm
import { User } from './modules/user/user.entity';

@Module({
  imports: [UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestdb', //Tên cơ sở dữ liệu trong MySQL
      entities: [User], //danh sách các entity sẽ ánh xạ
      synchronize: true, // chỉ dùng trong phát triển
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }