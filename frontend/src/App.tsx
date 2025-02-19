import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import SignUpPage from "./pages/SignUpPage"
import LoginPage from "./pages/LoginPage"
import Navbar from "./components/Navbar"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"

const App = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navbar />
      <div className="pt-[70px]">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </div>
    </div>
  )
}

export default App
