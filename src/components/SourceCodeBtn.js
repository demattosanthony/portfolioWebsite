import React, { useState } from "react";
import styled from "styled-components";

function SourceCodeBtn({ link }) {
  const [logo, setLogo] = useState("/gitHubLogoBlack.png");

  return (
    <Link href={link} target="_blank">
      <Btn
        onMouseEnter={() => setLogo("gitHubLogoWhite.png")}
        onMouseLeave={() => setLogo("gitHubLogoBlack.png")}
      >
        <img src={logo} alt="" />
        Source Code
      </Btn>
    </Link>
  );
}

export default SourceCodeBtn;

const Link = styled.a`
  text-decoration: none;
`;

const Btn = styled.div`
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
  text-decoration: none;

  img {
    height: 35px;
    width: 35px;
    margin-right: 5px;
  }

  &:hover {
    transform: scale(1.08);
    border-color: black;
    background-color: black;
    color: white;
  }
`;
