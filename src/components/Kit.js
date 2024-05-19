import React, { useState, useEffect } from 'react';
import Button from './button'; 
import image1 from './utilities/image1.png';
import image3 from './utilities/image3.png';
import image4 from './utilities/image4.png';
import image5 from "./utilities/image5.png";
import ROP from './utilities/rules_of_procedure.pdf'
import ipc_pdf from "./utilities/ipc.pdf";
import unhrc_pdf from './utilities/unhrc.pdf';
import who_pdf from './utilities/who.pdf';


export default function BookGrid() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleBookSelect = (book) => {
    setSelectedBook(book);
  };

  const handleBookDeselect = () => {
    setSelectedBook(null);
  };
  const books = [
    { title: "Human Rights Council", pdf: unhrc_pdf },
    /*{ title: "Rules of Procedure", agenda : null },*/
    { title: "World Health Organisation" , pdf: who_pdf},
    {title : "International Press Corps", pdf: ipc_pdf}
  ];
  const arr=[image1,image3,image4, image5];

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)');
    setIsSmallScreen(mediaQuery.matches);

    const handler = (event) => {
      setIsSmallScreen(event.matches);
    };

    mediaQuery.addEventListener('change', handler);

    return () => {
      mediaQuery.removeEventListener('change', handler);
    };
  }, []);

  const onButtonClick = (pdf, fileName) => {
    const link = document.createElement("a");
    link.href = pdf;
    link.download = fileName; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  return (
    
    <div style={{ backgroundColor: "#420032",padding:'10px 0px 100px 0px' }}>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "50px 0px" }}>
          <h1 style={{ fontFamily: "Bahnschrift", fontSize: "2rem", fontWeight: "900", color: "white" }}><b>Conference Details</b></h1>
          <h2 style={{ fontFamily: "Bahnschrift", fontSize: "1.3rem", fontWeight: "900", color: "white" }}><b>Background Guides</b></h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto py-12">
        {books.map((book, index) => (
          <div key={index} style={{margin:'10px'}} className={`relative group overflow-hidden rounded-lg ${isSmallScreen ? 'h-[calc(40vh-12px)]' : 'h-[calc(50vh-6px)]'} ${isSmallScreen ? 'w-[calc(100%-20px)]' : 'sm:w-[calc(100%-12px)] md:w-[calc(100%-12px)] lg:w-[calc(100%-12px)] xl:w-[calc(100%-12px)]'}  bg-white`}>

            <img
              alt="Book Cover"
              className="w-full h-[400px] sm:h-[350px] object-cover cover transition-transform duration-300 group-hover:scale-105"
              height={800}
              src={arr[index]}
              style={{
                aspectRatio: "600/800",
                
              }}
              width={600}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center p-6">
              <div className="text-white text-center space-y-2">
                <h3 className="text-2xl font-bold">{book.title}</h3>
              </div>
            </div>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <Button className="text-white" variant="outline" onClick={() => onButtonClick(book.pdf, `MVMUN ${book.title} Background Guide.pdf`)}>
                Download Guide
              </Button>
            </div> 
            
          </div>
        ))}
      </div>

      
      <div className=" w-full max-w-4xl mx-auto py-12 max-h-[100vh]">
          <div style={{margin:'10px'}} className={`relative group overflow-hidden rounded-lg ${isSmallScreen ? 'h-[calc(40vh-12px)]' : 'h-[calc(50vh-6px)]'} ${isSmallScreen ? 'w-[calc(100%-20px)]' : 'sm:w-[calc(100%-12px)] md:w-[calc(100%-12px)] lg:w-[calc(100%-12px)] xl:w-[calc(100%-12px)]'}  bg-white`}>

            <img
              alt="Book Cover"
              className="w-full h-[400px] sm:h-[350px] object-cover cover transition-transform duration-300 group-hover:scale-105"
              height={800}
              src={image3}
              style={{
                aspectRatio: "600/800",
                
              }}
              width={600}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center p-6">
              <div className="text-white text-center space-y-2">
                <h3 className="text-2xl font-bold">Rules of Procedure</h3>
              </div>
            </div>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <Button className="text-white" variant="outline" onClick={() =>onButtonClick(ROP, "MVMUN_Rules_Of_Procedure.pdf")}>
                Download
              </Button>
            </div> 
          </div>
      </div>
    
      {selectedBook && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/80 flex items-center justify-center z-50" onClick={handleBookDeselect}>
          <div className="flex flex-col rounded-lg items-center justify-center bg-black">
            <img src={selectedBook.agenda} alt={selectedBook.title} className='max-w-[95vw] max-h-[80vh] '></img>
            <Button className="text-black bg-black mt-[5vh] mb-[3vh]" variant="outline" onClick={handleBookDeselect}>
              Close
            </Button>
          </div>
        </div>
      )}

    </div>

    
  );
}

// buttons
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
