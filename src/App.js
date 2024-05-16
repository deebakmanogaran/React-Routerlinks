// import logo from "./logo.svg";
// // import "./App.css";
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Home from "./home";
// import About from "./about";
// import Contact from "./contact";

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </BrowserRouter>

//     </div>
//   );
// }

// export default App;
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import User from "./user";
import Oldbook from "./oldbook";
import Newbook from "./newbook";
// import Dashboard from "./dashboard";
import Login from "./login";
import Dashboard from "./dashboard";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>
            <Link to="/user/1">user1</Link>
          </li>
          <li>
            <Link to="/user/2">user2</Link>
          </li>
          <li>
            <Link to="/book/oldbook">oldbook</Link>
          </li>
          <li>
            <Link to="/book/newbook">newbook</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
          
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/book">
            <Route path="oldbook" element={<Oldbook />} />
            <Route path="newbook" element={<Newbook />} />
          </Route>
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;