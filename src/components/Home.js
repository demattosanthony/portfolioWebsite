import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <Content>
        <MetaData>
          <Name>Anthony DeMattos</Name>
          <Description>
            Motivaed Full Stack Developer interested in create top notche
            software solutions.
          </Description>
          <Buttons>
            <ResumeBtn>Resume</ResumeBtn>
            <GitHubBtn>
              <a
                href="https://github.com/demattosanthony?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/githubLogo.png" alt="" />
              </a>
            </GitHubBtn>
            <LinkedInBtn>
              <a
                href="https://www.linkedin.com/in/ademattos/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/linkedInLogo.png" alt="" />
              </a>
            </LinkedInBtn>
          </Buttons>
        </MetaData>

        <ProfileImg>
          <img src="/profileImg.jpg" alt="" />
        </ProfileImg>
      </Content>
      <DownArrow>
        Projects
        <img src="/down-arrow.svg" alt="" />
      </DownArrow>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/home-background.png");
`;

const Content = styled.div`
  height: 88%;
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const MetaData = styled.div`
  padding-top: 25vh;
  padding-left: 10vw;
  width: 700px;

  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    padding-top: 30px;
    padding-left: 0px;
  }

  @media (max-width: 1200px) {
    padding-left: 5vw;
    width: 500px;
  }
`;
const Name = styled.div`
  font-size: 60px;
  text-align: center;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  letter-spacing: 2px;
  font-weight: bold;
`;

const Description = styled.div`
  text-align: center;
  padding-top: 10px;
  font-size: 20px;
  color: white;
  font-family: -apple-system-body;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

const ResumeBtn = styled.div`
  background-color: white;
  height: 40px;
  color: black;
  display: flex;
  justify-content: center; //horizontal when flex
  align-items: center; //vetical when flex
  border-radius: 100px;
  /* opacity: 0.85; */
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
  padding: 20px;
  border: 1px solid #d3d3d3;
  letter-spacing: 1px;
  font-size: 14px;

  &:hover {
    transform: scale(1.06);
    border-color: black;
  }
`;

const GitHubBtn = styled(ResumeBtn)`
  background-color: white;
  img {
    height: 50px;
    width: 100px;
  }
`;

const LinkedInBtn = styled(GitHubBtn)`
  img {
    height: 60px;
  }
`;

const ProfileImg = styled.div`
  padding-top: 15vh;
  padding-left: 100px;
  overflow: hidden;
  display: flex;
  justify-content: center;

  img {
    height: 450px;
    width: 450px;
    border-radius: 300px;
  }

  @media (max-width: 1200px) {
    padding-top: 20vh;
    margin-left: 100px;
    img {
      height: 350px;
      width: 350px;
    }

    @media (max-width: 900px) {
      margin-left: 0px;
      padding-top: 20px;
      padding-left: 0px;

      img {
        height: 300px;
        width: 300px;
      }
    }
  }
`;

const DownArrow = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  font-size: 40px;
  color: white;
  letter-spacing: 3px;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  img {
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
  }
`;
