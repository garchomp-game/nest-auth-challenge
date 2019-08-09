import { BaseUserDTO, GetNameDTO } from './user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';
import { Controller, Body, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('findall')
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Post('findone')
    findOne(@Body() req: GetNameDTO): Promise<User> {
        return this.userService.findOne(req.name);
    }

    @Post('signup')
    signUp(@Body() req: BaseUserDTO): Promise<User> {
        return this.userService.signUp(req.name, req.email, req.password);
    }
}
