import { Router } from "express";
import CreateBookController from "../../modules/books/useCases/createBook/CreateBookController";
import DeleteBookController from "../../modules/books/useCases/deleteBook/deleteBookController";
import GetBookController from "../../modules/books/useCases/getBook/getBookController";
import GetBookUseCase from "../../modules/books/useCases/getBook/getBookUseCase";
import ShowBookController from "../../modules/books/useCases/showBooks/showBooksController";

const booksRoutes = Router();

const createBookController = new CreateBookController();
const showBooksController = new ShowBookController();
const getBookController = new GetBookController();
const deleteBookController = new DeleteBookController();

booksRoutes.post("/", createBookController.handle);

booksRoutes.get("/", showBooksController.handle);

booksRoutes.get("/:id", getBookController.handle);

booksRoutes.delete("/:id", deleteBookController.handle);

export {booksRoutes};