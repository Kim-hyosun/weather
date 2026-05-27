import Global from "../src/asset/Globalstyle"
import "../src/asset/font.css"
import "../src/asset/minireset.min.css"
import Header from "./component/Header";
import Nav from "./component/Nav";
import Map from "./component/Map";
function App() {
  return (
    <>
      <Global />
      <Header />
      <Nav />
      <Map />
    </>
  );
}

export default App;
