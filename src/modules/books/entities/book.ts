import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity('books')
class Book {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  author: string;

  @Column()
  gender: string;

  @Column()
  pages: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
  
  constructor() {
    if(!this.id) {
      this.id = uuidv4();
    }
  }
}
export { Book };