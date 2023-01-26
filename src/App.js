import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Moves from './components/Moves/Moves';
import Items from './components/Items/Items';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='moves' element={<Moves />} />
            <Route path='items' element={<Items />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
