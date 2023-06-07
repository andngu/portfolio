import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Socials from "./components/Socials";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
   return (
      <div>
         <NavBar />
         <Home />
         <Projects />
         <Skills />
         <Contact />
         <Socials />
      </div>
   );
}

export default App;
