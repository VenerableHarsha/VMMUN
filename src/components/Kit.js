import React, { useState } from 'react';
import Button from './button'; 

export default function BookGrid() {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookSelect = (book) => {
    setSelectedBook(book);
  };

  const handleBookDeselect = () => {
    setSelectedBook(null);
  };

  const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto py-12">
      {books.map((book, index) => (
        <div key={index} className="relative group overflow-hidden rounded-lg">
          <img
            alt="Book Cover"
            className="w-full h-[400px] sm:h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
            height={800}
            src="/placeholder.svg"
            style={{
              aspectRatio: "600/800",
              objectFit: "cover",
            }}
            width={600}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
            <div className="text-white space-y-2">
              <h3 className="text-2xl font-bold">{book.title}</h3>
              <p className="text-sm">{book.author}</p>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
            <Button className="text-white" variant="outline" onClick={() => handleBookSelect(book)}>
              <FileIcon className="h-5 w-5 mr-2" />
              Open PDF
            </Button>
          </div>
        </div>
      ))}
      {selectedBook && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/80 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">{selectedBook.title}</h2>
            <p className="text-sm mb-4">Author: {selectedBook.author}</p>
            <Button className="text-white bg-purple-600 hover:bg-purple-400" variant="outline" onClick={handleBookDeselect}>
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function FileIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}
