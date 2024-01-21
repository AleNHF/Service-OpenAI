import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterDto): Promise<{
        message: string;
        user: import("../users/entities/individual-user.entity").IndividualUser;
        token: string;
    }>;
    login(loginDto: LoginDto): Promise<{
        message: string;
        user: {
            id: number;
            email: string;
        };
        token: string;
    }>;
    profile(req: any): any;
    validateEmail(verifyEmailDto: VerifyEmailDto): Promise<any>;
    updateProfile(req: any, updateData: UpdateProfileDto): Promise<{
        message: string;
        user: import("../users/entities/individual-user.entity").IndividualUser & import("../users/entities/user.entity").User;
    }>;
}
