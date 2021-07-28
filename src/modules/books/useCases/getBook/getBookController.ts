import { Request, Response } from "express";
import { container } from "tsyringe";
import { createHeaderResponse } from "../../../../shared/utils/CreateHeaderResponse";
import GetBookUseCase from "./getBookUseCase";


export default class GetBookController {
  async handle(request: Request, response: Response): Promise<Response> {        
    const {id} = request.params;

    const getBookUseCase = container.resolve(GetBookUseCase);

    const book = await getBookUseCase.execute({id});

    const headers = createHeaderResponse({
      book_id: book.id,      
      book_name: book.name,
      isOptions: false      
    });

    return response.status(200).header(headers).json(book);
  }
}