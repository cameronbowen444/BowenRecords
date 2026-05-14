import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import ScrollToTop from "./components/ScrollToTop";
import HomePage from './pages/HomePage'
import RecordDetailsPage from "./pages/RecordDetailsPage";
import Footer from "./components/Footer";
import ShopPage from "./pages/ShopPage";
import NewArrivalsPage from "./pages/NewArrivalsPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/records" element={<ShopPage />} />
        <Route path="/product/:id" element={<RecordDetailsPage />} />
        <Route path="/new-arrivals" element={<NewArrivalsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
