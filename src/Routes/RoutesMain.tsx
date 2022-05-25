import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "../Pages/About/About"
import Details from "../Pages/Details/Details"
import Favorites from "../Pages/Favorites/Favorites"
import Home from "../Pages/Home/Home"
import Nofound from "../Pages/NotFound/NotFound"



function RoutesMain() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/details/:id" element={<Details />}/>
        <Route path="/myfavorites" element={<Favorites />}/>
        <Route path="*" element={<Nofound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesMain