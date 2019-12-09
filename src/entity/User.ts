import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Board } from "./Board";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @OneToMany(type => Board, board => board.user)
    boards: Board

}
