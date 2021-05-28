import React from "react";
import styled from "styled-components";

function AppStoreBtn({link}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <AppStoreLogo src="/appStore.png" />
    </a>
  );
}

export default AppStoreBtn;

const AppStoreLogo = styled.img`
  width: 175px;
  object-fit: scale-down;
  cursor: pointer;
  transition: all 250ms;

  :hover {
    transform: scale(1.05);
  }
`;
