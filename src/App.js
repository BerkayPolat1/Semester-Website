import { BrowserRouter, Routes, Route } from "react-router-dom";
import Frontend from "./components/Frontend";
import Backend from "./components/Backend";
import Home from "./components/Home";
import SharedLayout from "./components/SharedLayout.js";
import HomeDown from "./components/HomeDown";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="backend" element={<Backend />} />
          <Route path="frontend" element={<Frontend />} />
        </Route>
      </Routes>
      {/* <footer> our Footer </footer> */}
    </BrowserRouter>
  );
}

export default App;
