import { BaseEntity } from "typeorm";
export declare abstract class User extends BaseEntity {
    id: number;
    photo_url: string;
    type: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
