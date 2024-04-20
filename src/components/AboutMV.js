import React, { useState, useEffect } from 'react';
import ugandan from "./utilities/download.png";

function AboutMV() {
    const [imagesPerRow, setImagesPerRow] = useState(4); 
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setContainerWidth(width);
            if (window.innerWidth < 412) {
                setImagesPerRow(1);
            } else if (window.innerWidth < 768) {
                setImagesPerRow(2);
            } else {
                setImagesPerRow(4); 
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const imageWidth = containerWidth / imagesPerRow - 40; 
    const textWidth = containerWidth / imagesPerRow - 40; 

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
        rows.push({ images: images.slice(i, i + imagesPerRow), texts: texts.slice(i, i + imagesPerRow) });
    }

    return (
        <div className="min-h-screen w-screen" style={{ background: " #71037d", padding: "30px" }}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <h1 style={{ fontFamily: "Bahnschrift", padding: "50px", fontSize: "2.5rem" }}><b>About MVMUN</b></h1>
                </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", marginTop: "20px" }}>
                {rows.map((row, rowIndex) => (
                    <div key={rowIndex} style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                        {row.images.map((image, imageIndex) => (
                            <div key={imageIndex} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <img
                                    src={image}
                                    alt={`Logo${rowIndex * imagesPerRow + imageIndex + 1}`}
                                    className="image"
                                    style={{ borderRadius: "10px", width: `${imageWidth}px`, marginBottom: "10px" }}
                                />
                                <h1 style={{ fontFamily: "Bahnschrift", fontSize: "1.25rem", textAlign: "center", width: `${textWidth}px` }}>
                                    <b>{row.texts[imageIndex]}</b>
                                </h1>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AboutMV;
