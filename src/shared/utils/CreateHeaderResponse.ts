interface IHeaderProps {
  isOptions: boolean;
  book_id?: string;
  book_name?: string;  
}

export function createHeaderResponse({isOptions, book_id, book_name}: IHeaderProps) {
  let headers = {}

  headers["Access-Control-Allow-Origin"] = "*";
  headers["Access-Control-Allow-Credentials"] = false;
  headers["Access-Control-Max-Age"] = '86400'; 
  headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept";

  if (isOptions) {  
    headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";    
    return headers;
  }

  headers["Book-ID"] = `${book_id}`;
  headers["Book-Name"] = `${book_name}`;

  return headers;
} 