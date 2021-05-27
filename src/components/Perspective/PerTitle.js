import React from "react";
import styled from "styled-components";

function PerTitle() {
  return (
    <>
      <Title>
        <img src="/perspective/app_logo.png" alt="" />
        Perspective Albums
      </Title>
    </>
  );
}

export default PerTitle;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 75px;
  font-family: "Billabong";
  color: white;

  img {
    height: 75px;
    width: 75px;
    margin-right: 20px;
  }
`;
