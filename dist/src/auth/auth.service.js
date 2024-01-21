"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcryptjs = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
const aws_service_1 = require("../aws/aws.service");
let AuthService = class AuthService {
    constructor(usersService, jwtService, awsService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.awsService = awsService;
    }
    async register({ name, lastname, username, email, password, birthDate, photo_url }) {
        const base64ToString = photo_url.toString('base64');
        const base64Image = base64ToString.replace(/^data:image\/[a-z]+;base64,/, '');
        const imageBuffer = Buffer.from(base64Image, 'base64');
        const existUser = await this.usersService.findOneByEmail(email);
        if (existUser) {
            throw new common_1.BadRequestException('Email already exists');
        }
        const token = this.generateRandomNumber().toString();
        const { profilePhotoUrl } = await this.awsService.uploadProfilePhotoToS3(imageBuffer, token);
        const hashedPassword = await bcryptjs.hash(password, 10);
        const newUser = await this.usersService.create({
            name,
            lastname,
            username,
            birthDate,
            email,
            photo_url: 'photo',
            password: hashedPassword,
            activationToken: token,
            type: 'individual'
        });
        const user = await this.usersService.findOneByEmail(newUser.email);
        const payload = {
            message: "User profile",
            user: user,
        };
        const authToken = await this.jwtService.signAsync(payload);
        return {
            message: "User created successfully",
            user: user,
            token: authToken
        };
    }
    async login({ email, password }) {
        const user = await this.usersService.findOneByEmail(email);
        if (!user) {
            throw new common_1.UnauthorizedException("Invalid email");
        }
        const isPasswordValid = await bcryptjs.compare(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException("Invalid password");
        }
        const payload = {
            message: "User profile",
            user: user,
        };
        const token = await this.jwtService.signAsync(payload);
        return {
            message: "Login successful",
            user: {
                id: user.id,
                email: user.email
            },
            token: token
        };
    }
    async profile({ email }) {
        return await this.usersService.findOneByEmail(email);
    }
    async verifyEmail(verifyEmailDto) {
        try {
            const { token } = verifyEmailDto;
            const user = await this.usersService.findOneByToken(token);
            if (!user) {
                throw new common_1.BadRequestException('INVALID_TOKEN');
            }
            if (user.active) {
                throw new common_1.BadRequestException('USER_ALREADY_ACTIVE');
            }
            user.active = true;
            user.activationToken = null;
            await this.usersService.save(user);
            return {
                message: 'Email del usuario verificado correctamente',
                user
            };
        }
        catch (error) {
            return error;
        }
    }
    generateRandomNumber() {
        const min = 1000;
        const max = 9999;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNumber;
    }
    updateUserProfile(userId, updateData) {
        return this.usersService.update(userId, updateData);
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        aws_service_1.AwsService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map