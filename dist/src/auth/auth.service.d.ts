import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { VerifyEmailDto } from './dto/verify-email.dto';
import { UsersService } from 'src/users/users.service';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { AwsService } from '../aws/aws.service';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    private readonly awsService;
    constructor(usersService: UsersService, jwtService: JwtService, awsService: AwsService);
    register({ name, lastname, username, email, password, birthDate, photo_url }: RegisterDto): Promise<{
        message: string;
        user: import("../users/entities/individual-user.entity").IndividualUser;
        token: string;
    }>;
    login({ email, password }: LoginDto): Promise<{
        message: string;
        user: {
            id: number;
            email: string;
        };
        token: string;
    }>;
    profile({ email }: {
        email: string;
    }): Promise<import("../users/entities/individual-user.entity").IndividualUser>;
    verifyEmail(verifyEmailDto: VerifyEmailDto): Promise<any>;
    generateRandomNumber(): number;
    updateUserProfile(userId: number, updateData: UpdateProfileDto): Promise<import("../users/entities/individual-user.entity").IndividualUser & import("../users/entities/user.entity").User>;
}
