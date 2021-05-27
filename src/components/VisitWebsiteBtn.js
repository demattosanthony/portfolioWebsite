import React from "react";
import styled from "styled-components";

function VisitWebsiteBtn({ link }) {
  return (
    <VisitWebSite href={link} target="_blank" rel="noreferrer">
      Visit Website
    </VisitWebSite>
  );
}

export default VisitWebsiteBtn;

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
    transform: scale(1.08);
  }
`;
