import { Request, Response } from "express";
import { container } from "tsyringe";
import { createHeaderResponse } from "../../../../shared/utils/CreateHeaderResponse";
import ShowBookUseCase from "./showBooksUseCase";

export default class ShowBookController {
  async handle(request: Request, response: Response): Promise<Response> {        
    const showBookUseCase = container.resolve(ShowBookUseCase);
    
    const books = await showBookUseCase.execute();
    


    const headers = createHeaderResponse({
      book_id: books[0].id,      
      book_name: books[0].name,
      isOptions: false      
    });

    return response.status(200).header(headers).json(books);    
  }
}