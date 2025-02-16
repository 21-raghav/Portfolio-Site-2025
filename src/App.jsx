import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Experiences from "./components/Experiences/Experiences";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Intro />
      <hr/>
      <Experiences />
      <hr/>
      <Projects />
      <hr/>
      <Footer />
    </div>
  );
};

export default App;
