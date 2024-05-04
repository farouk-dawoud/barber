import React from "react";
import styled from "styled-components";

function Gallery({ imgSrc, gridColumn, gridRow, onClick }) {
  return (
    <GalleryItem gridColumn={gridColumn} gridRow={gridRow} onClick={onClick}>
      <Img src={imgSrc} alt="have error" />
    </GalleryItem>
  );
}

export default Gallery;

const GalleryItem = styled.div`
  grid-column: ${({ gridColumn }) => gridColumn};
  grid-row: ${({ gridRow }) => gridRow}; /* Specify the grid row directly */
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Maintain aspect ratio */
`;
