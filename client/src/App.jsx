import "./App.css";
import Navabar from "./components/navbar";
import Services from "./components/services";
import Transaction from "./components/Transaction";
import Welcome from "./components/welcome";

function App() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-welcome">
        <Navabar />
        <Welcome />
      </div>
      <Services />
      <Transaction />
    </div>
  );
}

export default App;
