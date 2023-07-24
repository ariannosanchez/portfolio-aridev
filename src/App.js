import About from "./components/About";
import { Contact } from "./components/Contact";
import { Skill } from "./components/Skill";
import Footer from "./components/Footer";
import { Home } from "./components/Home";
import NavBar from "./components/NavBar";
import { Portfolio } from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import useSocialLinksVisibility from "./utils/useSocialLinksVisibility";

function App() {
  
  const mostrarSocialLinks = useSocialLinksVisibility();

  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skill />
      <Portfolio />
      {mostrarSocialLinks && <SocialLinks />}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
