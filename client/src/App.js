import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Categories from './Components/Categories/Categories';
import Routing from './Components/Routing';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { CartProvider } from './Components/Cart/CartContext';
import ScrollToTop from './Components/HomePage/ScrollToTop';
import Chatbox from './Components/Chatbox/Chatbox';


function App() {
  return (
    <div className="App">
            <ScrollToTop />

         <CartProvider>
      <Navbar/>
      </CartProvider>
      <Categories />
      <CartProvider>
     <Routing />
     </CartProvider><br />
     <Footer />
<Chatbox />         
 </div>
  );
}
export default App;
