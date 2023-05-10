import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

//Import Pages
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'

//Import Components
import Header from './components/Header'
import SideBar from './components/Sidebar'
import Footer from './components/Footer'

const App = () => {
  return <div className='overflow-hidden'>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/product/:id' element={<ProductDetails />}></Route>
        <Route path='/' element={<Home />}></Route>

      </Routes>
      <SideBar/>
      <Footer/>
    </Router>
  </div>;
};

export default App;
