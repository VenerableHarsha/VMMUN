import React, { useState, useEffect } from 'react';
import a from "./utilities/UNHRC.png";
import c from "./utilities/WHO.png";
import d from './utilities/4.png';
import unhrc from './utilities/unhrc.svg';
import who from './utilities/who.svg';
import ipc from './utilities/ipc.png';
import Button from './button'; 

const images = [unhrc, who, ipc ];

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
                setImagesPerRow(3);
            }
            const containerWidth = window.innerWidth;
            setImageWidth(containerWidth / imagesPerRow - 70);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [imagesPerRow]);

    const backgroundImages = [a, c, d];

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
        <div className=" w-[100%] p-[10px] " style={{ background: "#43014a" }}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px" }}>
                    <h1 style={{ fontFamily: "Bahnschrift", fontSize: "2rem", fontWeight: "900", color: "white" }}><b>Committees</b></h1>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", marginTop: "20px", marginLeft:"10vw", marginRight:"10vw" }}>
                {rows.map((row, rowIndex) => (
                    <div key={rowIndex} style={{ display: "flex", gap: "30px" }}>
                        {row.map((_, imageIndex) => (
                            <div
                                key={rowIndex * imagesPerRow + imageIndex}
                                style={{ position: 'relative' }}
                            >
                                    <img
                                        src={images[rowIndex * imagesPerRow + imageIndex]}
                                        alt={`Logo${rowIndex * imagesPerRow + imageIndex + 1}`}
                                        className="default-image"
                                        onMouseEnter={() => handleMouseEnter(rowIndex * imagesPerRow + imageIndex)} 
                                        style={{ borderRadius: "10px", width: `${imageWidth}px`, marginBottom: "10px" }}
                                    />

                                {/* crop */}
                                {hoveredImage === rowIndex * imagesPerRow + imageIndex && (
                                <div className="fixed top-0 left-0 w-full h-full bg-black/80 flex items-center justify-center z-50" >
                                <div className="flex flex-col rounded-lg items-center justify-center bg-black">
                                    <img
                                        src={backgroundImages[rowIndex * imagesPerRow + imageIndex]}
                                        alt={`Logo${rowIndex * imagesPerRow + imageIndex + 1}`}
                                        className=" max-w-[95vw] max-h-[80vh]"
                                        onMouseLeave={handleMouseLeave}
                                    />
                                    <Button className="text-black bg-black mt-[5vh] mb-[3vh]" variant="outline" onClick={handleMouseLeave}>
                                       Close
                                    </Button>
                                    </div>
                                    </div>
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
