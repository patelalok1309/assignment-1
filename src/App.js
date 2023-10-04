import logo from './logo.svg';
import { Home } from './Components';
import { } from './context/stateProvider'
import { Route, Routes } from 'react-router-dom';
import Cardetail from './Components/Cardetail';
import Page from './Components/Page';
function App() {
  return (
    <div className="App container">

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/item/:id" element={<Cardetail />} /> 
          {/* <Route path="/page/:1" element={<Home />} /> */}
          <Route path="/page/:page" element={<Page />} />
        </Routes>

    </div>
  );
}

export default App;
