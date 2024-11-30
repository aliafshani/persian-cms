import React, { useState } from "react"
import Header from "./Components/header/Header.js";
import { useRoutes } from "react-router-dom"
import router from "./routes.js"
import Sidebar from './Components/Sidebar/Sidebar.js'
import "./App.css"
import data from "./Context/Context.js";
import ThemModal from "./Components/themModal/ThemModal.js";

function App() {
  const route = useRoutes(router)

  const [showThem, setShowThem] = useState(false)
  const [colors, setColors] = useState(["red", "blue", "gray", "green"])
  const [color, setColor] = useState('blue')
  return (
    <div className="App">

      <data.Provider value={{
        setShowThem,
        setColors,
        colors,
        color,
        setColor,

      }}
      >
        <Sidebar />
        <div className="main">
          <Header />
          {route}

        </div>
        {showThem ? <ThemModal /> : null}
      </data.Provider>
    </div>
  );
}

export default App;