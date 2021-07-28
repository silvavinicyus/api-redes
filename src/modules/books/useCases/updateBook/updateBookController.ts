import { Request, Response } from "express";
import { container } from "tsyringe";
import { createHeaderResponse } from "../../../../shared/utils/CreateHeaderResponse";
import UpdateBookUseCase from "./updateBookUseCase";

export default class UpdateBookController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { gender, pages } = request.body;

    const updateBookUseCase = container.resolve(UpdateBookUseCase);

    const book = await updateBookUseCase.execute({id, gender, pages});

    const headers = createHeaderResponse({
      book_id: book.id,      
      book_name: book.name,
      isOptions: false      
    });
    
    return response.header(headers).json(book);    
  }
}