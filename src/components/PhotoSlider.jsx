import React, { useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import photo1 from '../assets/1.png';
import photo2 from '../assets/2.png';
import photo3 from '../assets/3.png';
import photo4 from '../assets/4.png';
import photo5 from '../assets/5.png';
import photo6 from '../assets/6.png';
import photo7 from '../assets/7.png';
import photo8 from '../assets/8.png';

const images = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8
  // ... diğer resimler
];

const CustomSlider = styled(Slider)`
  .slick-slider {
    margin: 0;
  }

  .slick-list {
    margin: 0;
  }

  .slick-track {
    display: flex;
    justify-content: space-between;
  }
`;

const PhotoSliderItem = styled.div`
  flex: 0 0 calc(33.33% - 10px); /* Genişliği ayarla ve sol-sağ boşluk ekle */
  cursor: pointer;
  margin: 5px; /* Add some initial margin */
`;

const ImageWrapper = styled.div`
  margin: 5px; /* Add additional margin to control spacing */
`;

const PhotoSliderImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 100%;
  object-fit: contain;
`;

const EnlargedPhotoModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const NavigationButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  color: #fff;
  cursor: pointer;
`;

const PreviousButton = styled(NavigationButton)`
  left: 20px;
`;

const NextButton = styled(NavigationButton)`
  right: 20px;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  color: #fff;
  font-size: 24px;
`;

const EnlargedImage = styled.img`
  max-width: 100%;
  max-height: 200vh;
  object-fit: contain;
`;

const PhotoSlider = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const openModal = (index) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handlePrevious = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <CustomSlider {...settings}>
        {images.map((image, index) => (
          <PhotoSliderItem key={index} onClick={() => openModal(index)}>
            <ImageWrapper>
              <PhotoSliderImage src={image} alt={`slide-${index}`} />
            </ImageWrapper>
          </PhotoSliderItem>
        ))}
      </CustomSlider>

      {selectedImage !== null && (
        <EnlargedPhotoModal>
          <PreviousButton onClick={handlePrevious}>&lt;</PreviousButton>
          <CloseButton onClick={closeModal}>&times;</CloseButton>
          <NextButton onClick={handleNext}>&gt;</NextButton>
          <EnlargedImage src={images[selectedImage]} alt={`enlarged-slide-${selectedImage}`} />
        </EnlargedPhotoModal>
      )}
    </>
  );
};

export default PhotoSlider;
