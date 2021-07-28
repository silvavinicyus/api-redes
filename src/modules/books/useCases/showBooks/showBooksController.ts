import { Request, Response } from "express";
import { container } from "tsyringe";
import ShowBookUseCase from "./showBooksUseCase";

export default class ShowBookController {
  async handle(request: Request, response: Response): Promise<Response> {        
    const showBookUseCase = container.resolve(ShowBookUseCase);

    const books = await showBookUseCase.execute();

    return response.status(200).json(books);
  }
}