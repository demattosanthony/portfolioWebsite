import React from "react";
import styled from "styled-components";

import VisitWebsiteBtn from "../VisitWebsiteBtn";

function PerButtons() {
  return (
    <>
      <VisitWebsiteBtn link="https://perspective-3adcf.web.app/login" />

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

const AppStoreLogo = styled.img`
  width: 175px;
  object-fit: scale-down;
  cursor: pointer;
  transition: all 250ms;

  :hover {
    transform: scale(1.05);
  }
`;
