import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { data } from "./components/Data";
import './index.css';
import Backend from './components/Backend';
import Frontend from "./components/Frontend";
import Home from "./components/Home";


function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path='/backend' element={<Backend/>} />
            <Route path='/frontend' element={<Frontend data={data} />} />
            <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
    
  );
}

export default App;

