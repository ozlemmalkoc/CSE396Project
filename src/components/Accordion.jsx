// Accordion.jsx
import React, { useState } from 'react';
import Image1 from '../assets/robotkol.png';
import shema from '../assets/shema.png';
import angle from '../assets/angle.png';
import shema2 from '../assets/shema2.png';
import picture1 from '../assets/1.png';
import picture2 from '../assets/2.png';
import picture3 from '../assets/3.png';
import picture4 from '../assets/4.png';

import mobilepictures from '../assets/mobilepictures.png';
import simulation1 from '../assets/simulation1.png';
import simulation2 from '../assets/simulation2.png';
import simulation3 from '../assets/simulation3.png';



const Accordion = () => {

  const [openItems, setOpenItems] = useState([]);
  const titles = ['Hardware', 'Embedded and Communication', 'Desktop User Interface',"Mobile Interface","Simulation"];
  const contents = [
    <>
      <img src={Image1} alt="Resim 1" style={{ maxWidth: '100%', height: 'auto' }} />
      <p style={{  color: '#333' }}className="label-style">Robot arm consists of two servos
connected by two sticks. End effector
includes a latch holding the pen, and a
third servo for disengaging the pen from
paper.
Motors will be powered by a DC adapter.
Images and games created by the user
using a mobile or desktop graphical
interface will be transferred to an
embedded system, and subsequently,
drawings will be made on paper through the movements of the mechanical servos. The
robotic arm will move in the up-down and right-left axes. It will be a 2-axis robotic arm.</p>
    </>,
    <>
    <div style={{ display: 'flex' }}>
        <img src={shema} alt="Resim 1" style={{ maxWidth: '50%', height: 'auto' }} />
        <img src={angle} alt="Resim 1" style={{ maxWidth: '50%', height: 'auto' }} />
      </div>
      <p style={{  color: '#333' }}className="label-style">
Raspberry Pi Zero controls the robotic arm via C++, communicating with mobile devices over Wi-Fi and desktop via USB. The embedded system processes X, Y coordinates for servo movements, converting images to JSON format for drawing execution. Distance and gyro sensors provide real-time data to both Raspberry Pi Zero and desktop. The communication structure involves TCP sockets, with encoding/decoding for data exchange. The project no longer has direct communication between mobile and desktop apps; both communicate exclusively with the embedded system. Multiple processes handle simultaneous connections, with drawing requests locking the application. The GitHub repository contains a simulation of the embedded system's communication.</p>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src={shema2} alt="Resim 1" style={{ maxWidth: '100%', maxHeight: '100%', height: 'auto' }} />
    </div>
  
    </>,
    <>
      
      <p style={{  color: '#333' }} className="label-style">The system involves developing a graphical user interface (GUI) using C++ and the Qt Framework. This GUI, designed with Qt Designer, allows users to interact with a robot in various ways. Users can draw, add text, and edit images, similar to popular graphic editing software. Additionally, the interface supports playing games against the robot.

The unique aspect of this system is that the robot can reproduce the drawings created and the games played on paper. The images manipulated in the GUI are translated into mechanical instructions that the robot understands, enabling it to move its servos and create physical drawings.

The GUI provides real-time feedback on the robot's status, including the angles of its servos. Users can also manually control the robot's movements using slider bars in the main menu. Two sensors, a distance sensor showing the distance to the paper over time and a gyro sensor creating an acceleration/time graph, contribute 2D data visualization.</p>
<img src={picture1} alt="Resim 1" style={{ maxWidth: '100%', height: 'auto' }} />
<h3 >A. Image Uploading</h3>
<p style={{  color: '#333' }} className="label-style">The user will be able to add images to the program using the drag-and-drop feature.
The robot will then draw this image on paper. Even if the images are in color, black
and white versions will be drawn.</p>
<img src={picture2} alt="Resim 1" style={{ maxWidth: '100%', height: 'auto' }} />
<h3 >B. Image Editing</h3>
<p style={{  color: '#333' }} className="label-style">Users will be able to make cropping, scaling, and rotation adjustments for the images
added by the user. With the cropping operation, a specific region of the image can be
selected, the size of the image can be adjusted with the Scale feature, and the image
can be rotated with Rotation. In addition, the position of the image on the paper can
be selected by the user. The visual above displays image editing tools in the
bottom-left corner.</p>

<h3>C. Drawing</h3>
<p style={{  color: '#333' }}className="label-style">The user will be able to draw, similar to a Paint program, and add text to their
drawings. The drawn image will then be reproduced on paper by the robot.</p>
<img src={picture3} alt="Resim 1" style={{ maxWidth: '100%', height: 'auto' }} />

<h3>D. Shortest Path</h3>
<p style={{  color: '#333' }}className="label-style">A blank grid will be created. The user will be able to place a starting point, an ending point,
and obstacles on this grid. After pressing the "Draw" button, a shortest path algorithm will
run in the background, and the shortest path will be drawn on paper by the robot. The grid
size should match the paper's grid size, and a fixed grid size will be used.</p>
<h3>E. Graph</h3>
<p style={{  color: '#333' }} className="label-style">To enhance the functionality of the graphical interface, a drawing feature will be added.
Initially, the user will be prompted to upload a CSV file. Once the file is uploaded, a graph will
be created using the data within it, and then it will be converted into a drawing by the robot.</p>
<h3>F. Sketch Preview</h3>
<p style={{  color: '#333' }}className="label-style">We will add a 2D drawing preview feature to the interface, similar to the print preview feature
found in Cura software designed for 3D printers. This way, the user will be visually shown
what portion of the drawing has been completed, indicating the progress of the drawing.</p>
<img src={picture4} alt="Resim 1" style={{ maxWidth: '100%', height: 'auto' }} />

    </>,
       <>
    
     
       <p style={{  color: '#333' }} className="label-style">
The Mobile Interface, developed using Flutter and C/C++ through the dart:ffi library, offers users a versatile experience. Users can draw photos captured with their phones, engage in an interactive TicTacToe game against the computer, and track real-time progress. The interface displays crucial details such as drawing time, remaining time, and completion percentage, providing a comprehensive and dynamic user experience.</p>
<img src={mobilepictures} alt="Resim 1" style={{ maxWidth: '100%', height: 'auto' }} />

     </>,
         <> 
       
         <p  className="label-style">Robot model reassembled using STL files in Fusion360. Robot description created including
the URDF to be able to simulate the robot. The simulation will be done using ROS trajectory
controllers driven by our C++ controller on Gazebo.</p>
<img src={simulation1} alt="Resim 1" style={{ maxWidth: '100%', height: 'auto' }} />

<div style={{ display: 'flex' }}>
        <img src={simulation2} alt="Resim 1" style={{ maxWidth: '50%', height: 'auto' }} />
        <img src={simulation3} alt="Resim 1" style={{ maxWidth: '50%', height: 'auto' }} />
      </div>
   

       </>


  ];

 
  const handleTitleClick = (index, e) => {
    e.preventDefault();

    // Check if the clicked item is already open
    const isOpen = openItems.includes(index);

    // Toggle the state of the clicked item
    setOpenItems((prevOpenItems) => (
      isOpen ? prevOpenItems.filter((item) => item !== index) : [...prevOpenItems, index]
    ));
  };


  const accordionItemStyle = {
    width: '100%', // Set a fixed width for each accordion item
    margin: '8px',
  };

  const accordionButtonStyle = {
    width: '100%',
    padding: '16px',
    textAlign: 'left',
    backgroundColor: '#f0f0f0',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const accordionButtonActiveStyle = {
    backgroundColor: '#ccc',
  };

  const accordionContentStyle = {
    display: 'none',
    padding: '16px',
    overflow: 'hidden',
    transition: 'height 0.3s',
  };
  
  const accordionContentShowStyle = {
    display: 'block',
    height: 'auto',
  };

  return (
    <div>
      {titles.map((title, index) => (
        <div key={index} style={accordionItemStyle} id={`accordion-item-${index}`}>
          <button
            type="button"
            className="label-style"
            style={{
              ...accordionButtonStyle,
              ...(openItems.includes(index) ? accordionButtonActiveStyle : {}),
            }}
            onClick={(e) => handleTitleClick(index, e)} // Pass the event object to the handler
          >
            {title}
          </button>
          <div
            style={{
              ...accordionContentStyle,
              ...(openItems.includes(index) ? accordionContentShowStyle : {}),
            }}
          >
            {contents[index]}
          </div>
        </div>
      ))}
    </div>
  );
};



export default Accordion;
