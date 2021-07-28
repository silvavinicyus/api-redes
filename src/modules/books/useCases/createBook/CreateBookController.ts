import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateBookUseCase from "./CreateBookUseCase";

export default class CreateBookController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {name, author, gender, pages} = request.body;

    const createBookUseCase = container.resolve(CreateBookUseCase);

    const book = await createBookUseCase.execute({name, author, gender, pages});

    return response.status(200).json(book);
  }
}