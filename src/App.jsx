
import Cart from "./pages/Cart";
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import { About } from "./pages/About";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products"
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login"
function App() {
  

  return (
    <>
       <Navbar />

       <div>
          <Routes>
            
              <Route path="/" element={ < Homepage /> } />
              <Route path="products" element={ < Products /> } />
              <Route path="about" element={ < About /> } />
              <Route path="contact" element={ < Contact />}/>
              <Route path="login" element={ < Login />}/>
              <Route path="/cart" element={<Cart />} />

          </Routes>   
       </div>
    </>
  )
}

export default App
