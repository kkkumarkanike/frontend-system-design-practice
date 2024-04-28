import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-200">Hi there</div>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
