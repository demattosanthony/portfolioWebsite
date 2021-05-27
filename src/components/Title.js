import React from "react";
import styled from "styled-components";

function Title({ appLogo, title, fontFamily }) {
  return (
    <TitleStyle fontFamily={fontFamily}>
      {appLogo && <img src={appLogo} alt="" />}
      {title}
    </TitleStyle>
  );
}

export default Title;

const TitleStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 75px;
  font-family: ${(props) => props.fontFamily};
  color: white;

  img {
    height: 75px;
    width: 75px;
    margin-right: 20px;
  }
`;
