import { Entity } from "typeorm/decorator/entity/Entity";
import { PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { SubBoard } from "./SubBoard";
import { User } from "./User";


@Entity()
export class Board {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;
    
    @OneToMany(type => SubBoard, subboard => subboard.mainBoard)
    subboards: SubBoard[];

    @ManyToOne(type => User, user => user.boards)
    user: User;
}