import React, { useState, useEffect } from 'react';
import a from "./utilities/UNHRC.png";
import b from "./utilities/WHO.png";
import c from "./utilities/unsc.png";
import ugandan from "./utilities/download.png";

const images = [ugandan, ugandan, ugandan];

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

    const backgroundImages = [a, b, c];

    const handleMouseEnter = (index) => {
        setHoveredImage(index);
    };

    const handleMouseLeave = () => {
        setHoveredImage(null);
    };

    const rows = [];
    for (let i = 0; i < backgroundImages.length; i += imagesPerRow) {
        rows.push(backgroundImages.slice(i, i + imagesPerRow));
    }

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
                        {row.map((_, imageIndex) => (
                            <div
                                key={rowIndex * imagesPerRow + imageIndex}
                                onMouseEnter={() => handleMouseEnter(rowIndex * imagesPerRow + imageIndex)}
                                onMouseLeave={handleMouseLeave}
                                style={{ position: 'relative' }}
                            >
                                {/* Show default image when no image is hovered over */}
                                {hoveredImage === null && (
                                    <img
                                        src={images[rowIndex * imagesPerRow + imageIndex]}
                                        alt={`Logo${rowIndex * imagesPerRow + imageIndex + 1}`}
                                        className="default-image"
                                        style={{ borderRadius: "10px", width: `${imageWidth}px`, marginBottom: "30px" }}
                                    />
                                )}
                                {/* crop */}
                                {hoveredImage === rowIndex * imagesPerRow + imageIndex && (
                                    <img
                                        src={backgroundImages[rowIndex * imagesPerRow + imageIndex]}
                                        alt={`Logo${rowIndex * imagesPerRow + imageIndex + 1}`}
                                        className="hovered-image"
                                        style={{ borderRadius: "10px", height:`${imageWidth}px`,width: `${imageWidth*3}px`,opacity:'0.5',objectFit: "cover" ,marginBottom: "30px" }}
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
