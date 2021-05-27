import React from "react";
import styled from "styled-components";

function PerButtons() {
  return (
    <>
      <VisitWebSite
        href="https://perspective-3adcf.web.app/login"
        target="_blank"
        rel="noreferrer"
      >
        Visit Website
      </VisitWebSite>

      <a
        href="https://apps.apple.com/us/app/perspective-albums/id1547366416#?platform=iphone"
        target="_blank"
        rel="noreferrer"
      >
        <AppStoreLogo src="/appStore.png" />
      </a>
    </>
  );
}

export default PerButtons;

const VisitWebSite = styled.a`
  border: 1px solid #438afe;
  border-radius: 50px;
  padding: 12px;
  transition: all 250ms;
  margin-right: 15px;
  font-size: 22px;
  text-decoration: none;
  color: #438afe;

  :hover {
    background-color: #438afe;
    color: white;
    transform: scale(1.05);
  }
`;

const AppStoreLogo = styled.img`
  width: 175px;
  object-fit: scale-down;
  cursor: pointer;
  transition: all 250ms;

  :hover {
    transform: scale(1.05);
  }
`;
