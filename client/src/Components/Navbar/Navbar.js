import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FaRegHeart } from 'react-icons/fa';
import { GrCart } from 'react-icons/gr';
import { CgProfile } from "react-icons/cg";
import { auth } from '../Login/firebaseConfig'; // Firebase config file
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null); // State for tracking open category

  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    photo: ''
  });
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        fetchUserDetails(currentUser.uid);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      setSearchQuery('');
      setSuggestions([]);
    }
  }, [location]);

  const getImage = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/getImageById/${userId}`);
      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setImageSrc(url);
      } else {
        console.error('Failed to fetch image');
      }
    } catch (error) {
      console.error('Failed to get Image:', error);
    }
  };

  const fetchUserDetails = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/personal-details/${userId}`);
      const data = await response.json();
      if (response.ok) {
        setUserDetails({
          firstName: data.firstName,
          lastName: data.lastName,
          photo: data.photo || ''
        });
        getImage(userId);
      } else {
        console.error('Failed to fetch user details:', data);
      }
    } catch (error) {
      console.error('Failed to fetch user details:', error);
    }
  };

  const subcategories = {
      "Bedroom Sets": "/combos/bedroomsets",
      "Living Sets": "/combos/livingsets",
      "Dining Sets": "/combos/diningsets",
      "Sofas": "/living/sofas",
      "Curtains": "/living/curtains",
      "Teapoy": "/living/teapoys",
      "Carpets": "/living/carpets",
      "Cots": "/bedrooms/cots",
      "Mattress": "/bedrooms/mattress",
      "Dressing Units": "/bedrooms/dressingunits",
      "Blankets": "/bedrooms/blankets",
      "Pillows": "/bedrooms/pillows",
      "Dining Tables": "/dining/tables",
      "Crockery units": "/dining/crockery-units",
      "Desks": "/study-office/desks",
      "Office Chairs": "/study-office/office-chairs",
      "Bookcases": "/study-office/bookcases",
      "Reception Counters": "/study-office/reception-counters",
      "Hydraulic Beds":"/bedrooms/hydraulicbeds",
      "Normal Sofas":"/living/normalsofas",
      "Recliner":"/living/recliner",
      "LShapedSofas":"/living/lshapedsofa",
      "King Beds with Storage":"/bedrooms/kingstorage",
      "King Beds without Storage":"/bedrooms/kingbeds",
      "Queen Beds with Storage":"/bedrooms/queenstorage",
      "Queen Beds without Storage":"/bedrooms/queenbeds",
  };
  const subcategoriess = {
  "Combos": {
    "Bedroom Sets": "/combos/bedroomsets",
    "Living Sets": "/combos/livingsets",
    "Dining Sets": "/combos/diningsets"
  },
  "Living": {
    "Curtains": "/living/curtains",
    "Teapoy": "/living/teapoys",
    "Carpets": "/living/carpets",
    "Normal Sofas": "/living/normalsofas",
    "Recliner": "/living/recliner",
    "Sofa Cum Beds": "/living/sofacumbeds",
    "L Shaped Sofa": "/living/lshapedsofa"
    
  },
  "Bedrooms": {
    "Hydraulic Beds": "/bedrooms/hydraulicbeds",
     "King Beds With Storage": "/bedrooms/kingstorage",
    "King Beds Without Storage": "/bedrooms/kingbeds",
    "Queen Beds With Storage": "/bedrooms/queenstorage",
    "Queen Beds Without Storage": "/bedrooms/queenbeds",
    "Mattress": "/bedrooms/mattress",
    "Dressing Units": "/bedrooms/dressingunits",
    "Blankets": "/bedrooms/blankets",
    "Pillows": "/bedrooms/pillows"
  },
  "Dining": {
    "Dining Tables": "/dining/tables",
    "Crockery Units": "/dining/crockery-units"
  },
  "Study & Office": {
    "Desks": "/study-office/desks",
    "Office Chairs": "/study-office/office-chairs",
    "Bookcases": "/study-office/bookcases",
    "Reception Counters": "/study-office/reception-counters"
  }
  
};

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleCategoryClick = (category) => {
    if (openCategory === category) {
      setOpenCategory(null); // Close the subcategory if it's already open
    } else {
      setOpenCategory(category); // Open the selected subcategory
    }
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === '') {
      setSuggestions([]);
      return;
    }

    const matchedSubcategories = Object.keys(subcategories).filter(
      (subcategory) => subcategory.toLowerCase().includes(query.toLowerCase())
    );

    setSuggestions(matchedSubcategories);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSuggestions([]);
    setSearchQuery('');

    if (searchQuery.trim() === '') return;

    if (suggestions.length > 0) {
      navigate(subcategories[suggestions[0]]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    navigate(subcategories[suggestion]);
    setSearchQuery('');
    setSuggestions([]);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"> <img src="/images/logo4.png" alt="MyApp Logo" /></Link>
      </div>

      <form className="search-form" onSubmit={handleSearchSubmit}>
        <div className="search-input-container">
          <input
            type="text"
            placeholder="What are you looking for?"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit" className="search-button">
            <IoSearchOutline className='searchicon' />
          </button>
        </div>

        {suggestions.length > 0 && (
  <ul className="suggestions-list">
    {suggestions.map((suggestion) => (
      <li key={suggestion} onClick={() => handleSuggestionClick(suggestion)}>
        {suggestion}
      </li>
    ))}
  </ul>
)}
      </form>

      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li>
          <Link to="/wishlist" className="nav-item">
            <FaRegHeart className="icon1" />
            <span className='name'>Wishlist</span>
          </Link>
        </li>
        <li>
          <Link to="/cart" className="nav-item">
            <GrCart className="icon1" />
            <span className='name'>Cart</span>
          </Link>
        </li>
        <li>
          <Link to="/profile" className="nav-item">
            {user && userDetails.photo ? (
              <img
                src={imageSrc || '/images/default.png'} // Display fetched image or fallback
                alt="User Profile"
                className="profile-photo"
                onLoad={() => setIsLoading(false)}
                onError={(e) => {
                  e.target.src = '/images/default.png'; // Set fallback image on error
                  setIsLoading(false);
                }}
              />
            ) : (
              <CgProfile className="icon1" />
            )}
            <span className='name'>
              {user 
                ? userDetails.firstName && userDetails.lastName 
                  ? `${userDetails.firstName} ${userDetails.lastName}` 
                  : 'Profile' 
                : 'Login'}
            </span>
          </Link>
        </li>

        <li className="menu-icon" onClick={toggleMenu}>
         &#9776;
        </li>
        {isMenuOpen && (
          <div className="dropdown-menu">
          <button className="close-btn" onClick={toggleMenu}>&times;</button>

          {Object.keys(subcategoriess).map((category) => (
            <div className="dropdown-item" key={category}>
              <span onClick={() => handleCategoryClick(category)}>{category}</span>
              {openCategory === category && (
                <div className="dropdown-submenu">
                  {typeof subcategoriess[category] === 'object' ? (
                    Object.keys(subcategoriess[category]).map((subItem) => (
                      <div key={subItem} onClick={(e) => e.stopPropagation()}>
                        <Link to={subcategoriess[category][subItem]} onClick={() => setIsMenuOpen(false)}>
                          {subItem}
                        </Link>
                      </div>
                    ))
                  ) : (
                    <Link to={subcategories[category]} onClick={() => setIsMenuOpen(false)}>
                      {category}
                    </Link>
                  )}
                </div>
              )}
            </div>
          ))}
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
