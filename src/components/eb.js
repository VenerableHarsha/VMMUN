import React, { useState, useEffect } from 'react';
import ugandan from "./utilities/download.png";

function EB() {
    const [imagesPerRow, setImagesPerRow] = useState(4); // Initially set to 4 images per row

    useEffect(() => {
        const handleResize = () => {

            if (window.innerWidth < 768) {
                setImagesPerRow(2);
            } else {
                setImagesPerRow(4); 
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const images = [
        ugandan,
        ugandan,
        ugandan,
        ugandan,
        ugandan,
        ugandan,
        ugandan,
        ugandan,
  
    ];

    const containerWidth = window.innerWidth; 

    const imageWidth = containerWidth / imagesPerRow - 5*imagesPerRow; 

    const rows = [];
    for (let i = 0; i < images.length; i += imagesPerRow) {
        rows.push(images.slice(i, i + imagesPerRow));
    }

    return (
        <div className="min-h-screen w-screen" style={{ background: "#43014a", padding: "30px" }} >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        margin: "10px",
                    }}
                >
                    <h1 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "2rem" }}><b>EB</b></h1>
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                    marginTop: "20px",

                }}
            >
                {rows.map((row, rowIndex) => (
                    <div key={rowIndex} style={{ display: "flex", gap: "20px" }}>
                        {row.map((image, imageIndex) => (
                            <img
                                key={imageIndex}
                                src={image}
                                alt={`Logo${rowIndex * imagesPerRow + imageIndex + 1}`}
                                className="image"
                                style={{ borderRadius: "10px", width: `${imageWidth}px` ,marginBottom:"50px"}}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EB;
