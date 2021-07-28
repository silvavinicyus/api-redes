import { Request, Response } from "express";
import { container } from "tsyringe";
import DeleteBookUseCase from "./deleteBookUseCase";

export default class DeleteBookController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteBookUseCase = container.resolve(DeleteBookUseCase);

    await deleteBookUseCase.execute({id});

    return response.status(201).send();
  }
}