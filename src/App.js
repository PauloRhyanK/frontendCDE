import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar/Navbar";
import Home from "./pages/Home";
import { useState } from "react";
import ComponentRender from "./components/ComponentRender";
import NewCiclo from "./components/NewCiclo";
import "@fontsource/montserrat";
function App() {
  const [tabs, setTabs] = useState([]);

  return (
    <>
      <Router>
        <div className="main">
          <Navbar pages={tabs} />
          <div>
            <NewCiclo setArray={setTabs} />
            <Routes>
              <Route path="/" element={<Home />} />

              <Route
                path={`/pages/:id`}
                element={<ComponentRender components={tabs} />}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
