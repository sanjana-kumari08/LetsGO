import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route  } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
 import SignIn from './components/SignIn'
 import SignUp from './components/SignUp'
 import Home from './components/home/Home'
// import CopyHolder from './components/home/CopyHolder'
import Books1 from './components/books/Books1'
import Cate_1 from "./components/categories/Cate_1"
import ProductList from './components/ProductList'
import Cart from './components/home/Cart'
// import Cart from './components/home/Cart'
// import ProductList from './components/home/ProuctList';
// import Cart from "./Cart";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>

    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} /> Add Home component route
    <Route path="/books" element={<Books1 />} /> Add Home component route
    <Route path="/categories" element={<Cate_1 />} /> Add Home component route

    <Route path="/signin" element={<SignIn/>} />
    <Route path="/signup" element={<SignUp />} /> Add SignUp route
    <Route path="/cart" element={<Cart/>} />

    
    </Routes>
    {/* <CopyHolder/> */}


    </Router>
    {/* <ProductList/> */}
    {/* <Cart/> */}


    </>
  )
}

export default App
