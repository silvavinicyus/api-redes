import { Request, Response } from "express";
import { container } from "tsyringe";
import { createHeaderResponse } from "../../../../shared/utils/CreateHeaderResponse";
import CreateBookUseCase from "./CreateBookUseCase";

export default class CreateBookController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {name, author, gender, pages} = request.body;

    const createBookUseCase = container.resolve(CreateBookUseCase);

    const book = await createBookUseCase.execute({name, author, gender, pages});

    const headers = createHeaderResponse({
      book_id: book.id,
      book_name: book.name,
      isOptions: false      
    });
        
    return response.status(201).header(headers).json(book);    
  }
}