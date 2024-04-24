import About_us from "./About_us";
import Navbar from "./Navbar";
import AboutMV from "./Secretariat";
import Eb from "./eb";
import Kit from "./Kit";
import Home from "./home";
import Footers from "./footer";


export default function App() {
  return (
    <div className="app">
      <Navbar />

        <Home />
        <About_us/>
        <AboutMV/>
        <Eb />
        <Kit />
        <Footers/>

    </div>
  );
}
