import { SelectedPage } from "@/common/types";
import Benefits from "@/scenes/skills";
import Footer from "@/scenes/footer";
import Home from "@/scenes/home";
import Navbar from "@/scenes/navbar";
import OurClasses from "@/scenes/myProjects";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { SearchProvider } from "@/context/SearchContext";
import ScrollToTop from "@/common/ScrollToTop";
import Experience from "@/scenes/experience";
import Testimonials from "@/scenes/testimonials";
import Contact from "@/scenes/contact";
import Education from "@/scenes/education";

function AppContent() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.AboutMe
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY == 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.AboutMe);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="app">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Home setSelectedPage={setSelectedPage} />
        <Benefits setSelectedPage={setSelectedPage} />
        <Education setSelectedPage={setSelectedPage} />
        <Experience setSelectedPage={setSelectedPage} />
        <OurClasses setSelectedPage={setSelectedPage} />
        {false &&
          <Testimonials setSelectedPage={setSelectedPage} />
        }
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <SearchProvider>
        <AppContent />
      </SearchProvider>
    </ThemeProvider>
  );
}

export default App;
