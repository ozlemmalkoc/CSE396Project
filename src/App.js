import React, { useEffect } from 'react';

import "./index.css";
import projectImage from "./assets/robotkol.png";
import Footer from "./components/Footer.jsx";
import Banner from "./components/Banner.jsx";
import Accordion from './components/Accordion.jsx';
import VideoSection from './components/VideoSection.jsx';

import rate from "./assets/rate.png";
import Cards from './components/Cards.jsx';
import member from "./assets/member.jpg";


import PhotoSlider from './components/PhotoSlider.jsx';



function App() {
  const images = [rate, rate, rate,rate,rate,rate];
  
  const members = [
    {
      id: 1,
      name: 'Kahraman Arda',
      lastName: 'KILIÇ',
      modules: ['Desktop User Interface', 'Embedded & Communication'],
      photo: member,
    },
    {
      id: 2,
      name: 'Halil İbrahim',
      lastName: 'İLHAN',
      modules: ['Simulation', 'Hardware'],
      photo: member,
    },
    {
      id: 2,
      name: 'Özlem',
      lastName: 'MALKOÇ',
      modules: ['Desktop User Interface', 'Hardware'],
      photo: member,
    },
    {
      id: 2,
      name: 'Taylan',
      lastName: 'YERLİKAYA',
      modules: ['Mobile Application', 'Simulation'],
      photo: member,
    },
    {
      id: 2,
      name: 'Mustafa',
      lastName: 'MERCAN',
      modules: ['Mobile Application', 'Hardware'],
      photo: member,
    },
    {
      id: 2,
      name: 'Hüseyin Emre',
      lastName: 'SEKANLI',
      modules: ['Module C', 'Module D'],
      photo: member,
    },
  
    {
      id: 2,
      name: 'Ersel Celal',
      lastName: 'EREN',
      modules: ['Embedded & Communication', 'Desktop User Interface'],
      photo: member,
    },
    // Diğer üyeleri ekleyin
  ];
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 3fr 1fr",
    gap: "30px",
    padding: "0 30px",
  };

  const paragraphStyle = {
    margin: 0,
    padding: 0,
  };

  const videoSectionContainerStyle = {
    display: "flex",
    justifyContent: "center", // Ortalamak için
    alignItems: "center", // Ortalamak için
  };


  const imageStyle = {
    width: "100%",
    height: "auto",
    display: "block",
    marginBottom: 0,
  };
  const titleStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'orange',
    
  };
  

  return (
    <div style={{ margin: 0, padding: 0, boxSizing: "border-box" }}>
      
      <Banner />
   <br>
   </br>
   <br>
   </br>
      <div id="overview" style={containerStyle}>
        <div></div>
        <div style={paragraphStyle}>
          <h1 style={titleStyle}>Overview</h1>
         
          <img src={projectImage} alt="Project Image" style={imageStyle} />
        </div>
        <div></div>
      </div>
      <br>
   </br>
   <br>
   </br>
      <div  style={containerStyle}>
        <div></div>
        <div style={paragraphStyle}>
          <p style={{ color: '#333' }}className="label-style">
          We have come together to focus on the development of a SCARA (Selective Compliance Assembly Robot Arm) robotic arm. This robot is a technological marvel capable of tasks such as drawing colorful pictures and interactive gaming. Controlled by a Raspberry Pi Zero, the two-axis robotic arm successfully brings to life user-created drawings, games, and interactive content through desktop and mobile applications. Simulations using tools like Fusion360 and Gazebo allow us to test the design's performance in a virtual environment. This interdisciplinary collaboration aims to explore the fun and creative applications of robotic technology.          </p>
        </div>
        <div></div>
      </div>

      <br>
   </br>
   <br>
   </br>
      
      <div  style={{ ...containerStyle, ...videoSectionContainerStyle }}>
        <div></div>
        <div style={paragraphStyle}>
  
          <VideoSection />
        </div>
        <div></div>
      </div>
      <br>
   </br>
   <br>
   </br>
     
      <br>
   </br>
   <br>
   </br>
      <div id="modules" style={containerStyle}>
        <div></div>
        <div style={paragraphStyle}>
          <h1 style={titleStyle}>Modules</h1>
          <Accordion />
        </div>
        <div></div>
      </div>
<br></br>
<br></br>
<br></br>

      <br></br>
<br></br>
<br></br>
<div id="members" style={containerStyle}>
        <div></div>
        <div style={paragraphStyle}>
          <h1 style={titleStyle}>Members</h1>

          <Cards members={members} /> 
        </div>
        <div></div>
      </div>
      <br></br>
<br></br>
<br></br>
<div id="pictures" style={containerStyle}>
        <div></div>
        <div style={paragraphStyle}>
          <h1 style={titleStyle}>Pictures</h1>

        
        </div>
        <div></div>
      </div>
<div style={{ marginLeft: '22%',marginRight: '22%' }}>
          <PhotoSlider />
          </div>
          <br></br>
<br></br>
<br></br>
<div id="contact" style={containerStyle}>
        <div></div>
        <div style={paragraphStyle}>
          <h1 style={titleStyle}>Contact</h1>

          <p style={{ textAlign: 'center', color: '#333',fontSize: '16px' }}>
  <strong>Adres:</strong> Gebze Teknik Üniversitesi (GTÜ)<br />
 <br />
  Cumhuriyet Mahallesi, 2254. Sk. No:2, 41400 Gebze/Kocaeli
</p>
<p style={{ textAlign: 'center', color: '#333',fontSize: '16px' }}>
  <strong>Telefon:</strong> <span style={{ fontSize: '1.2em' }}>0262 605 32 14 - 15</span>
</p>


        </div>
        <div></div>
      </div>
      <br></br>
<br></br>
<br></br>
      <br></br>
<br></br>
<br></br>
      <Footer />
    </div>
  );
}

export default App;
