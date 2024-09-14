import React from "react";
import books from "./BookData";
import BookDetails from "./BookDetails";

function BookList(){
    return (
        <div>
            <h1> My Reading List </h1>
            {
                // Map thourgh the books and render each book as BookDetails component
                books.map((bookItem) => (
                    <BookDetails key={bookItem.id} book={bookItem}/>
                )) 
            }
        </div>
    );
};

export default BookList;