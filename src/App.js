import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <div className="">
        <BrowserRouter>
      <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
