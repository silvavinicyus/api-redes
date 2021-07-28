import { inject, injectable } from "tsyringe";
import { Book } from "../../entities/book";
import { IBooksRepository } from "../../repositories/IBooksRepository";

@injectable()
export default class ShowBookUseCase {
  constructor(
    @inject('BooksRepository')
    private booksRepository: IBooksRepository
  ) {}

  async execute(): Promise<Book[]> {    
    const books = await this.booksRepository.findAllBooks();
    return books;
  }
}