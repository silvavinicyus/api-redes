import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Book } from "../../entities/book";
import { IBooksRepository } from "../../repositories/IBooksRepository";

interface IRequest {
  id: string;
  gender: string;
  pages: string;
}

@injectable()
export default class UpdateBookUseCase {
  constructor(
    @inject('BooksRepository')
    private booksRepository: IBooksRepository
  ){}

  async execute({id, gender, pages}: IRequest): Promise<Book> {
    const bookExists = await this.booksRepository.findById(id);

    if (!bookExists) {
      throw new AppError( "Non Authorized", 203);
    }

    bookExists.gender = gender;
    bookExists.pages = Number(pages);

    await this.booksRepository.create(bookExists);

    return bookExists;
  }
}