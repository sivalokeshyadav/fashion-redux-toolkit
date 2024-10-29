import StorePage from './pages/StorePage';
import CartPage from './pages/CartPage'
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom';



function App() {

  return (
    <>
<BrowserRouter>
<Routes>
<Route path="/" element={<StorePage />} />
  <Route path="/store" element={<StorePage />} />
  <Route path="/cart" element={<CartPage />} />
  </Routes></BrowserRouter>
    </>
  )
}

export default App
