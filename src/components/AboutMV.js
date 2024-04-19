import React, { useState, useEffect } from 'react';
import ugandan from "./utilities/download.png";

function AboutMV() {
    const [imagesPerRow, setImagesPerRow] = useState(4); // Initially set to 4 images per row
    const [imageWidth, setImageWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setImagesPerRow(2);
            } else {
                setImagesPerRow(4); 
            }
            const containerWidth = window.innerWidth; 
            setImageWidth(containerWidth / imagesPerRow - 20 * imagesPerRow); 
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [imagesPerRow]);

    const images = [
        ugandan,
        ugandan,
        ugandan,
        ugandan,
    ];

    const texts = [
        "Caucus",
        "WHO",
        "Ethics",
        "Lassoon",
    ];

    const rows = [];
    for (let i = 0; i < images.length; i += imagesPerRow) {
        rows.push(images.slice(i, i + imagesPerRow));
    }

    return (
        <div className="min-h-screen w-screen" style={{ background: " #71037d", padding: "30px" }} >
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
                        
                    }}
                >
                    <h1 style={{ fontFamily: "Bahnschrift",padding: "50px", fontSize: "2.5rem" }}><b>About MVMUN</b></h1>
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
                    <div key={rowIndex} style={{ display: "flex",  gap: "30px" }}>
                        {row.map((image, imageIndex) => (
                            <div key={imageIndex}>
                                <img
                                    src={image}
                                    alt={`Logo${rowIndex * imagesPerRow + imageIndex + 1}`}
                                    className="image"
                                    style={{ borderRadius: "10px", width: `${imageWidth}px`, marginBottom: "30px" }}
                                />
                                <h1 style={{ fontFamily: "Bahnschrift", fontSize: "1.25rem" ,textAlign:"center"}}><b>{texts[rowIndex * imagesPerRow + imageIndex]}</b></h1>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AboutMV;
