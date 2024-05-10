import React, { useState, useEffect } from 'react';
import a from "./utilities/UNHRC.png";
import b from "./utilities/2.png";
import c from "./utilities/3.png";
import d from './utilities/4.png';
import unhrc from './utilities/unhrc.svg';
import who from './utilities/who.svg';
import unsc from './utilities/unsc.svg';
import ipc from './utilities/ipc.png';

const images = [unhrc,unsc, who, ipc ];

function Committees() {
    const [imagesPerRow, setImagesPerRow] = useState(4);
    const [imageWidth, setImageWidth] = useState(0);
    const [hoveredImage, setHoveredImage] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 412) {
                setImagesPerRow(1);
            } else if (window.innerWidth < 768) {
                setImagesPerRow(1);
            } else {
                setImagesPerRow(2);
            }
            const containerWidth = window.innerWidth;
            setImageWidth(containerWidth / imagesPerRow - 70);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [imagesPerRow]);

    const backgroundImages = [a, b, c, d];

    const handleMouseEnter = (index) => {
        if(imagesPerRow!==1){
            setHoveredImage(index);
        }
       
    };

    const handleMouseLeave = () => {
        setHoveredImage(null);
    };

    const rows = [];
    for (let i = 0; i < backgroundImages.length; i += imagesPerRow) {
        rows.push(backgroundImages.slice(i, i + imagesPerRow));
    }

    return (
        <div className=" w-[100%] p-[10px] sm:h-[180vh]" style={{ background: "#43014a" }}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px" }}>
                    <h1 style={{ fontFamily: "Bahnschrift", fontSize: "2rem", fontWeight: "900", color: "white" }}><b>Committees</b></h1>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", marginTop: "20px", marginLeft:"15vw", marginRight:"15vw" }}>
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
                                        style={{ borderRadius: "10px", width: `${imageWidth}px`, marginBottom: "10px" }}
                                    />
                                )}
                                {/* crop */}
                                {hoveredImage === rowIndex * imagesPerRow + imageIndex && (
                                    <img
                                        src={backgroundImages[rowIndex * imagesPerRow + imageIndex]}
                                        alt={`Logo${rowIndex * imagesPerRow + imageIndex + 1}`}
                                        className="hovered-image  mt-100px"
                                        style={{ borderRadius: "10px",opacity:'0.5',objectFit: "cover" ,marginBottom: "10px" }}
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
