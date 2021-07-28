import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Book } from "../../entities/book";
import { IBooksRepository } from "../../repositories/IBooksRepository";

interface IRequest {
  id: string;
  url: string;
}

@injectable()
export default class AddImageToBookUseCase {
  constructor(
    @inject('BooksRepository')
    private booksRepository: IBooksRepository
  ){}
  
  async execute({id, url}: IRequest): Promise<Book>{
    const bookExists = await this.booksRepository.findById(id);

    if(!bookExists) {
      throw new AppError("Non Authorized", 203);
    }

    bookExists.image = url;

    console.log(bookExists);

    const book = this.booksRepository.create(bookExists);

    return bookExists;
  }
  
}