import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateBookDTO } from "../../dtos/ICreateBookDTO";
import { Book } from "../../entities/book";
import { IBooksRepository } from "../../repositories/IBooksRepository";

@injectable()
export default class CreateBookUseCase {
  constructor(
    @inject('BooksRepository')
    private booksRepository: IBooksRepository
  ) {}

  async execute({name, gender, pages, author}: ICreateBookDTO): Promise<Book> {
    const bookExists = await this.booksRepository.findByNameAndAuthor(name, author);

    if(bookExists) {
      throw new AppError("This book already exists", 409);
    }

    const book = await this.booksRepository.create({
      name,
      gender,
      pages,
      author
    });

    return book;
  }
}