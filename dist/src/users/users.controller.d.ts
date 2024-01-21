import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateProfileDto } from 'src/auth/dto/update-profile.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<CreateUserDto & import("./entities/individual-user.entity").IndividualUser>;
    findAll(): Promise<import("./entities/individual-user.entity").IndividualUser[]>;
    findOne(id: string): Promise<import("./entities/individual-user.entity").IndividualUser>;
    update(id: string, updateUserDto: UpdateProfileDto): Promise<import("./entities/individual-user.entity").IndividualUser & import("./entities/user.entity").User>;
    remove(id: string): Promise<import("./entities/user.entity").User>;
}
