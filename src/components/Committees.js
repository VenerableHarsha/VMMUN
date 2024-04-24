import React, { useState, useEffect } from 'react';
import ugandan from "./utilities/download.png";
// only three images please 
function Committees() {
    const [imagesPerRow, setImagesPerRow] = useState(4); 
    const [imageWidth, setImageWidth] = useState(0);

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
            setImageWidth(containerWidth / imagesPerRow-70); 
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [imagesPerRow]);

    const images = [
        ugandan,
        ugandan,
        ugandan,

    ];

    const rows = [];
    for (let i = 0; i < images.length; i += imagesPerRow) {
        rows.push(images.slice(i, i + imagesPerRow));
    }

    return (
        <div className="min-h-screen w-screen" style={{ background: "#43014a", padding: "70px" }}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "50px" }}>
                    <h1 style={{ fontFamily: "Bahnschrift", fontSize: "2rem", fontWeight: "900" }}><b>Committees</b></h1>
                </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", marginTop: "20px" }}>
                {rows.map((row, rowIndex) => (
                    <div key={rowIndex} style={{ display: "flex", gap: "30px" }}>
                        {row.map((image, imageIndex) => (
                            <img
                                key={imageIndex}
                                src={image}
                                alt={`Logo${rowIndex * imagesPerRow + imageIndex + 1}`}
                                className="image"
                                style={{ borderRadius: "10px", width: `${imageWidth}px`, marginBottom: "30px" }}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
                        }
// return(
//     <div className='min-h-screen w-screen absolute' style={{background:"#43014a"}}>
//         <div className='text-2xl flex justify-center mt-7'>Eb</div>
//         <div className='flex flex-wrap justify-center gap-5 mt-24 '>
//             <img src={ugandan} className='rounded-xl w-'></img>
//             <img src={ugandan} className='rounded-xl w-'></img>
//             <img src={ugandan} className='rounded-xl w-'></img>
//             <img src={ugandan} className='rounded-xl w-'></img>
//         </div>

//     </div>)
// }

export default Committees;
