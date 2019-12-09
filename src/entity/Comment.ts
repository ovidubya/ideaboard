import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { SubBoard } from "./SubBoard";


@Entity()
export class Comment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    likes: number;

    @Column()
    message: string;

    @ManyToOne(type => SubBoard, subboard => subboard.comments)
    subboard: SubBoard;

}