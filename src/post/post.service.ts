import { Injectable } from '@nestjs/common';
import { AddPostDto } from './dtos/addPostDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/user.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private readonly userRepository: Repository<Post>,
  ) {}

  async postAddPost(body: AddPostDto, user: User) {
    const post = this.userRepository.create(body);
    post.user = user;
    await this.userRepository.save(post);
    return 'Created Article successfully';
  }
}
