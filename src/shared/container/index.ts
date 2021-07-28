import { container } from "tsyringe";
import { IBooksRepository } from "../../modules/books/repositories/IBooksRepository";
import BooksRepository from "../../modules/books/repositories/implementations/BooksRepository";

container.registerSingleton<IBooksRepository> (
  'BooksRepository',
  BooksRepository
);