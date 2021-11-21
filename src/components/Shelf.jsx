import React from "react";
import Book from "./Book";
import "../index.css";
import { books } from "../books";

export default function Shelf() {
  return (
    <div className="container w-4/5 lg:w-2/3  mx-auto mt-5 grid lg:grid-cols-3 gap-3">
      {books.map((book, index) => (
        <Book key={book.id} {...book}>
          <p>Lorem ipsum</p>
        </Book>
      ))}
    </div>
  );
}
