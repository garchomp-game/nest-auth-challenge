import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(name: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(name);
    const bcrypt = await require('bcrypt');
    if (user && await bcrypt.compareSync(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
