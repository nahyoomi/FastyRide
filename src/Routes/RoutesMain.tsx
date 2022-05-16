import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "../Pages/About/About"
import Details from "../Pages/Details/Details"
import Favorites from "../Pages/Favorites/Favorites"
import Home from "../Pages/Home/Home"



function RoutesMain() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/details/:id" element={<Details />}/>
        <Route path="/myfavorites" element={<Favorites />}/>
        {/* <Route path="*" element={<NotFound/>}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesMain