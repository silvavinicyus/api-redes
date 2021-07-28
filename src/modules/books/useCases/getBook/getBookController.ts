import { Request, Response } from "express";
import { container } from "tsyringe";
import GetBookUseCase from "./getBookUseCase";


export default class GetBookController {
  async handle(request: Request, response: Response): Promise<Response> {        
    const {id} = request.params;

    const getBookUseCase = container.resolve(GetBookUseCase);

    const book = await getBookUseCase.execute({id});

    return response.status(200).json(book);
  }
}