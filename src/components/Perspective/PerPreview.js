import React from "react";
import styled from "styled-components";

function PerPreview() {
  return (
    <>
      <GifContainer>
        <img src="/perspective/perspec.gif" alt="" />
      </GifContainer>

      <MobileImages>
        <img src="/perspective/myAlbumsPage.png" alt="" />
        <img src="/perspective/albumPage2.png" alt="" />
        <img src="/perspective/profilePage.png" alt="" />
      </MobileImages>
    </>
  );
}

export default PerPreview;

const GifContainer = styled.div`
  width: 90%;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: scale-down;
  }
`;

const MobileImages = styled.div`
  display: flex;
  margin-top: 10px;
  width: 100%;

  img {
    height: 350px;
    width: 30%;
    margin: 10px;
    object-fit: scale-down;
  }
`;
