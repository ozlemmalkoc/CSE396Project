import React, { useState } from 'react';

const Banner = () => {
  const [activeTab, setActiveTab] = useState(null);

  const headerStyle = {
    background: 'white',
    color: '#000000',
    borderBottom: 'solid 2px white',
    zIndex: 2,
    width: '100%',
    height: '40px',
    position: 'fixed',
    top: 0,
    marginBottom: '20px',
  };

  const tabStyle = (tabId) => ({
    cursor: 'pointer',
    marginRight: '40px',
    fontSize: '1.2em',
    color: activeTab === tabId ? 'orange' : '#333',
    fontWeight: 'bold',
    fontFamily: 'Arial, sans-serif',
  });
  

  const handleNavigation = (sectionId) => {
    setActiveTab(sectionId);
  
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 40; // 40, başlık alanının yüksekliği
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  const handleMouseEnter = (tabId) => {
    setActiveTab(tabId);
  };

  const handleMouseLeave = () => {
    setActiveTab(null);
  };

  const tabContainerStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '15%',
    marginTop: '12px',
  };

  return (
    <div className="">
      <div style={headerStyle} className="header" onMouseLeave={handleMouseLeave}>
        <div style={tabContainerStyle}>
          <div>
            <span
              style={tabStyle('overview')}
              onClick={() => handleNavigation('overview')}
              onMouseEnter={() => handleMouseEnter('overview')}
            >
              Overview
            </span>
            <span
              style={tabStyle('modules')}
              onClick={() => handleNavigation('modules')}
              onMouseEnter={() => handleMouseEnter('modules')}
            >
              Modules
            </span>
            <span
              style={tabStyle('members')}
              onClick={() => handleNavigation('members')}
              onMouseEnter={() => handleMouseEnter('members')}
            >
              Members
            </span>
            <span
              style={tabStyle('pictures')}
              onClick={() => handleNavigation('pictures')}
              onMouseEnter={() => handleMouseEnter('pictures')}
            >
              Pictures
            </span>
            <span
              style={tabStyle('contact')}
              onClick={() => handleNavigation('contact')}
              onMouseEnter={() => handleMouseEnter('contact')}
            >
              Contact
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
