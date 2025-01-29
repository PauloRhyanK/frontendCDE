import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar/Navbar";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import { useState } from "react";
import ComponentRender from "./components/ComponentRender";
import NewCiclo from "./components/NewCiclo";

function App() {
  const [tabs, setTabs] = useState([]);

  return (
    <>
      <NewCiclo setArray={setTabs} />
      <Router>
        <Navbar pages={tabs} />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path={`/pages/:id`}
            element={<ComponentRender components={tabs} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
