import React from "react";
import styled from "styled-components";

function Project() {
  return (
    <Container>
      <Content>
        <ProjDescContainer>
          <Title>
            <img src="/perspective/app_logo.png" alt="" />
            Perspective Albums
          </Title>

          <Description>
            Perspective Albums makes sharing photos with friends and family
            simple. Create and join albums to see everyone's perspective of the
            particular occasion. Perfect for weddings, birthdays, vacations, and
            much more.
            <br />
            <br />
            The goal of this project was to gain experiance building/deploying a
            full stack mobile and web application that provide purpose to end
            users.
            <br />
            <br />
            <h2>Technologies:</h2>
            <br />
            Flutter, React JS, Node.js (Express), Postgresql, Digital Ocean
          </Description>

          <Links>
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
          </Links>
        </ProjDescContainer>

        <ProjectPreview>
          <GifContainer>
            <img src="/perspective/perspec.gif" alt="" />
          </GifContainer>

          <MobileImages>
            <img src="/perspective/myAlbumsPage.png" alt="" />
            <img src="/perspective/albumPage2.png" alt="" />
            <img src="/perspective/profilePage.png" alt="" />
          </MobileImages>
        </ProjectPreview>
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
    width: fit-content;
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

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 75px;
  font-family: Billabong2;
  color: white;

  img {
    height: 75px;
    width: 75px;
    margin-right: 20px;
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
`;

const Links = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
`;

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

const ProjectPreview = styled.div`
  margin-left: 50px;
  margin-right: 10px;
  margin-top: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  contain: strict;

  @media (max-width: 900px) {
    width: 100%;
    margin-left: 0px;
    contain: none;
  }
`;

const GifContainer = styled.div`
  width: 90%;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: scale-down;
  }
`;

const MobileImages = styled.div`
  display: flex;
  margin-top: 10px;
  width: 100%;

  img {
    height: 350px;
    width: 30%;
    margin: 10px;
    object-fit: scale-down;
  }
`;
