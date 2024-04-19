import Navbar from "./Navbar";
import AboutMV from "./AboutMV";
import Eb from "./eb";
import Kit from "./Kit";
import Home from "./home";


export default function App() {
  return (
    <div className="app">
      <Navbar />

        <Home />
        <AboutMV/>
        <Eb />
        <Kit />

    </div>
  );
}
