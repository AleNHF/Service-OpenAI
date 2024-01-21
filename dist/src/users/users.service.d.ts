import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { IndividualUser } from './entities/individual-user.entity';
import { UpdateProfileDto } from 'src/auth/dto/update-profile.dto';
export declare class UsersService {
    private readonly userRepository;
    private readonly individualRepository;
    constructor(userRepository: Repository<User>, individualRepository: Repository<IndividualUser>);
    create(createUserDto: CreateUserDto): Promise<CreateUserDto & IndividualUser>;
    findAll(): Promise<IndividualUser[]>;
    findOne(id: number): Promise<IndividualUser>;
    update(id: number, updateUserDto: UpdateProfileDto): Promise<IndividualUser & User>;
    remove(id: number): Promise<User>;
    findOneByEmail(email: string): Promise<IndividualUser>;
    findOneByToken(token: string): Promise<IndividualUser>;
    save(individualUser: IndividualUser): Promise<IndividualUser>;
}
