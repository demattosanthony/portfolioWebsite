import React from "react";
import styled from "styled-components";

function SFPreview() {
  return (
    <Wrap>
      <GifContainer>
        <img src="/shareAFile/shareAFile.gif" alt="" />
      </GifContainer>
    </Wrap>
  );
}

export default SFPreview;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;

const GifContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: scale-down;
  }

  @media (max-width: 900px) {
    width: 65%;
    display: flex;
    justify-content: center;
    border-radius: 8px;

    img {
      width: 100%;
    }
  }
`;
