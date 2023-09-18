import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserPayload } from './entities/user.payload';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(body: CreateUserDto): Promise<UserPayload> {
    const createdUser = new this.userModel(body);
    const user = await createdUser.save();
    return user;
  }

  async findOne(id: string): Promise<UserPayload> {
    const user = await this.userModel.findOne({ _id: id }).exec();

    if (!user) {
      throw new NotFoundException(`User with email id:${id} not found `);
    }
    return user;
  }

  async findAll(): Promise<UserPayload[]> {
    const users = await this.userModel.find();
    return users;
  }

  async update(id: string, body: UpdateUserDto): Promise<UserPayload> {
    await this.userModel.updateOne({ _id: id }, body);
    const updatedUser = this.userModel.findById(id);
    return updatedUser;
  }

  async remove(id: string): Promise<void> {
    await this.userModel.deleteOne({ _id: id });
  }
}
