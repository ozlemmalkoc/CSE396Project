import React from 'react';
import proje from '../assets/proje.mp4'

const VideoSection = () => {
  return (
    <div>
      
      <video width="640" height="360" controls>
        <source src={proje} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoSection;
