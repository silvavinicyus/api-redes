import { Request, Response } from "express";
import { container } from "tsyringe";
import { createHeaderResponse } from "../../../../shared/utils/CreateHeaderResponse";
import AddImageToBookUseCase from "./addImageToBookUseCase";

export default class AddImageToBookController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { url } = request.body;

    const addImageToBookUseCase = container.resolve(AddImageToBookUseCase);

    const book = await addImageToBookUseCase.execute({id, url});

    const headers = createHeaderResponse({
      book_id: book.id,
      book_name: book.name,
      isOptions: false      
    });
        
    return response.status(201).header(headers).json(book);
  }
}