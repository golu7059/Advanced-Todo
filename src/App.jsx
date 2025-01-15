import Navbar from "./components/Navbar";
import Home from "./Pages/Home/Home";
import { GlobalProvider } from "./Context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="">
        <Home />
      </div>
    </GlobalProvider>
  );
}

export default App;
