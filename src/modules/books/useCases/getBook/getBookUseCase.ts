import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Book } from "../../entities/book";
import { IBooksRepository } from "../../repositories/IBooksRepository";

interface IRequest {
  id: string;
}

@injectable()
export default class GetBookUseCase {
  constructor(
    @inject('BooksRepository')
    private booksRepository: IBooksRepository
  ) {}

  async execute({id}: IRequest): Promise<Book> {    
    const bookExists = await this.booksRepository.findById(id);

    if(!bookExists) {
      throw new AppError("There is no book with the given id");      
    }

    return bookExists;
  }
}