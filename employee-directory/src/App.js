import React from "react";
import Nav from "./components/nav";
import SearchEmployee from './components/searchEmployee';
import "./App.css";

function App() {
  return (
    <div>
      <Nav>

       <SearchEmployee/>
      </Nav>
    </div>
  );
}

export default App;
