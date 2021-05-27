import React from "react";
import styled from "styled-components";

function SFPreview() {
  return (
    <div>
      <GifContainer>
        <img src="/shareAFile/shareAFile.gif" alt="" />
      </GifContainer>
    </div>
  );
}

export default SFPreview;

const GifContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: scale-down;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;
