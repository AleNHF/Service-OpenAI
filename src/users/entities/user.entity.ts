import { Column, CreateDateColumn, DeleteDateColumn, Entity, UpdateDateColumn, BaseEntity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export abstract class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    photo_url: string;

    @Column({ nullable: false, default: 'individual' })
    type: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date;
}
