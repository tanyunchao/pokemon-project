import NavigationBar from "./NavigationBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Login from "./Login";
import { useState } from "react";
import Signup from "./Signup";
import Home from "./Home";
import Catchnow from "./Catchnow";
import Pokedex from "./Pokedex";


//use state here, if token is null, conditionally dont show anything 
function App() {
  const [token, setToken] = useState(null);
  const [authenticated, setAuthenticated] = useState(true);

  return (
    <Router>
      <div className="App">
        {!authenticated && 

          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path='/*' element={<Login auth={setAuthenticated} tokensetter={setToken}/>} />
          </Routes>
        }

        {authenticated && 
        
          <div className="mainpage">
            <NavigationBar />
            <Routes>
              <Route path='catchnow' element={<Catchnow />} />
              <Route path='pokedex' element={<Pokedex />} />

              <Route path='/*' element={<Home />} />
            </Routes>  
          </div>
        
        }
      </div>
    </Router>
  );
}

export default App;
