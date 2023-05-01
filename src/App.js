import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import ProductDetail from "./pages/ProductDetail";
function App() {
  return (
    <div className="">
        <BrowserRouter>
      <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products/:id" element={<ProductDetail/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
