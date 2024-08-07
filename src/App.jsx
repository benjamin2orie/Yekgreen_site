// import {react} from 'react';
import Home from "./Components/Landing_page/Home";
import Breakfast from "./Components/Recipe_Page/Breakfast";
import Dinner from "./Components/Recipe_Page/Dinner";
import Lunch from "./Components/Recipe_Page/Lunch";
import Blog from "./Components/Recipe_Page/Blog";
import Login from "./Components/Landing_page/Login";
import About from "./Components/Recipe_Page/About";
import Register from "./Components/Landing_page/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Home/> */}
      <Router>
        <Routes>
          <Route
            path="*"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route path="/breakfast" element={<Breakfast />} />
          <Route path="/lunch" element={<Lunch />} />
          <Route path="/login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/dinner" element={<Dinner />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
