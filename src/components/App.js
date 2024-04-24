import About_us from "./About_us";
import Navbar from "./Navbar";
import Kit from "./Kit";
import Home from "./home";
import Footers from "./footer";
import Committees from "./Committees";
import Secretariat from "./Secretariat";
import '../index.css'


export default function App() {
  return (
    <div className="app">
      <Navbar />

        <div id="home">
        <Home />
        </div>
        <div id="about" >
        <About_us/>
        </div>
        <div id="secretariat">
        <Secretariat />
        </div>
        <div id="committees">
        <Committees />
        </div>
        <div id="kit">
        <Kit />
        </div>
        <div id="contact">
        <Footers/>
        </div>


    </div>
  );
}
