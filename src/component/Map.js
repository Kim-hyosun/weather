import { Route, Routes } from "react-router-dom";
import Current from './current/Current'
import Today from './today/Today'
import Tomorrow from './tomorrow/Tomorrow'
import More from './more/More'
import "./style/map.scss"
import Navigation from "./Navigation";


function Map() {
  return (
    <div className="mapArea">
      <div className="map container">
      <Routes>
        <Route path="/weather" element={<Current />} />
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