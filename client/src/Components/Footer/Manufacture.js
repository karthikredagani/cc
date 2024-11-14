import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './Manufacture.css'; // Assuming you have a CSS file for styling

const Manufacture = () => {
  return (
    <div className="manufacture-container">
      <h1 className='h1'>Our Manufacturing Process</h1>
      <p className='p'>
        At Urban Comfort, we pride ourselves on crafting high-quality furniture that combines traditional craftsmanship with modern design. Our commitment to excellence ensures that every piece of furniture we produce is not only beautiful but also built to last.
      </p>

      <h3 className='h3'>Our Process</h3>
      <ol>
        <li>
          <strong>Design:</strong> Our team of skilled designers creates innovative and functional designs to meet the diverse needs of our customers.
        </li>
        <li>
          <strong>Materials Sourcing:</strong> We source only the finest materials, including premium hardwoods, sustainable plywood, and high-quality fabrics, ensuring durability and aesthetic appeal.
        </li>
        <li>
          <strong>Construction:</strong> Our skilled craftsmen utilize advanced techniques to assemble and finish each piece, ensuring that it meets our high standards.
        </li>
        <li>
          <strong>Quality Control:</strong> Each product undergoes rigorous quality checks to ensure it meets our exacting standards for durability and design.
        </li>
      </ol>

      <h3 className='h3'>Materials We Use</h3>
      <p className='p'>
        We believe in using materials that not only look great but also stand the test of time. Our selection includes:
      </p>
      <ul>
        <li>Solid Wood</li>
        <li>Engineered Wood</li>
        <li>High-Quality Upholstery Fabrics</li>
      </ul>

      <h3 className='h3'>Our Commitment to Quality</h3>
      <p className='p'>
        Every piece of furniture that leaves our factory is a testament to our dedication to quality. We adhere to strict quality standards and undergo regular inspections to ensure that our products are safe and reliable.
      </p>

      <h3 className='h3'>Sustainability</h3>
      <p className='p'>
        We are committed to environmentally friendly practices. Our manufacturing process prioritizes sustainability, utilizing eco-friendly materials and practices wherever possible.
      </p>

      <h3 className='h3'>Explore Our Collection</h3>
      <p className='p'>
        Discover the beautiful furniture pieces crafted with care and precision. Visit our <Link to="/">product page</Link> to explore our range.
      </p>
    </div>
  );
}

export default Manufacture;