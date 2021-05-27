import React from "react";
import styled from "styled-components";

function OSPreview() {
  return (
    <>
      <GifContainer>
        <img src="/openSpot/pkLot.gif" alt="" />
      </GifContainer>

      <MobileImages>
        <img src="/openSpot/mobile.gif" alt="" />
      </MobileImages>
    </>
  );
}

export default OSPreview;

const GifContainer = styled.div`
  width: 80%;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: scale-down;
  }

  @media (max-width: 900px) {
    width: 90%;
  }
`;

const MobileImages = styled.div`
  display: flex;
  margin-top: 10px;
  width: 100%;
  align-items: center;
  justify-content: center;

  img {
    height: 350px;
    width: 30%;
    margin: 10px;
    object-fit: scale-down;
  }
`;
