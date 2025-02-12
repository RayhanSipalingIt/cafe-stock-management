import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Home from "./Pages/Home";
import StockPage  from "./Pages/Stock";
import AddNewStock from "./Pages/AddNewStock";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Stock" element={<StockPage />} />
        <Route path="/addnewstock" element={<AddNewStock />} />
      </Routes>
    </Router>
  );
}

export default App;
