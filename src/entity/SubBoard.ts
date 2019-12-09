import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Comment } from "./Comment";
import { Board } from "./Board";


@Entity()
export class SubBoard {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @OneToMany(type => Comment, comment => comment.subboard)
    comments: Comment[]

    @ManyToOne(type => Board, subboard => subboard.subboards)
    mainBoard: Board
}