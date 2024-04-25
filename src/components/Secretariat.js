import React, { useState, useEffect } from 'react';
import s1 from './utilities/s1.png'
import s2 from './utilities/s2.jpg'
import s3 from './utilities/s3.jpg'
import s4 from './utilities/s4.jpg'

function Secretariat() {
    const [imagesPerRow, setImagesPerRow] = useState(4);
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setContainerWidth(width);
            if (width < 412) {
                setImagesPerRow(1);
            } else if (width < 768) {
                setImagesPerRow(2);
            } else {
                setImagesPerRow(3);
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const imageWidth = containerWidth / imagesPerRow - 90;
    const textWidth = containerWidth / imagesPerRow - 40;

    const images = [
        s4, s1, s3, s1, s2
    ];

    const texts = [
        "Rtr. Navya Rao \n Co-Secretary General",
        "Harsha Chigurupati \n Direct General",
        "Rtr. Sujal Prakash Naidu \n Co-Secretary General",
        "Rtr. Karthik Venkatesh U. \n Head of OC",
        "Veeksha S G \n Head of OC",
    ];

    const rows = [];
    for (let i = 0; i < images.length; i += imagesPerRow) {
        rows.push({ images: images.slice(i, i + imagesPerRow), texts: texts.slice(i, i + imagesPerRow) });
    }

    return (
        <div className="min-h-screen w-[100%]" style={{ background: "#71037d", padding: "30px" }}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <h1 style={{ fontFamily: "Bahnschrift", padding: "50px", fontSize: "2.5rem" }}><b>Secretariat</b></h1>
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
                                    style={{ borderRadius: "10px", width: `${imageWidth}px`, height:`${imageWidth}px`, marginBottom: "20px" , objectFit:'cover'}}
                                />
                                <h1 style={{ fontFamily: "Bahnschrift", fontSize: "1.25rem", color: "white", textAlign: "center", width: `${textWidth}px`, marginBottom: "20px" }}>
                                    <b>{row.texts[imageIndex].split('\n').map((line, index) => (
                                        <React.Fragment key={index}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))}</b>
                                </h1>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Secretariat;
