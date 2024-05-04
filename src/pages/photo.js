// Photo.js

import React, { useState } from "react";
import Header from "../components/Header";
import Gallery from "../components/gallery";
import Title from "../components/shared/title";
import styled from "styled-components";

function Photo() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionImage, setTransitionImage] = useState(false);
  const totalImages = galleryImages.length;

  const openModal = (imageSrc, index) => {
    setSelectedImage(imageSrc);
    setCurrentIndex(index);
    setTimeout(() => {
      setTransitionImage(true);
    }, 50);
  };

  const closeModal = () => {
    setTimeout(() => {
      setSelectedImage(null);
    }, 100);
    setTransitionImage(false);
  };

  const goToNextImage = () => {
    const nextIndex = (currentIndex + 1) % totalImages;
    openModal(
      `${process.env.PUBLIC_URL}/image/gallery/${galleryImages[nextIndex]}`,
      nextIndex
    );
  };

  const goToPreviousImage = () => {
    const prevIndex = (currentIndex - 1 + totalImages) % totalImages;
    openModal(
      `${process.env.PUBLIC_URL}/image/gallery/${galleryImages[prevIndex]}`,
      prevIndex
    );
  };

  const handleModalContentClick = (e) => {
    // Prevent closing modal when clicking inside ModalContent
    e.stopPropagation();
  };

  return (
    <section>
      <Header PathTo="photo" />
      <Div>
        <Title
          textMain="Recente Foto's"
          textPar="Hier vindt u voorbeelden van klanten die in verschillende stijlen zijn geknipt"
        />
        <div className="container mx-auto lg:px-36 px-8 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryImages.map((image, index) => (
              <Gallery
                key={index}
                imgSrc={`${process.env.PUBLIC_URL}/image/gallery/${image}`}
                onClick={() =>
                  openModal(
                    `${process.env.PUBLIC_URL}/image/gallery/${image}`,
                    index
                  )
                }
              />
            ))}
          </div>
        </div>
      </Div>
      {selectedImage && (
        <ModalBackground isVisible={transitionImage} onClick={closeModal}>
          <ModalContent onClick={handleModalContentClick}>
            <img src={selectedImage} alt="Fullscreen" />
            <ArrowLeft onClick={goToPreviousImage}>&#9664;</ArrowLeft>
            <ArrowRight onClick={goToNextImage}>&#9654;</ArrowRight>
          </ModalContent>
        </ModalBackground>
      )}
    </section>
  );
}

export default Photo;

const Div = styled.div`
  padding: 120px 0;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.3s ease;
  z-index: 999; // Ensure it's above other elements
`;

const ModalContent = styled.div`
  position: relative;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
`;

const ArrowButton = styled.button`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition: color 0.3s ease;
  &:hover {
    color: black;
  }
`;

const ArrowLeft = styled(ArrowButton)`
  left: 10px;
`;

const ArrowRight = styled(ArrowButton)`
  right: 10px;
`;

const galleryImages = [
  "g1.jpg",
  "g2.jpg",
  "g4.jpg",
  "g5.jpg",
  "g6.jpg",
  "klant.png",
  "klant3.1.png",
  "klant3.2.png",
  "klant3.png",
];
