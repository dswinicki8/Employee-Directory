import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <Nav>
        <EmployeeList>
          <Employee></Employee>
        </EmployeeList>
        <Search>
          <SearchResult></SearchResult>
        </Search>
      </Nav>
    </div>
  );
}

export default App;
