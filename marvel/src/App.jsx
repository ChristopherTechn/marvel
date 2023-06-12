import { Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import Comics from "./Comics";
import Series from "./Series";
import Tvshows from "./Tvshows";
import Videos from "./Videos";
import Characters from "./Characters";


function App() {

  return (
    <div>
          <nav className="middle"> 
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <Link to='/Characters'>Characters</Link>
            </li>
            <li>
              <Link to="/Comics">Comics</Link>
            </li>
            <li>
              <Link to="/Series">Series</Link>
            </li>
            <li>
              <Link to="/Tvshows">Tvshows</Link>
            </li>
            <li>
              <Link to="/Videos">Videos</Link>
            </li>
          </ul>
        </nav>
      <Routes>
        <Route path="/" element={<Home />} />
     
        <Route path="/Comics" element={<Comics/>} />
        <Route path="/Characters" element={<Characters/>}/>
        <Route path="/Series" element={<Series/>} />
         <Route path="/Tvshows" element={<Tvshows/>} />
         <Route path="/Videos" element={<Videos/>} />
        
        </Routes>
    </div>
  );
}

export default App;