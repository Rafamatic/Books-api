import { type } from 'os';
import React, { cache } from 'react';
type Book = {
    id: number,
    name: string,
    type: string,
    available: boolean
}

async function getBooks() {
    const response = await fetch("https://simple-books-api.glitch.me/books/", { cache: "no-store" });
    const data = response.json();
    return data;
}

export default async function page() {

    const books = await getBooks();

    return (
        <div>
            <h1>Server Page</h1>
            <ul>
                {books.map((book: Book) => (

                    <li key={book.id}>
                        {book.name} - {book.type}
                    </li>
                ))}
            </ul>
        </div>
    )

}
