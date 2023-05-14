import { Home } from "@mui/icons-material";
import "./App.css";
import Header from "./components/header";
import HeaderLogin from "./components/headerLogin";
import Films from "./pages/Films";
import Video from "./pages/video";
import { Routes } from "./routes";


function App() {
  return (
    <div className="App"> 
      <HeaderLogin />
      <div style={{ marginLeft: "170px" }}>
        <Routes/>
      </div>
    </div>
  );
}

export default App;
