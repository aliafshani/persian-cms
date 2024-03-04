import React from "react"
import Sidebar from './Components/Sidebar/Sidebar.js'
import "./App.css"
import Header from "./Components/header/Header.js";

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <div className="main">
      <Header/>
        {/* Routes */}
      </div>
    </div>
  );
}

export default App;
