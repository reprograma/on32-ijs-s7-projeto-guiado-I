import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public title: string;
 
  @Column()
  public author: string;

  @Column()
  public publisher: string;

  constructor(id: number, title: string, author: string, publisher: string
  ){
    this.id = id;
    this.title = title;
    this.author = author;
    this.publisher = publisher
  }

}