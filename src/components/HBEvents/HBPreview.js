import React from "react";
import styled from "styled-components";

function HBPreview() {
  return (
    <Container>
      <img src="/hbEvents/calender.png" alt="" />
      <img src="/hbEvents/wedding.png" alt="" />
      <img src="/hbEvents/tracing.png" alt="" />
      <img src="/hbEvents/screenshot.png" alt="" />
    </Container>
  );
}

export default HBPreview;

const Container = styled.div`
  display: grid;
  grid-gap: 35px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: center;
  justify-items: center;

  img {
    width: 50%;
  }
`;
