import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserService } from './user.service'; 
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { RegistrationDto } from './registration.dto';
import { LoginDto } from './login.dto';

@Injectable()
export class AppService {
  constructor(private readonly userService: UserService) {}  

  private async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  }

  async registerUser(registrationData: RegistrationDto): Promise<User> {
    const { email, password, firstName, lastName } = registrationData;

    const existingUser = await this.userService.findUserByEmail(email);

    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    const hashedPassword = await this.hashPassword(password);
    const newUser = new User();
    newUser.email = email;
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.password = hashedPassword;

    const savedUser = await this.userService.createUser(newUser);

    return savedUser;
  }

  async loginUser(loginData: LoginDto): Promise<Partial<User>> {
    const { email, password } = loginData;
    const user = await this.userService.findUserByEmail(email);
  
    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }
  
    const isPasswordValid = await bcrypt.compare(password, user.password);
  
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const token = jwt.sign({  id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      picture: user.picture,
      accessToken: user.accessToken,
      refreshToken: user.refreshToken, }, 'your-secret-key', { expiresIn: '1h' });

    user.accessToken = token;
    const userResponse: Partial<User> = {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      picture: user.picture,
      accessToken: user.accessToken,
      refreshToken: user.refreshToken,
  };

    return userResponse;
}


  googleLogin(req) {
    if (!req.user) {
      return 'No user from google'
    }
    
    return {
      message: 'User Info from Google',
      user: req.user
    }
  }
  
  async updateUserAccessToken(userId: string, newAccessToken: string): Promise<User> {
    const user = await this.userService.findOne(userId);

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    user.accessToken = newAccessToken;
    await this.userService.save(user);

    return user;
  }

}