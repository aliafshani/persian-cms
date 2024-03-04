import React from "react"
import Header from "./Components/header/Header.js";
import {  useRoutes } from "react-router-dom"
import router from "./routes.js"
import Sidebar from './Components/Sidebar/Sidebar.js'
import "./App.css"


function App() {
  const route = useRoutes(router)
  return (
    <div className="App">
      <Sidebar />
      <div className="main">
        <Header />
        {route}
        
      </div>
    </div>
  );
}

export default App;