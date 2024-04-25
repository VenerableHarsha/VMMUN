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
    { title: "The Great Gatsby" },
    { title: "To Kill a Mockingbird" },
    { title: "1984" },
    { title: "1984" }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl mx-auto py-12">
  {books.map((book, index) => (
    <div key={index} className="relative group overflow-hidden rounded-lg sm:max-w-[80%] md:max-w-none">
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center p-6">
            <div className="text-white text-center space-y-2">
              <h3 className="text-2xl font-bold">{book.title}</h3>
            </div>
          </div>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
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
            <Button className="text-white" variant="outline" onClick={handleBookDeselect}>
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
