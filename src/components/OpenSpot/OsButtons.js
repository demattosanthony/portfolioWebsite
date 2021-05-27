import React from "react";
import styled from "styled-components";

function OsButtons() {
  return (
    <>
      <SourceCodeBtn>
        <img src="/openSpot/gitHubLogo2.png" alt="" />
        Source Code
      </SourceCodeBtn>
    </>
  );
}

export default OsButtons;

const SourceCodeBtn = styled.div`
  background-color: white;
  height: 40px;
  color: black;
  display: flex;
  justify-content: center; //horizontal when flex
  align-items: center; //vetical when flex
  border-radius: 100px;
  /* opacity: 0.85; */
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  margin: 8px;
  padding: 20px;
  border: 1px solid #d3d3d3;
  letter-spacing: 1px;
  font-size: 14px;
  transition: all 250ms;

  img {
    height: 35px;
    width: 35px;
    margin-right: 3px;
  }

  &:hover {
    transform: scale(1.08);
    border-color: black;
    background-color: black;
    color: white;

    img {
      color: white;
    }
  }
`;
