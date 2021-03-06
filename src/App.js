import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PAGE_NOT_FOUND from './component/pageNotFound';
import Home from './container/home';
import Product_list from './container/product-list';
import Product_details from './container/product-details';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product-list" element={<Product_list />} />
        <Route exact path="/product-details/:id" element={<Product_details />} />
        <Route path="*" element={<PAGE_NOT_FOUND />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;