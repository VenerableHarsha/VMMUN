import React, { useState, useEffect } from 'react';
import ugandan from "./utilities/download.png";
import a from "./utilities/1.png";
import b from "./utilities/2.png";
import c from "./utilities/3.png";

function Committees() {
    const [imagesPerRow, setImagesPerRow] = useState(4); 
    const [imageWidth, setImageWidth] = useState(0);
    const [hoveredImage, setHoveredImage] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 412) {
                setImagesPerRow(1);
            } else if (window.innerWidth < 768) {
                setImagesPerRow(2);
            } else {
                setImagesPerRow(3); 
            }
            const containerWidth = window.innerWidth; 
            setImageWidth(containerWidth / imagesPerRow - 70); 
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [imagesPerRow]);

    const images = [ugandan, ugandan, ugandan];
    const backgroundImages = [a, b, c];

    const rows = [];
    for (let i = 0; i < images.length; i += imagesPerRow) {
        rows.push(images.slice(i, i + imagesPerRow));
    }

    const handleMouseEnter = (index) => {
        setHoveredImage(index);
    };

    const handleMouseLeave = () => {
        setHoveredImage(null);
    };

    return (
        <div className="min-h-screen w-[100%]" style={{ background: "#43014a", padding: "70px" }}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "50px" }}>
                    <h1 style={{ fontFamily: "Bahnschrift", fontSize: "2rem", fontWeight: "900", color: "white" }}><b>Committees</b></h1>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", marginTop: "20px" }}>
                {rows.map((row, rowIndex) => (
                    <div key={rowIndex} style={{ display: "flex", gap: "30px" }}>
                        {row.map((image, imageIndex) => (
                            <div
                                key={rowIndex * imagesPerRow + imageIndex}
                                onMouseEnter={() => handleMouseEnter(rowIndex * imagesPerRow + imageIndex)}
                                onMouseLeave={handleMouseLeave}
                                style={{ position: 'relative' }}
                            >
                                <img
                                    src={image}
                                    alt={`Logo${rowIndex * imagesPerRow + imageIndex + 1}`}
                                    className="image"
                                    style={{ borderRadius: "10px", width: `${imageWidth}px`, marginBottom: "30px", visibility: hoveredImage === rowIndex * imagesPerRow + imageIndex ? 'hidden' : 'visible' }}
                                />
                                {hoveredImage === rowIndex * imagesPerRow + imageIndex && (
                                    <img
                                        src={backgroundImages[rowIndex * imagesPerRow + imageIndex]}
                                        alt={`Logo${rowIndex * imagesPerRow + imageIndex + 1}`}
                                        className="hovered-image"
                                        style={{ borderRadius: "10px", position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 100, maxWidth: '100%', maxHeight: '100%' }}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Committees;
