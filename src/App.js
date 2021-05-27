import "./App.css";
import Home from "./components/Home";
import Project from "./components/Project";

import Title from "./components/Title";
import SourceCodeBtn from "./components/SourceCodeBtn";

import PerDescription from "./components/Perspective/PerDescription";
import PerPreview from "./components/Perspective/PerPreview";
import PerButtons from "./components/Perspective/PerButtons";

import OSDesc from "./components/OpenSpot/OSDesc";
import OSPreview from "./components/OpenSpot/OSPreview";
import OSButtons from "./components/OpenSpot/OsButtons";

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
    </div>
  );
}

export default App;
