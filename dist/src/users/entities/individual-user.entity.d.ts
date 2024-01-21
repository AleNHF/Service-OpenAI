import { User } from "./user.entity";
export declare class IndividualUser extends User {
    id: number;
    name: string;
    lastname: string;
    username: string;
    birthDate: Date;
    gender: string;
    nationality: string;
    email: string;
    password: string;
    activationToken: string;
    active: boolean;
}
