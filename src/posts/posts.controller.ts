import { Body, Controller, Patch, Post } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdatePostsDto } from './dto/update-post.dto';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  // create a blog post
  @ApiOperation({
    summary: 'Create a new blog post.',
  })
  @ApiResponse({
    status: 201,
    description: 'You got a 201 response if your post is created successfully.',
  })
  @Post()
  public async createPost(@Body() createPostDto: CreatePostDto) {
    console.log(createPostDto);
  }

  // update a blog post
  @Patch()
  public async updatePost(@Body() updatePostDto: UpdatePostsDto) {
    console.log(updatePostDto);
  }
}
