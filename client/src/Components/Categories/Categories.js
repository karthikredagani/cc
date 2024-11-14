import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

export default function Categories() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='container11'>
      <button className='hamburger' onClick={toggleMenu}>
        &#9776; {/* This is the hamburger icon */}
      </button>
      <ul className={`categories-list ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <div className='cat'>Combos</div>
          <ul className='subcategories-list'>
            <li><Link to="/combos/bedroomsets">Bedroom Sets</Link></li>
            <li><Link to="/combos/livingsets">Living Sets</Link></li>
            <li><Link to="/combos/diningsets">Dining Sets</Link></li>
          </ul>
        </li>
        <li>
          <div className='cat'>Living</div>
          <ul className='subcategories-list'>
            <li><Link to="/living/curtains">Curtains</Link></li>
            <li><Link to="/living/teapoys">Teapoy</Link></li>
            <li><Link to="/living/carpets">Carpets</Link></li><hr />
            <li><h5>Sofas</h5></li>
            <li><Link to="/living/normalsofas">Normal Sofas</Link></li>
            <li><Link to="/living/sofacumbeds">Sofa Cum Beds</Link></li>
            <li><Link to="/living/recliner">Recliner</Link></li>
            <li><Link to="/living/lshapedsofa">L Shaped Sofa</Link></li>
          </ul>
        </li>
        <li>
          <div className='cat'>Bedrooms</div>
          <ul className='subcategories-list'>
            <li><h5>Beds</h5></li>
            <li><Link to="/bedrooms/hydraulicbeds">Hydraulic Beds</Link></li>
            <li><Link to="/bedrooms/kingstorage">King Beds with Storage</Link></li>
            <li><Link to="/bedrooms/kingbeds">King Beds without Storage</Link></li>
            <li><Link to="/bedrooms/queenstorage">Queen Beds with Storage</Link></li>
            <li><Link to="/bedrooms/queenbeds">Queen Beds without Storage</Link></li><hr />
            <li><Link to="/bedrooms/mattress">Mattress</Link></li>
            <li><Link to="/bedrooms/dressingunits">Dressing Units</Link></li>
            <li><Link to="/bedrooms/blankets">Blankets</Link></li>
            <li><Link to="/bedrooms/pillows">Pillows</Link></li>
          </ul>
        </li>
        <li>
          <div className='cat'>Dining</div>
          <ul className='subcategories-list'>
            <li><Link to="/dining/tables">Dining Tables</Link></li>
            <li><Link to="/dining/crockery-units">Crockery units</Link></li>
          </ul>
        </li>
        <li>
          <div className='cat'>Study & Office</div>
          <ul className='subcategories-list'>
            <li><Link to="/study-office/desks">Desks</Link></li>
            <li><Link to="/study-office/office-chairs">Office Chairs</Link></li>
            <li><Link to="/study-office/bookcases">Bookcases</Link></li>
            <li><Link to="/study-office/reception-counters">Reception Counters</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  );
}