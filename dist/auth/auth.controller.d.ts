import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthController {
    private authService;
    private jwtService;
    constructor(authService: AuthService, jwtService: JwtService);
    Register(User: RegisterDto): Promise<void>;
    Login(User: LoginDto): Promise<{
        token: string;
    }>;
    Profile(token: string): Promise<any>;
}
