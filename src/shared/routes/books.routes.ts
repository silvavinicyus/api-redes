import { Request, Response, Router } from "express";
import AddImageToBookController from "../../modules/books/useCases/addImageToBook/addImageToBookController";
import AddImageToBookUseCase from "../../modules/books/useCases/addImageToBook/addImageToBookUseCase";
import CreateBookController from "../../modules/books/useCases/createBook/CreateBookController";
import DeleteBookController from "../../modules/books/useCases/deleteBook/deleteBookController";
import GetBookController from "../../modules/books/useCases/getBook/getBookController";
import GetBookUseCase from "../../modules/books/useCases/getBook/getBookUseCase";
import ShowBookController from "../../modules/books/useCases/showBooks/showBooksController";
import UpdateBookController from "../../modules/books/useCases/updateBook/updateBookController";
import { createHeaderResponse } from "../utils/CreateHeaderResponse";

const booksRoutes = Router();

const createBookController = new CreateBookController();
const showBooksController = new ShowBookController();
const getBookController = new GetBookController();
const deleteBookController = new DeleteBookController();
const addImageToBookController = new AddImageToBookController();
const updateBookController = new UpdateBookController();

booksRoutes.post("/", createBookController.handle);

booksRoutes.get("/", showBooksController.handle);

booksRoutes.get("/:id", getBookController.handle);

booksRoutes.delete("/:id", deleteBookController.handle);

booksRoutes.patch("/image/:id", addImageToBookController.handle);

booksRoutes.put("/:id", updateBookController.handle);

booksRoutes.options("/", (request: Request, response: Response) => {
  const headers = createHeaderResponse({
    isOptions: true,
  });

  return response.status(204).header(headers).send();
});

booksRoutes.head("/", );

export {booksRoutes};