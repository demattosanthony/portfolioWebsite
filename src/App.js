import "./App.css";
import Home from "./components/Home";
import Project from "./components/Project";

import Title from "./components/Title";
import SourceCodeBtn from "./components/SourceCodeBtn";
import VisitWebsiteBtn from "./components/VisitWebsiteBtn";

import PerDescription from "./components/Perspective/PerDescription";
import PerPreview from "./components/Perspective/PerPreview";
import PerButtons from "./components/Perspective/PerButtons";

import OSDesc from "./components/OpenSpot/OSDesc";
import OSPreview from "./components/OpenSpot/OSPreview";

import SFDesc from "./components/ShareAFile/SFDesc";
import SFPreview from "./components/ShareAFile/SFPreview";

function App() {
  return (
    <div className="App">
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
        title={<Title title="Open Spot Parking" />}
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
    </div>
  );
}

export default App;
