import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import Nav from "./Navbar";
import Profils from "./Profils";
import NewCalculator from "./NewCalculator";
import Api from "./Api";
import Todolist from "./Todolist";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";



function App() {
  return (
    <div>
      {/* Navigation */}
      <Nav/>

      {/* Déclaration des routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/profils" element={<Profils/>}/>
        <Route path="/newcalcul" element={<NewCalculator/>}/>
        <Route path="/api" element={<Api/>}/>
        <Route path="/todolist" element={<Todolist/>}/>
       <Route path="/compo1" element={<Comp1/>}/>
       <Route path="/compo2" element={<Comp2/>}/>
       <Route path="/compo3" element={<Comp3/>}/>
      </Routes>
    </div>
  );
}

export default App;
