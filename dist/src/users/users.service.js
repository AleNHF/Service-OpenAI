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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const individual_user_entity_1 = require("./entities/individual-user.entity");
let UsersService = class UsersService {
    constructor(userRepository, individualRepository) {
        this.userRepository = userRepository;
        this.individualRepository = individualRepository;
    }
    create(createUserDto) {
        let user;
        if (createUserDto.type == 'individual') {
            user = new individual_user_entity_1.IndividualUser();
            user.name = createUserDto.name;
            user.lastname = createUserDto.lastname;
            user.username = createUserDto.username;
            user.birthDate = createUserDto.birthDate;
            user.email = createUserDto.email;
            user.password = createUserDto.password;
            user.activationToken = createUserDto.activationToken;
            user.photo_url = createUserDto.photo_url != null ? createUserDto.photo_url : null;
            console.log(user);
        }
        else if (createUserDto.type == 'group') {
        }
        return this.individualRepository.save(createUserDto);
    }
    findAll() {
        return this.individualRepository.find();
    }
    async findOne(id) {
        return await this.individualRepository.findOne({ where: { id } });
    }
    async update(id, updateUserDto) {
        const user = await this.individualRepository.findOne({ where: { id } });
        console.log('USER FIND', user);
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
        if (updateUserDto.name) {
            user.name = updateUserDto.name;
        }
        if (updateUserDto.lastname) {
            user.lastname = updateUserDto.lastname;
        }
        if (updateUserDto.email) {
            user.email = updateUserDto.email;
        }
        if (updateUserDto.password) {
            user.password = updateUserDto.password;
        }
        if (updateUserDto.username) {
            user.username = updateUserDto.username;
        }
        if (updateUserDto.gender) {
            user.gender = updateUserDto.gender;
        }
        if (updateUserDto.nationality) {
            user.nationality = updateUserDto.nationality;
        }
        if (updateUserDto.photo_url) {
            user.photo_url = updateUserDto.photo_url;
        }
        return await this.userRepository.save(user);
    }
    async remove(id) {
        const userToRemove = await this.userRepository.findOne({ where: { id } });
        if (!userToRemove) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
        return this.userRepository.remove(userToRemove);
    }
    findOneByEmail(email) {
        return this.individualRepository.findOne({ where: { email } });
    }
    async findOneByToken(token) {
        return this.individualRepository.findOne({ where: { activationToken: token } });
    }
    async save(individualUser) {
        return this.individualRepository.save(individualUser);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(individual_user_entity_1.IndividualUser)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map