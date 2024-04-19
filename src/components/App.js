import Navbar from "./Navbar";
import Footer from "./footer";
import Eb from "./eb";
import Kit from "./Kit";
import Home from "./home";


export default function App() {
  return (
    <div className="app">
      <Navbar />

        <Home />
        <Eb />
        <Kit />

    </div>
  );
}
