import { getRepository, Repository } from "typeorm";
import { ICreateBookDTO } from "../../dtos/ICreateBookDTO";
import { Book } from "../../entities/book";
import { IBooksRepository } from "../IBooksRepository";

export default class BooksRepository implements IBooksRepository {
  private repository: Repository<Book>;

  constructor(){
    this.repository = getRepository(Book);
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async findAllBooks(): Promise<Book[]> {
    return await this.repository.find();
  }

  async findById(id: string): Promise<Book> {
    return await this.repository.findOne({id});
  }

  async findByNameAndAuthor(name: string, author: string): Promise<Book> {
    return await this.repository.findOne({name, author});
  }

  async create({
    name,
    author,
    gender,
    pages,
    id
  }: ICreateBookDTO): Promise<Book> {
    const book = this.repository.create({
      name,
      author,
      gender,
      pages,
      id,      
    });

    await this.repository.save(book);

    return book;
  }
}