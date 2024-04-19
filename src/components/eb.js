import React from 'react';
import "../styles/eb.css";
import ugandan from "./utilities/download.png";

function eb() {
    // Array of image URLs
    const images = [
        ugandan,
        ugandan,
        ugandan,
        ugandan,
        ugandan,
        ugandan,
        ugandan,
    ];

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
                    justifyContent: "center",
                    flexWrap: "wrap",
                    gap: "10px",
                    marginTop: "20px",
                }}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Logo${index + 1}`}
                        style={{
                            width: "150px",
                            height: "150px",
                            objectFit: "cover",
                            borderRadius: "10px",
                            marginBottom: "10px",
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default eb;
