import { ICreateBookDTO } from "../dtos/ICreateBookDTO";
import { Book } from "../entities/book";

interface IBooksRepository {
  create(data: ICreateBookDTO): Promise<Book>;
  findByNameAndAuthor(name: string, author: string): Promise<Book>;
  findById(id: string): Promise<Book>;
  findAllBooks(): Promise<Book[]>;
  deleteById(id: string): Promise<void>;  
} export {IBooksRepository};