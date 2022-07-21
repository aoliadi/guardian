import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Main from "./Main";
import WebFont from "webfontloader";
import SearchBar from "./SearchBar";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Rozha One", "Josefin Sans", "Lato", "Coustard"],
      },
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
