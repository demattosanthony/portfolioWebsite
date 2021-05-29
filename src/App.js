import "./App.css";
import styled from "styled-components";
import Home from "./components/Home";
import Project from "./components/Project";

import Title from "./components/Title";
import SourceCodeBtn from "./components/SourceCodeBtn";
import VisitWebsiteBtn from "./components/VisitWebsiteBtn";
import AppStoreBtn from "./components/AppStoreBtn";

import PerDescription from "./components/Perspective/PerDescription";
import PerPreview from "./components/Perspective/PerPreview";
import PerButtons from "./components/Perspective/PerButtons";

import OSDesc from "./components/OpenSpot/OSDesc";
import OSPreview from "./components/OpenSpot/OSPreview";

import SFDesc from "./components/ShareAFile/SFDesc";
import SFPreview from "./components/ShareAFile/SFPreview";

import HBDesc from "./components/HBEvents/HBDesc";
import HBPreview from "./components/HBEvents/HBPreview";

function App() {
  return (
    <div className="App">
      <Container>
        <Home />
        <Project
          title={
            <Title
              appLogo="/perspective/app_logo.png"
              title="Perspective Albums"
              fontFamily="Billabong"
            />
          }
          description={<PerDescription />}
          buttons={<PerButtons />}
          preview={<PerPreview />}
        />
        <Project
          title={<Title title="Open Spot Parking" fontFamily="leftist" />}
          description={<OSDesc />}
          buttons={
            <SourceCodeBtn link="https://github.com/demattosanthony/carNocar" />
          }
          preview={<OSPreview />}
        />
        <Project
          title={<Title title="Share A File" fontFamily="Billabong" />}
          description={<SFDesc />}
          buttons={<VisitWebsiteBtn link="https://share-a-file.web.app" />}
          preview={<SFPreview />}
        />
        <Project
          title={
            <Title
              appLogo="/hbEvents/hbEventsIcon.png"
              title="Hollow Brook Events"
              fontFamily="Billabong"
            />
          }
          description={<HBDesc />}
          buttons={
            <AppStoreBtn link="https://apps.apple.com/us/app/hollow-brook-events/id1562578409#?platform=iphone" />
          }
          preview={<HBPreview />}
        />
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
`;
