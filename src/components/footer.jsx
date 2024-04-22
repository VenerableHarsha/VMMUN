import React from 'react';

const Footer = () => {
  const handleBackToTop = () => {

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContact = () => {

    alert('Contact action triggered!');
  };

  return (
    <footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', fontFamily: 'Open Sans, sans-serif', background: "#43014a"   }}>
      <div>
        <span style={{ fontSize: '0.4rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{display:'flex',alignItems: 'center',padding:'0px 5px'}}> COPYRIGHT INFO </div>
            <div style={{  borderLeft: '1px solid white',  height: '1rem'}} > </div>
            <div style={{display:'flex',alignItems: 'center',padding:'0px 5px'}}> IDK SOMETHING </div>
          </div>
        </span>
      </div>
      <div>
        <span style={{ fontSize: '0.4rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{display:'flex',alignItems: 'center',padding:'0px 5px', cursor: 'pointer'}} onClick={handleBackToTop}> BACK TO TOP </div>
            <div style={{  borderLeft: '1px solid white',  height: '1rem'}} > </div>
            <div style={{display:'flex',alignItems: 'center',padding:'0px 5px', cursor: 'pointer'}} onClick={handleContact}> CONTACT </div>
          </div>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
