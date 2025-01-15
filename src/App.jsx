import Home from "./Pages/Home/Home";
import { GlobalContext, GlobalProvider } from "./Context/GlobalState";
import Login from "./Pages/Login";

import {Routes, Route } from "react-router-dom";

function App() {
  return (
    <GlobalProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </GlobalProvider>
  );
}

export default App;

