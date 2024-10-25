import Aboutus from "./Components/Aboutus/Aboutus";
import Break from "./Components/Break/Break";
import Educator from "./Components/Educator/Educator";
import Features from "./Components/Features/Features";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Security from "./Components/Security/Security";
import Start from "./Components/Start/Start";
import { Testimonials } from "./Components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Break />
      <Aboutus />
      <Features />
      <Security />
      <Educator />
      <Testimonials />
      <Start />
      <Footer />
    </div>
  );
}

export default App;
