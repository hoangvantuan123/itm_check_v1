```
 <SubMenu
              key="submenu1"
              title={
                <span className="flex items-center gap-3">
                  <span
                    className={`icon-wrapper ${collapsed ? ' justify-center mt-2' : ''}`}
                  >
                    <HomeIcon />
                  </span>
                  {!collapsed && 'Menu Cha'}
                </span>
              }
            >
              <Menu.Item key="submenu1-1">
                <Link to="/u/item1" className="flex items-center justify-start">
                  Menu Item 1
                </Link>
              </Menu.Item>

              <Menu.Item key="submenu1-2">
                <Link to="/u/item2" className="flex items-center justify-start">
                  Menu Item 2
                </Link>
              </Menu.Item>

              <SubMenu
                key="submenu1-submenu2"
                title={
                  <span className="flex items-center gap-3">Menu Con</span>
                }
              >
                <Menu.Item key="submenu1-2-1">
                  <Link
                    to="/u/subitem1"
                    className="flex items-center justify-start"
                  >
                    Menu Con 1
                  </Link>
                </Menu.Item>

                <Menu.Item key="submenu1-2-2">
                  <Link
                    to="/u/subitem2"
                    className="flex items-center justify-start"
                  >
                    Menu Con 2
                  </Link>
                </Menu.Item>
              </SubMenu>
            </SubMenu> 
```


```
import { Controller, Post, Body, Req, UseGuards, HttpStatus, Res, UnauthorizedException } from '@nestjs/common';
import { AppService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import { RegistrationDto } from './registration.dto';
import { LoginDto } from './login.dto';
import { ChangePasswordDto } from './change-password.dto'; // DTO cho đổi mật khẩu
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

@Controller('api')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
  ) {}

  @Post('register')
  async register(@Body() registrationData: RegistrationDto) {
    const user = await this.appService.registerUser(registrationData);
    return user;
  }

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.appService.loginUser(loginDto);
  }

  // API đổi mật khẩu
  @UseGuards(AuthGuard('jwt')) // Bảo vệ bằng JWT, chỉ người dùng đã đăng nhập mới có thể đổi mật khẩu
  @Post('change-password')
  async changePassword(
    @Req() req: Request, // Lấy thông tin user từ token JWT
    @Body() changePasswordDto: ChangePasswordDto,
    @Res() res: Response
  ) {
    const { oldPassword, newPassword } = changePasswordDto;
    
    // Lấy userId từ JWT (token chứa thông tin user sau khi đã xác thực)
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'your-secret-key-31'); // Giải mã token
    const userId = decodedToken.id; // Giả sử token chứa userId

    try {
      // Gọi service để đổi mật khẩu
      await this.appService.changePassword(userId, oldPassword, newPassword);
      return res.status(HttpStatus.OK).json({
        success: true,
        message: 'Password changed successfully',
      });
    } catch (error) {
      throw new UnauthorizedException('Old password is incorrect or other error');
    }
  }
}

```