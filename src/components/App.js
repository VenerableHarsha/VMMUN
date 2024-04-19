import Navbar from "./Navbar";
import Footer from "./footer";
import Eb from "./eb";
import Kit from "./Kit";
import Home from "./home";
import "../styles/eb.css";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Home />
        <Eb />
        <Kit />
      </div>
    </div>
  );
}
