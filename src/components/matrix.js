import React, { useState, useEffect } from 'react';
import Button from './button'; 
import cmwho from './utilities/cm_who.png'
import cmhrc from './utilities/cm_unhrc.png'
import cmipc from './utilities/cm_ipc.png'


export default function CMgrid() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handlecmlinks = (cm) => {
    window.open(cm.link)
  }

  const cmlinks = [
    {title: "Country Matrix for WHO", link: `https://docs.google.com/spreadsheets/d/1NoRfoAKPPiia4w6FmMmEkDD7B0mUitbZwPHq6ohU9TU/edit#gid=1638358983`},
    {title: "Country Matrix for UNHRC", link: `https://docs.google.com/spreadsheets/d/1O9dxyIScPxMDgHT9NRFELbUPtLV_WDJHljCJqlaTvRc/edit#gid=2102373138`},
    {title: "Country Matrix for IPC", link: `https://docs.google.com/spreadsheets/d/12vM4Em3zBbY7WcxLECrt2Q-VleEpL2QUgVgwHctfSto/edit`}
  ];

  const cmpics=[cmwho, cmhrc, cmipc ]

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)');
    setIsSmallScreen(mediaQuery.matches);

    const handler = (event) => {
      setIsSmallScreen(event.matches);
    };

    mediaQuery.addEventListener('change', handler);

    return () => {
      mediaQuery.removeEventListener('change', handler);
    };
  }, []);

  return (
    
    <div style={{ backgroundColor: "#420032",padding:'10px 0px 70px 0px' }}>
<div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "50px 0px" }}>
          <h1 style={{ fontFamily: "Bahnschrift", fontSize: "2rem", fontWeight: "900", color: "white" }}><b>Country Matrix</b></h1>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-10 w-full max-w-6xl mx-auto py-12">
        {cmlinks.map((cm, index) => (
          <div key={index} style={{margin:'10px'}} className={`relative group overflow-hidden rounded-lg ${isSmallScreen ? 'h-[calc(40vh-12px)]' : 'h-[calc(50vh-6px)]'} ${isSmallScreen ? 'w-[calc(100%-20px)]' : 'sm:w-[calc(100%-12px)] md:w-[calc(100%-12px)] lg:w-[calc(100%-12px)] xl:w-[calc(100%-12px)]'}  bg-white`}>

            <img
              alt="Book Cover"
              className="w-full h-[350px] sm:h-[350px] object-cover cover transition-transform duration-300 group-hover:scale-105"
              height={800}
              src={cmpics[index]}
              style={{
                aspectRatio: "600/800",
                
              }}
              width={600}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center p-6">
              <div className="text-white text-center space-y-2">
                <h3 className="text-2xl font-bold">{cm.title}</h3>
              </div>
            </div>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <Button className="text-white" variant="outline" onClick={() => handlecmlinks(cm)}>
                OPEN
              </Button>
            </div> 
          </div>
        ))}
      </div>
    </div>

    
  );
}
