import { Request, Response } from "express";
import { container } from "tsyringe";
import { createHeaderResponse } from "../../../../shared/utils/CreateHeaderResponse";
import DeleteBookUseCase from "./deleteBookUseCase";

export default class DeleteBookController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteBookUseCase = container.resolve(DeleteBookUseCase);

    await deleteBookUseCase.execute({id});

    const headers = createHeaderResponse({
      book_id: id,      
      isOptions: false      
    });
        
    return response.status(204).header(headers).send();    
    
  }
}