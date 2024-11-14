import React from 'react';
import Product from './Product'; 
import './Product.css';

const Sofas = () => {
    const products = [
        {
            image: '../images/Living/Fabricsofas/1.jpeg',
            name: 'Product 1',
            price: '29,999',
          
        },
        {
            image: '../images/Living/Fabricsofas/2.jpeg',
            name: 'Product 2',
            price: '49,999',
         
        },
        {
            image: '../images/Living/Fabricsofas/4.jpeg',
            name: 'Product 4',
            price: '39,999',
          
        },
        {
            image: '../images/Living/Fabricsofas/5.jpeg',
            name: 'Product 5',
            price: '39,999',
          
        },
        {
            image: '../images/Living/Fabricsofas/6.jpeg',
            name: 'Product 6',
            price: '39,999',
         
        },
        {
            image: '../images/Living/Fabricsofas/3.jpeg',
            name: 'Product 3',
            price: '39,999',
         
        },
        {
            image: '../images/Living/Fabricsofas/8.jpeg',
            name: 'Product 8',
            price: '39,999',
         
        },
        {
            image: '../images/Living/Fabricsofas/9.jpeg',
            name: 'Product 9',
            price: '39,999',
         
        },
        {
            image: '../images/Living/Fabricsofas/10.jpeg',
            name: 'Product 10',
            price: '39,999',
         
        },
        {
            image: '../images/Living/Fabricsofas/11.jpeg',
            name: 'Product 11',
            price: '39,999',
         
        },
        {
            image: '../images/Living/Fabricsofas/12.jpeg',
            name: 'Product 12',
            price: '39,999',
         
        },
        {
            image: '../images/Living/Fabricsofas/7.jpeg',
            name: 'Product 7',
            price: '39,999',
         
        }

    ];

    return (
        <div className="sofas-container">
            <section className="products">
                {products.map((product, index) => (
                    <Product
                        key={index}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                        detailsLink={product.detailsLink}
                    />
                ))}
            </section>
        </div>
    );
};

export default Sofas;
