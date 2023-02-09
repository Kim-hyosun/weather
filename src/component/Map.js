import { Route, Routes } from "react-router-dom";
import Current from './Current'
import Today from './Today'
import Tomorrow from './Tomorrow'
import More from './More'
import "./style/map.scss"
import Navigation from "./Navigation";


function Map() {
  return (
    <div className="mapArea">
      <div className="map container">
      <Routes>
        <Route path="/" element={<Current />} />
        <Route path="/today" element={<Today />} />
        <Route path="/tomorrow" element={<Tomorrow />} />
        <Route path="/more" element={<More />} />
      </Routes>
        <Navigation />
      </div>
    </div>
  );
}

export default Map;