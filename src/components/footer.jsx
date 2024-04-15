import React from 'react';

const Footer = () => {
  const handleBackToTop = () => {
    // Implement the logic to scroll back to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContact = () => {
    // Implement the logic to handle the contact action
    alert('Contact action triggered!');
  };

  return (
    <footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', fontFamily: 'Open Sans, sans-serif' }}>
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
