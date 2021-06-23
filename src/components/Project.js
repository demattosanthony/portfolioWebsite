import React from "react";
import styled from "styled-components";

function Project({ title, description, buttons, preview }) {
  return (
    <Container>
      <Content>
        <ProjDescContainer>
          {title}

          <Description>{description}</Description>

          <Links>{buttons}</Links>
        </ProjDescContainer>

        <ProjectPreview>{preview}</ProjectPreview>
      </Content>
    </Container>
  );
}

export default Project;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/home-background.png");

  @media (max-width: 900px) {
    overflow-y: visible;
    height: auto;
    /* width: fit-content; */
  }
`;

const Content = styled.div`
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const ProjDescContainer = styled.div`
  margin-top: 50px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;

  @media (max-width: 900px) {
    width: 100%;
    margin-left: 0px;
  }
`;

const Description = styled.div`
  margin-top: 25px;
  width: 500px;
  text-align: center;
  font-size: 20px;
  word-spacing: 2px;
  line-height: 26px;
  color: white;

  h2 {
    padding: 0px;
    margin: 0px;
  }

  @media (max-width: 768px) {
    width: 400px;
  }
`;

const Links = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
`;

const ProjectPreview = styled.div`
  margin-left: 50px;
  margin-right: 10px;
  margin-top: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* contain: strict; */

  @media (max-width: 900px) {
    width: 100%;
    margin-left: 0px;
    contain: none;
  }
`;
