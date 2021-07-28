import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IBooksRepository } from "../../repositories/IBooksRepository";

interface IRequest {
  id: string;
}

@injectable()
export default class DeleteBookUseCase {
  constructor(
    @inject('BooksRepository')
    private booksRepository: IBooksRepository
  ) {}

  async execute({id}: IRequest): Promise<void> {
    const bookExists = await this.booksRepository.findById(id);

    if(!bookExists) {
      throw new AppError("There is no book with the given id");      
    }

    await this.booksRepository.deleteById(id);    
  }
}
