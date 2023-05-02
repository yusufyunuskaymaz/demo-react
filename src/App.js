import "./assets/css/style.css";
import "./assets/css/responsive.css";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Populer from "./components/Populer";
import Connect from "./components/Connect";
import Download from "./components/Download";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <>
        <Header />
        <Hero />
        <Populer />
        <Cards />
        <Connect />
       <Download />
       <Footer />
      </>
    </>
  );
}

export default App;
