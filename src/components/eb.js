import React from 'react';
import "../styles/eb.css";
import ugandan from "./utilities/download.png";

function eb() {

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

    const imagesPerRow = 4;


    const rows = [];
    for (let i = 0; i < images.length; i += imagesPerRow) {
        rows.push(images.slice(i, i + imagesPerRow));
    }

    return (
        <div style={{background:"#43014a", padding: "20px"}} >
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
                    <h1 style={{ fontFamily: "Montserrat, sans-serif", fontSize:"2rem", margin: "0" }}><b>EB</b></h1>
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
                    <div key={rowIndex} style={{ display: "flex", gap: "10px" }}>
                        {row.map((image, imageIndex) => (
                            <img
                                key={imageIndex}
                                src={image}
                                alt={`Logo${rowIndex * imagesPerRow + imageIndex + 1}`}
                                style={{
                                    width: "300px",

                                    objectFit: "cover",
                                    borderRadius: "10px",
                                    margin: "15px 10px ",
                                }}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default eb;
