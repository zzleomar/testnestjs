import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserSchema } from './entities/user.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), // Registra el modelo User
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
