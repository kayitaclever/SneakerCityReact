import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';
import Layout from './components/core/Layout';
import HomePage from './components/pages/Home';
import Shop from './components/pages/Shop';
import ShoeDetails from './components/pages/SinglePage';
import Cart from './components/pages/Cart';
import PaymentPage from './components/pages/Payment'; 
import DeliveryPage from './components/pages/Delivery'; 
function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes> {}
            <Route path="/home" element={<HomePage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shoes/:id" element={<ShoeDetails />} />
            <Route path="/payment" element={<PaymentPage />} /> {}
            <Route path="/delivery" element={<DeliveryPage />} /> {}
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
