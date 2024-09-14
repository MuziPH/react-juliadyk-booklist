import React from "react";

function BookDetails({book}){
    return (
        <div>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Year: {book.year}</p>
        </div>
    );
};
export default BookDetails;