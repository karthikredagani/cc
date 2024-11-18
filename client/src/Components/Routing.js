import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage.js';
// Living
import Curtains from './Living/Curtains.js';
import Teapoys from './Living/Teapoys.js';
import Carpets from './Living/Carpets.js';
// Dining
import DiningTables from './Dining/DiningTables.js';
import Crockeryunits from './Dining/Crockeryunits.js';
// Bedrooms
import Pillows from './Bedrooms/Pillows.js';
import Blankets from './Bedrooms/Blankets.js';
import DressingUnits from './Bedrooms/DressingUnits.js';
import Mattress from './Bedrooms/Mattress.js';

// Office
import Officechairs from './StudyOffice/Officechairs.js';
import Desks from './StudyOffice/Desks.js';
import Receptioncounters from './StudyOffice/Receptioncounters.js';
import Bookcases from './StudyOffice/Bookcases.js';
// Combos
import BedroomSets from './Combos/BedroomSets.js';
import DiningSets from './Combos/DiningSets.js';
import LivingSets from './Combos/LivingSets.js';


import Login from './Login/Login.js';
import Register from './Login/Register.js';
import PersonalDetails from './Login/PersonalDetails.js';

import ProductDetails from './HomePage/ProductDetails';
import Nopage from './Nopage/Nopage.js';
import { WishlistProvider } from './Wishlist/WishlistContext'; // Import WishlistProvider
import Cart from './Cart/Cart.js';
import Wishlist from './Wishlist/Wishlist.js'
import Hydraulicbeds from './Bedrooms/Hydraulicbeds.js';
import KingStorage from './Bedrooms/KingStorage.js';
import Kingbeds from './Bedrooms/Kingbeds.js';
import QueenStorage from './Bedrooms/QueenStorage.js';
import Queenbeds from './Bedrooms/Queenbeds.js';
import Sofacumbeds from './Living/Sofacumbeds.js';
import Lshapedsofa from './Living/Lshapedsofa.js';
import Recliner from './Living/Recliner.js';
import Normalsofas from './Living/Normalsofas.js';
import ContactUs from './Footer/ContactUs.js';
import WhatsappButton from './Footer/WhatsappButton.js';
import TermsandConditions from './Footer/TermsandConditions.js';
import Return from './Footer/Return.js';
import FAQ from './Footer/FAQ.js';
import UrbanComfort from './Footer/UrbanComfort.js';
import Manufacture from './Footer/Manufacture.js';
import Feedback from './Footer/Feedback.js';
import MovingofFurniture from './Footer/MovingofFurniture.js';
import RecycleProgram from './Footer/RecycleProgram.js';
import InstallationAndAssembly from './Footer/InstallationAndAssembly.js';
import ThreeDView from './ThreeDView.js';
import ARPage from './ARPage.js';
import Payment from './Cart/Payment.js';



const Routing = () => {
  return (
    <WishlistProvider>
    <div>
      <Routes>

      <Route path="/" element={<HomePage />} />
      
        <Route path="/living/normalsofas" element={<Normalsofas />} />
        <Route path="/living/sofacumbeds" element={<Sofacumbeds />} />
        <Route path="/living/lshapedsofa" element={<Lshapedsofa />} />
        <Route path="/living/recliner" element={<Recliner />} />
        <Route path="/living/teapoys" element={<Teapoys />} />
        <Route path="/living/carpets" element={<Carpets />} />
        <Route path="/living/curtains" element={<Curtains />} />

        <Route path="/dining/tables" element={<DiningTables />} />
        <Route path="/dining/crockery-units" element={<Crockeryunits />} />

        
        <Route path="/bedrooms/hydraulicbeds" element={<Hydraulicbeds />} />
        <Route path="/bedrooms/kingstorage" element={<KingStorage />} />
        <Route path="/bedrooms/kingbeds" element={<Kingbeds />} />
        <Route path="/bedrooms/queenstorage" element={<QueenStorage />} />
        <Route path="/bedrooms/queenbeds" element={<Queenbeds />} />



        <Route path="/bedrooms/pillows" element={< Pillows/>} />
        <Route path="/bedrooms/blankets" element={<Blankets />} />
        <Route path="/bedrooms/dressingunits" element={<DressingUnits />} />
        <Route path="/bedrooms/mattress" element={<Mattress />} />
        <Route path="/study-office/office-chairs" element={<Officechairs />} />
        <Route path="/study-office/desks" element={<Desks />} />
        <Route path="/study-office/reception-counters" element={<Receptioncounters />} />
        <Route path="/study-office/bookcases" element={<Bookcases />} />

        <Route path="/combos/bedroomsets" element={<BedroomSets />} />
        <Route path="/combos/diningsets" element={<DiningSets />} />
        <Route path="/combos/livingsets" element={<LivingSets />} />


        <Route path="/Profile" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/details' element={<PersonalDetails/>} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/*" element={<Nopage />} />

        <Route path="/cart" element={<Cart />} />
          
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/whatsapp" element={<WhatsappButton />} />
          <Route path="/termsandcondition" element={<TermsandConditions />} />
          <Route path="/return" element={<Return />} />
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/urban-comfort" element={<UrbanComfort />} />
          <Route path="/manufacturer" element={<Manufacture />} />
          <Route path="/feedback" element={<Feedback/>} />
          <Route path="/movingfurniture" element={<MovingofFurniture/>} />
          <Route path="/recycling" element={<RecycleProgram/>} />
          <Route path="/installationandassembly" element={<InstallationAndAssembly/>} />
          <Route path="/product/:productId/3dview" element={<ThreeDView />} /> {/* 3D view route */}
<Route path="/ar/:productId" element={<ARPage />} />
<Route path="/payment" element={<Payment />} />

      </Routes>
    </div>
    </WishlistProvider>


  )
}

export default Routing;