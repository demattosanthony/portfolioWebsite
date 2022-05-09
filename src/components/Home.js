import React from 'react'
import styled from 'styled-components'

function Home() {
  return (
    <Container>
      <Content>
        <MetaData>
          <Name>Anthony DeMattos</Name>
          <Description>
            Motivated Full Stack Developer interested in creating top notche
            software solutions. Passion for building beautiful user interfaces
            and giving them life through creating a slick backend.
          </Description>
          <Buttons>
            <ResumeBtn>
              <a
                href="https://docs.google.com/document/d/1FmVeuLu7rgfSA8bV_OPdTiy2d2z9DY8i/edit?usp=sharing&ouid=106913268900237636908&rtpof=true&sd=true"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </ResumeBtn>
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
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('/home-background.png');
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Content = styled.div`
  display: flex;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`

const MetaData = styled.div`
  padding-top: 25vh;
  /* padding-left: 10vw; */
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  align-items: center;

  @media (max-width: 1200px) {
    padding-left: 5vw;
    width: 500x;
    margin-right: 00px;

    @media (max-width: 900px) {
      padding-top: 30px;
      padding-left: 0px;
      width: 100%;
    }
  }
`
const Name = styled.div`
  font-size: 60px;
  text-align: center;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  letter-spacing: 2px;
  font-weight: bold;
`

const Description = styled.div`
  text-align: center;
  padding-top: 10px;
  font-size: 20px;
  color: white;
  width: 500px;

  font-family: -apple-system-body;

  @media (max-width: 768px) {
    width: 400px;
  }
`

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`

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
  font-size: 16px;
  font-weight: bold;
  transition: all 250ms;

  a {
    text-decoration: none;
    color: black;
  }

  &:hover {
    transform: scale(1.06);
    border-color: black;
  }

  @media (max-width: 900px) {
    font-size: 12px;
  }
`

const GitHubBtn = styled(ResumeBtn)`
  background-color: white;
  img {
    height: 50px;
    width: 100px;
  }

  @media (max-width: 900px) {
    img {
      height: 30px;
      width: 70px;
      object-fit: scale-down;
    }
  }
`

const LinkedInBtn = styled(GitHubBtn)`
  img {
    height: 60px;
  }
`

const ProfileImg = styled.div`
  padding-top: 15vh;
  /* padding-left: 100px; */
  overflow: hidden;
  display: flex;
  justify-content: center;
  width: 50%;
  align-items: center;

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
      width: 100%;

      img {
        height: 300px;
        width: 300px;
      }
    }
  }
`

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

  @media (max-width: 900px) {
    width: 100%;
  }
`
