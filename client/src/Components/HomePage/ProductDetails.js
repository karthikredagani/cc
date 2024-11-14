import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../Cart/CartContext';
import { useWishlist } from '../Wishlist/WishlistContext';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { IoShareSocialSharp } from 'react-icons/io5';
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import './ProductDetails.css';
const ProductDetails = () => {
const { productId } = useParams();
const { addToCart } = useCart();
const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();
const navigate = useNavigate();
const products = [
{
id: '1',
name: 'Modern Sofa',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Gray: '/images/base1.jpg',
Yellow: '/images/bc1.jpeg',
},
colors: { Gray: '#808080', Yellow: '#FFFF00'},
glbFile: '/images/base1.glb',
},
{
id: '2',
name: 'Product 2',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
price: '49999',
images: {
Red: '/images/base2.jpg',
Blue: '/images/bc2.jpeg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/base2.glb',
},
{
id: '3',
name: 'Corner Sofa',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
price: '49999',
images: {
Red: '/images/base3.jpg',
Blue: '/images/bc3.jpeg',
},
colors: { Red: '#333333', Blue: '#3c4d03' },
glbFile: '/images/base3.glb',
},
{
id: '4',
name: 'Product 4',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.', 
price: '49999',
images: {
Red: '/images/base4.jpg',
Blue: '/images/bc4.jpeg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/base4.glb',
},
{
id: '5',
name: 'Product 5',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
price: '49999',
images: {
Red: '/images/base5.jpg',
Blue: '/images/bc5.jpeg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/base5.glb',
},
{
id: '6',
name: 'Product 6',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
price: '49999',
images: {
Red: '/images/base6.jpg',
Blue: '/images/bc6.jpeg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/base6.glb',
},
{
id: '7',
name: 'Product 7',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
price: '49999',
images: {
Red: '/images/base7.jpg',
Blue: '/images/bc7.jpeg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/base7.glb',
},
{
id: '8',
name: 'Product 8',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
price: '49999',
images: {
Red: '/images/base8.jpg',
Blue: '/images/bc8.jpeg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/base8.glb',
},
{
id: '9',
name: 'Product 9',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
price: '49999',
images: {
Red: '/images/base9.jpg',
Blue: '/images/bc9.jpeg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/base9.glb',
},
{
id: '10',
name: 'Product 10',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
price: '49999',
images: {
Red: '/images/base10.jpg',
Blue: '/images/bc10.jpeg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/base10.glb',
},
{
id: '11',
name: 'Product 11',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
price: '49999',
images: {
Red: '/images/base11.jpg',
Blue: '/images/bc11.jpeg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/base11.glb',
},
{
id: '12',
name: 'Product 12',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
price: '49999',
images: {
Red: '/images/base12.jpg',
Blue: '/images/bc12.jpeg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/base12.glb',
},
{
id: '13',
name: 'Product 13',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',           
price: '49999',
images: {
Red: '/images/base13.jpg',
Blue: '/images/bc13.jpeg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/base13.glb',
},
{
id: '14',
name: 'Product 14',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
price: '49999',
images: {
Red: '/images/base14.jpg',
Blue: '/images/bc14.jpeg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/base14.glb',
},
{
id: '15',
name: 'Product 15',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '/images/base15.jpg',
Blue: '/images/bc15.jpeg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/base15.glb',
},
{
id: '16',
name: 'Product 16',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '/images/base16.jpg',
Blue: '/images/bc16.jpeg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/16.glb',
},
{
id: '17',
name: 'Product 17',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Combos/Bedroomsets/bs1.jpg',
Blue: '../images/Combos/Bedroomsets/bs2.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '18',
name: 'Product 18',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Combos/Bedroomsets/bs2.jpg',
Blue: '../images/Combos/Bedroomsets/bs3.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '19',
name: 'Product 19',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Combos/Bedroomsets/bs3.jpg',
Blue: '../images/Combos/Bedroomsets/bs4.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '20',
name: 'Product 20',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Combos/Bedroomsets/bs4.jpg',
Blue: '../images/Combos/Bedroomsets/bs5.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '21',
name: 'Product 20',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Combos/Bedroomsets/bs5.jpg',
Blue: '../images/Combos/Bedroomsets/bs6.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '22',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Combos/Bedroomsets/bs6.jpg',
Blue: '../images/Combos/Bedroomsets/bs7.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '23',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Combos/Bedroomsets/bs7.jpg',
Blue: '../images/Combos/Bedroomsets/bs8.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '24',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Combos/Bedroomsets/bs8.jpg',
Blue: '../images/Combos/Bedroomsets/bs9.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '25',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Combos/Bedroomsets/bs9.jpg',
Blue: '../images/Combos/Bedroomsets/bs10.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '26',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Combos/Bedroomsets/bs10.jpg',
Blue: '../images/Combos/Bedroomsets/bs11.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '27',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Combos/Bedroomsets/bs11.jpg',
Blue: '../images/Combos/Bedroomsets/bs12.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '28',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Combos/Bedroomsets/bs12.jpg',
Blue: '../images/Combos/Bedroomsets/bs1.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '29',
name: 'Product 19',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Combos/Diningsets/1.jpg',
Blue: '../images/Combos/Diningsets/2.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '30',
name: 'Product 20',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Combos/Diningsets/2.jpg',
Blue: '../images/Combos/Diningsets/3.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '31',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Combos/Diningsets/3.jpg',
Blue: '../images/Combos/Diningsets/4.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '32',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Combos/Diningsets/4.jpg',
Blue: '../images/Combos/Diningsets/5.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '33',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Combos/Diningsets/5.jpg',
Blue: '../images/Combos/Diningsets/6.jpg',},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '34',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Combos/Diningsets/6.jpg',
Blue: '../images/Combos/Diningsets/7.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '35',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Combos/Diningsets/7.jpg',
Blue: '../images/Combos/Diningsets/8.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '36',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Combos/Diningsets/8.jpg',
Blue: '../images/Combos/Diningsets/9.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '37',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Combos/Diningsets/9.jpg',
Blue: '../images/Combos/Diningsets/10.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '38',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Combos/Diningsets/10.jpg',
Blue: '../images/Combos/Diningsets/11.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '39',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Combos/Diningsets/11.jpg',
Blue: '../images/Combos/Diningsets/12.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '40',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Combos/Diningsets/12.jpg',
Blue: '../images/Combos/Diningsets/1.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '41',
name: 'Product 19',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Combos/Livingsets/ss1.jpg',
Blue: '../images/Combos/Livingsets/ss2.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '42',
name: 'Product 20',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Combos/Livingsets/ss2.jpg',
Blue: '../images/Combos/Livingsets/ss3.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '43',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Combos/Livingsets/ss3.jpg',
Blue: '../images/Combos/Livingsets/ss4.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '44',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Combos/Livingsets/ss4.jpg',
Blue: '../images/Combos/Livingsets/ss5.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '45',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Combos/Livingsets/ss5.jpg',
Blue: '../images/Combos/Livingsets/ss6.jpg',},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '46',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Combos/Livingsets/ss6.jpg',
Blue: '../images/Combos/Livingsets/ss7.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '47',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Combos/Livingsets/ss7.jpg',
Blue: '../images/Combos/Livingsets/ss8.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '48',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Combos/Livingsets/ss8.jpg',
Blue: '../images/Combos/Livingsets/ss9.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '49',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Combos/Livingsets/ss9.jpg',
Blue: '../images/Combos/Livingsets/ss10.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '50',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Combos/Livingsets/ss10.jpg',
Blue: '../images/Combos/Livingsets/ss11.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '51',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Combos/Livingsets/ss11.jpg',
Blue: '../images/Combos/Livingsets/ss12.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '52',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Combos/Livingsets/ss12.jpg',
Blue: '../images/Combos/Livingsets/ss1.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '53',
name: 'Product 19',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Leathersofas/cu1.jpg',
Blue: '../images/Living/Leathersofas/cu2.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '54',
name: 'Product 20',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Leathersofas/cu2.jpg',
Blue: '../images/Living/Leathersofas/cu3.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '55',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Leathersofas/cu3.jpg',
Blue: '../images/Living/Leathersofas/cu4.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '56',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Leathersofas/cu4.jpg',
Blue: '../images/Living/Leathersofas/cu5.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '57',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Leathersofas/cu5.jpg',
Blue: '../images/Living/Leathersofas/cu6.jpg',},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '58',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Leathersofas/cu6.jpg',
Blue: '../images/Living/Leathersofas/cu7.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '59',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Leathersofas/cu7.jpg',
Blue: '../images/Living/Leathersofas/cu8.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '60',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Leathersofas/cu8.jpg',
Blue: '../images/Living/Leathersofas/cu9.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '61',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Leathersofas/cu9.jpg',
Blue: '../images/Living/Leathersofas/cu10.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '62',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Leathersofas/cu10.jpg',
Blue: '../images/Living/Leathersofas/cu11.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '63',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Leathersofas/cu11.jpg',
Blue: '../images/Living/Leathersofas/cu12.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '64',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Leathersofas/cu12.jpg',
Blue: '../images/Living/Leathersofas/cu1.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '65',
name: 'Product 19',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Cornersofas/t1.png',
Blue: '../images/Living/Cornersofas/t2.png',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '66',
name: 'Product 20',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Cornersofas/t2.png',
Blue: '../images/Living/Cornersofas/t3.png',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '67',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Cornersofas/t3.png',
Blue: '../images/Living/Cornersofas/t4.png',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '68',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Cornersofas/t4.png',
Blue: '../images/Living/Cornersofas/t5.png',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '69',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Cornersofas/t5.png',
Blue: '../images/Living/Cornersofas/t6.png',},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '70',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Cornersofas/t6.png',
Blue: '../images/Living/Cornersofas/t7.png',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '71',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Cornersofas/t7.png',
Blue: '../images/Living/Cornersofas/t8.png',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '72',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Cornersofas/t8.png',
Blue: '../images/Living/Cornersofas/t9.png',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '73',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Cornersofas/t9.png',
Blue: '../images/Living/Cornersofas/t10.png',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '74',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Cornersofas/t10.png',
Blue: '../images/Living/Cornersofas/t11.png',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '75',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Cornersofas/t11.png',
Blue: '../images/Living/Cornersofas/t12.png',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '76',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Cornersofas/t12.png',
Blue: '../images/Living/Cornersofas/t1.png',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '77',
name: 'Product 19',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Woodensofas/c1.jpg',
Blue: '../images/Living/Woodensofas/c2.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '78',
name: 'Product 20',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Woodensofas/c2.jpg',
Blue: '../images/Living/Woodensofas/c3.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '79',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Woodensofas/c3.jpg',
Blue: '../images/Living/Woodensofas/c4.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '80',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Woodensofas/c4.jpg',
Blue: '../images/Living/Woodensofas/c5.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '81',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Woodensofas/c5.jpg',
Blue: '../images/Living/Woodensofas/c6.jpg',},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '82',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Woodensofas/c6.jpg',
Blue: '../images/Living/Woodensofas/c7.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '83',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Woodensofas/c7.jpg',
Blue: '../images/Living/Woodensofas/c8.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '84',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Woodensofas/c8.jpg',
Blue: '../images/Living/Woodensofas/c9.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '85',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Woodensofas/c9.jpg',
Blue: '../images/Living/Woodensofas/c10.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '86',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Woodensofas/c10.jpg',
Blue: '../images/Living/Woodensofas/c11.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '87',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Woodensofas/c11.jpg',
Blue: '../images/Living/Woodensofas/c12.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '88',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Woodensofas/c1.jpg',
Blue: '../images/Living/Woodensofas/c2.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '89',
name: 'Product 19',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Fabricsofas/1.jpeg',
Blue: '../images/Living/Fabricsofas/2.jpeg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '90',
name: 'Product 20',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Fabricsofas/2.jpeg',
Blue: '../images/Living/Fabricsofas/3.jpeg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '91',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Fabricsofas/3.jpeg',
Blue: '../images/Living/Fabricsofas/4.jpeg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '92',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Fabricsofas/4.jpeg',
Blue: '../images/Living/Fabricsofas/5.jpeg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '93',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Fabricsofas/5.jpeg',
Blue: '../images/Living/Fabricsofas/6.jpeg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '94',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Fabricsofas/6.jpeg',
Blue: '../images/Living/Fabricsofas/7.jpeg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '95',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Fabricsofas/7.jpeg',
Blue: '../images/Living/Fabricsofas/8.jpeg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '96',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Fabricsofas/8.jpeg',
Blue: '../images/Living/Fabricsofas/9.jpeg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '97',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Fabricsofas/9.jpeg',
Blue: '../images/Living/Fabricsofas/10.jpeg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '98',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Fabricsofas/10.jpeg',
Blue: '../images/Living/Fabricsofas/11.jpeg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '99',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Fabricsofas/11.jpeg',
Blue: '../images/Living/Fabricsofas/12.jpeg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '100',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Fabricsofas/12.jpeg',
Blue: '../images/Living/Fabricsofas/1.jpeg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '101',
name: 'Product 19',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Sofacumbeds/sb1.jpg',
Blue: '../images/Living/Sofacumbeds/sb2.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '102',
name: 'Product 20',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Sofacumbeds/sb2.jpg',
Blue: '../images/Living/Sofacumbeds/sb3.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '103',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Sofacumbeds/sb3.jpg',
Blue: '../images/Living/Sofacumbeds/sb4.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '104',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Sofacumbeds/sb4.jpg',
Blue: '../images/Living/Sofacumbeds/sb5.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '105',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Sofacumbeds/sb5.jpg',
Blue: '../images/Living/Sofacumbeds/sb6.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '106',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Sofacumbeds/sb6.jpg',
Blue: '../images/Living/Sofacumbeds/sb7.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '107',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Sofacumbeds/sb7.jpg',
Blue: '../images/Living/Sofacumbeds/sb8.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '108',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Sofacumbeds/sb8.jpg',
Blue: '../images/Living/Sofacumbeds/sb9.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '109',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Sofacumbeds/sb9.jpg',
Blue: '../images/Living/Sofacumbeds/sb10.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '110',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Sofacumbeds/sb10.jpg',
Blue: '../images/Living/Sofacumbeds/sb11.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '111',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Sofacumbeds/sb11.jpg',
Blue: '../images/Living/Sofacumbeds/sb12.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '112',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Sofacumbeds/sb12.jpg',
Blue: '../images/Living/Sofacumbeds/sb1.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '113',
name: 'Product 19',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Recliner/r1.jpg',
Blue: '../images/Living/Recliner/r2.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '114',
name: 'Product 20',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Recliner/r2.jpg',
Blue: '../images/Living/Recliner/r3.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '115',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Recliner/r3.jpg',
Blue: '../images/Living/Recliner/r4.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '116',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Recliner/r4.jpg',
Blue: '../images/Living/Recliner/r5.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '117',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Recliner/r5.jpg',
Blue: '../images/Living/Recliner/r6.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '118',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Recliner/r6.jpg',
Blue: '../images/Living/Recliner/r7.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '119',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Recliner/r7.jpg',
Blue: '../images/Living/Recliner/r8.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '120',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Recliner/r8.jpg',
Blue: '../images/Living/Recliner/r9.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '121',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Recliner/r9.jpg',
Blue: '../images/Living/Recliner/r10.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '122',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Recliner/r10.jpg',
Blue: '../images/Living/Recliner/r11.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '123',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Recliner/r11.jpg',
Blue: '../images/Living/Recliner/r12.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '124',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Recliner/r12.jpg',
Blue: '../images/Living/Recliner/r1.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '125',
name: 'Product 19',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Lshapedsofa/ls1.jpg',
Blue: '../images/Living/Lshapedsofa/ls2.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '126',
name: 'Product 20',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Lshapedsofa/ls2.jpg',
Blue: '../images/Living/Lshapedsofa/ls3.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '127',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Lshapedsofa/ls3.jpg',
Blue: '../images/Living/Lshapedsofa/ls4.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '128',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Lshapedsofa/ls4.jpg',
Blue: '../images/Living/Lshapedsofa/ls5.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '129',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Lshapedsofa/ls5.jpg',
Blue: '../images/Living/Lshapedsofa/ls6.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '130',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Lshapedsofa/ls6.jpg',
Blue: '../images/Living/Lshapedsofa/ls7.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '131',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Lshapedsofa/ls7.jpg',
Blue: '../images/Living/Lshapedsofa/ls8.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '132',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Lshapedsofa/ls8.jpg',
Blue: '../images/Living/Lshapedsofa/ls9.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '133',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Lshapedsofa/ls9.jpg',
Blue: '../images/Living/Lshapedsofa/ls10.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '134',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Lshapedsofa/ls10.jpg',
Blue: '../images/Living/Lshapedsofa/ls11.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '135',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Lshapedsofa/ls11.jpg',
Blue: '../images/Living/Lshapedsofa/ls12.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '136',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Living/Lshapedsofa/ls12.jpg',
Blue: '../images/Living/Lshapedsofa/ls1.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '137',
name: 'Product 19',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Hydraulicbeds/hc1.jpg',
Blue: '../images/Bedrooms/Hydraulicbeds/hc2.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '138',
name: 'Product 20',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Hydraulicbeds/hc2.jpg',
Blue: '../images/Bedrooms/Hydraulicbeds/hc3.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '139',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Hydraulicbeds/hc3.jpg',
Blue: '../images/Bedrooms/Hydraulicbeds/hc4.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '140',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Hydraulicbeds/hc4.jpg',
Blue: '../images/Bedrooms/Hydraulicbeds/hc5.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '141',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Hydraulicbeds/hc5.jpg',
Blue: '../images/Bedrooms/Hydraulicbeds/hc6.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '142',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Hydraulicbeds/hc6.jpg',
Blue: '../images/Bedrooms/Hydraulicbeds/hc7.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '143',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Hydraulicbeds/hc7.jpg',
Blue: '../images/Bedrooms/Hydraulicbeds/hc8.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '144',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Hydraulicbeds/hc8.jpg',
Blue: '../images/Bedrooms/Hydraulicbeds/hc9.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '145',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Hydraulicbeds/hc9.jpg',
Blue: '../images/Bedrooms/Hydraulicbeds/hc10.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '146',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Hydraulicbeds/hc10.jpg',
Blue: '../images/Bedrooms/Hydraulicbeds/hc11.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '147',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Hydraulicbeds/hc11.jpg',
Blue: '../images/Bedrooms/Hydraulicbeds/hc12.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '148',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Hydraulicbeds/hc12.jpg',
Blue: '../images/Bedrooms/Hydraulicbeds/hc1.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
}, 
{
id: '149',
name: 'Product 19',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Kingbeds/kb1.jpg',
Blue: '../images/Bedrooms/Kingbeds/kb2.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '150',
name: 'Product 20',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Kingbeds/kb2.jpg',
Blue: '../images/Bedrooms/Kingbeds/kb3.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '151',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Kingbeds/kb3.jpg',
Blue: '../images/Bedrooms/Kingbeds/kb4.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '152',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Kingbeds/kb4.jpg',
Blue: '../images/Bedrooms/Kingbeds/kb5.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '153',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Kingbeds/kb5.jpg',
Blue: '../images/Bedrooms/Kingbeds/kb6.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '154',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Kingbeds/kb6.jpg',
Blue: '../images/Bedrooms/Kingbeds/kb7.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '155',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Kingbeds/kb7.jpg',
Blue: '../images/Bedrooms/Kingbeds/kb8.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '156',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Kingbeds/kb8.jpg',
Blue: '../images/Bedrooms/Kingbeds/kb9.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '157',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Kingbeds/kb9.jpg',
Blue: '../images/Bedrooms/Kingbeds/kb10.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '158',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Kingbeds/kb10.jpg',
Blue: '../images/Bedrooms/Kingbeds/kb11.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '159',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Kingbeds/kb11.jpg',
Blue: '../images/Bedrooms/Kingbeds/kb12.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '160',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Kingbeds/kb12.jpg',
Blue: '../images/Bedrooms/Kingbeds/kb1.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '161',
name: 'Product 19',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/KingStorage/ks1.jpg',
Blue: '../images/Bedrooms/KingStorage/ks2.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '162',
name: 'Product 20',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/KingStorage/ks2.jpg',
Blue: '../images/Bedrooms/KingStorage/ks3.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '163',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/KingStorage/ks3.jpg',
Blue: '../images/Bedrooms/KingStorage/ks4.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '164',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/KingStorage/ks4.jpg',
Blue: '../images/Bedrooms/KingStorage/ks5.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '165',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/KingStorage/ks5.jpg',
Blue: '../images/Bedrooms/KingStorage/ks6.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '166',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/KingStorage/ks6.jpg',
Blue: '../images/Bedrooms/KingStorage/ks7.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '167',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/KingStorage/ks7.jpg',
Blue: '../images/Bedrooms/KingStorage/ks8.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '168',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/KingStorage/ks8.jpg',
Blue: '../images/Bedrooms/KingStorage/ks9.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '169',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/KingStorage/ks9.jpg',
Blue: '../images/Bedrooms/KingStorage/ks10.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '170',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/KingStorage/ks10.jpg',
Blue: '../images/Bedrooms/KingStorage/ks11.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '171',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/KingStorage/ks11.jpg',
Blue: '../images/Bedrooms/KingStorage/ks12.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '172',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/KingStorage/ks12.jpg',
Blue: '../images/Bedrooms/KingStorage/ks1.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '173',
name: 'Product 19',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/QueenStorage/qs1.jpg',
Blue: '../images/Bedrooms/QueenStorage/qs2.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '174',
name: 'Product 20',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/QueenStorage/qs2.jpg',
Blue: '../images/Bedrooms/QueenStorage/qs3.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '175',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/QueenStorage/qs3.jpg',
Blue: '../images/Bedrooms/QueenStorage/qs4.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '176',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/QueenStorage/qs4.jpg',
Blue: '../images/Bedrooms/QueenStorage/qs5.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '177',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/QueenStorage/qs5.jpg',
Blue: '../images/Bedrooms/QueenStorage/qs6.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '178',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/QueenStorage/qs6.jpg',
Blue: '../images/Bedrooms/QueenStorage/qs7.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '179',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/QueenStorage/qs7.jpg',
Blue: '../images/Bedrooms/QueenStorage/qs8.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '180',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/QueenStorage/qs8.jpg',
Blue: '../images/Bedrooms/QueenStorage/qs9.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '181',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/QueenStorage/qs9.jpg',
Blue: '../images/Bedrooms/QueenStorage/qs10.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '182',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/QueenStorage/qs10.jpg',
Blue: '../images/Bedrooms/QueenStorage/qs11.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '183',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/QueenStorage/qs11.jpg',
Blue: '../images/Bedrooms/QueenStorage/qs12.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '184',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/QueenStorage/qs12.jpg',
Blue: '../images/Bedrooms/QueenStorage/qs1.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '185',
name: 'Product 19',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Queenbeds/qb1.jpg',
Blue: '../images/Bedrooms/Queenbeds/qb2.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '186',
name: 'Product 20',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Queenbeds/qb2.jpg',
Blue: '../images/Bedrooms/Queenbeds/qb3.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '187',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Queenbeds/qb3.jpg',
Blue: '../images/Bedrooms/Queenbeds/qb4.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '188',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Queenbeds/qb4.jpg',
Blue: '../images/Bedrooms/Queenbeds/qb5.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '189',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Queenbeds/qb5.jpg',
Blue: '../images/Bedrooms/Queenbeds/qb6.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '190',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Queenbeds/qb6.jpg',
Blue: '../images/Bedrooms/Queenbeds/qb7.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '191',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Queenbeds/qb7.jpg',
Blue: '../images/Bedrooms/Queenbeds/qb8.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '192',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Queenbeds/qb8.jpg',
Blue: '../images/Bedrooms/Queenbeds/qb9.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '193',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Queenbeds/qb9.jpg',
Blue: '../images/Bedrooms/Queenbeds/qb10.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '194',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Queenbeds/qb10.jpg',
Blue: '../images/Bedrooms/Queenbeds/qb11.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '195',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Queenbeds/qb11.jpg',
Blue: '../images/Bedrooms/Queenbeds/qb12.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '196',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Queenbeds/qb12.jpg',
Blue: '../images/Bedrooms/Queenbeds/qb1.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
}, 
{
id: '197',
name: 'Modern Sofa',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Gray: '../images/Bedrooms/Mattress/m1.jpg',
Yellow: '../images/Bedrooms/Mattress/m2.jpg',
},
colors: { Gray: '#808080', Yellow: '#FFFF00'},
glbFile: '/images/base1.glb',
},
{
id: '198',
name: 'Product 2',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
price: '49999',
images: {
Red: '../images/Bedrooms/Mattress/m2.jpg',
Blue: '../images/Bedrooms/Mattress/m3.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/base2.glb',
},
{
id: '199',
name: 'Corner Sofa',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
price: '49999',
images: {
Red: '../images/Bedrooms/Mattress/m3.jpg',
Blue: '../images/Bedrooms/Mattress/m4.jpg',
},
colors: { Red: '#333333', Blue: '#3c4d03' },
glbFile: '/images/base3.glb',
},
{
id: '200',
name: 'Product 4',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.', 
price: '49999',
images: {
Red: '../images/Bedrooms/Mattress/m4.jpg',
Blue: '../images/Bedrooms/Mattress/m5.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/base4.glb',
},
{
id: '201',
name: 'Progduct 5',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
price: '49999',
images: {
Red: '../images/Bedrooms/Mattress/m5.jpg',
Blue: '../images/Bedrooms/Mattress/m6.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/base5.glb',
},
{
id: '202',
name: 'Product 6',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
price: '49999',
images: {
Red: '../images/Bedrooms/Mattress/m6.jpg',
Blue: '../images/Bedrooms/Mattress/m7.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/base6.glb',
},
{
id: '203',
name: 'Product 7',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
price: '49999',
images: {
Red: '../images/Bedrooms/Mattress/m7.jpg',
Blue: '../images/Bedrooms/Mattress/m8.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/base7.glb',
},
{
id: '204',
name: 'Product 8',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
price: '49999',
images: {
Red: '../images/Bedrooms/Mattress/m8.jpg',
Blue: '../images/Bedrooms/Mattress/m9.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/base8.glb',
},
{
id: '205',
name: 'Product 9',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
price: '49999',
images: {
Red: '../images/Bedrooms/Mattress/m9.jpg',
Blue: '../images/Bedrooms/Mattress/m10.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/base9.glb',
},
{
id: '206',
name: 'Product 10',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
price: '49999',
images: {
Red: '../images/Bedrooms/Mattress/m10.jpg',
Blue: '../images/Bedrooms/Mattress/m11.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/base10.glb',
},
{
id: '207',
name: 'Product 11',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
price: '49999',
images: {
Red: '../images/Bedrooms/Mattress/m11.jpg',
Blue: '../images/Bedrooms/Mattress/m12.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/base11.glb',
},
{
id: '208',
name: 'Product 12',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
price: '49999',
images: {
Red: '../images/Bedrooms/Mattress/m12.jpg',
Blue: '../images/Bedrooms/Mattress/m1.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/base12.glb',
},
{
id: '209',
name: 'Product 13',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',           
price: '49999',
images: {
Red: '../images/Bedrooms/Dressingunits/dt1.jpg',
Blue: '../images/Bedrooms/Dressingunits/dt2.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/base13.glb',
},
{
id: '210',
name: 'Product 14',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
price: '49999',
images: {
Red: '../images/Bedrooms/Dressingunits/dt2.jpg',
Blue: '../images/Bedrooms/Dressingunits/dt3.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/base14.glb',
},
{
id: '211',
name: 'Product 15',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Dressingunits/dt3.jpg',
Blue: '../images/Bedrooms/Dressingunits/dt4.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/base15.glb',
},
{
id: '212',
name: 'Product 16',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Dressingunits/dt4.jpg',
Blue: '../images/Bedrooms/Dressingunits/dt5.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/16.glb',
},
{
id: '213',
name: 'Product 17',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Dressingunits/dt5.jpg',
Blue:'../images/Bedrooms/Dressingunits/dt6.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '214',
name: 'Product 18',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Dressingunits/dt6.jpg',
Blue: '../images/Bedrooms/Dressingunits/dt7.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '215',
name: 'Product 19',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Dressingunits/dt7.jpg',
Blue: '../images/Bedrooms/Dressingunits/dt8.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '216',
name: 'Product 20',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Dressingunits/dt8.jpg',
Blue: '../images/Bedrooms/Dressingunits/dt9.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '217',
name: 'Product 20',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Dressingunits/dt9.jpg',
Blue: '../images/Bedrooms/Dressingunits/dt10.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '218',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Dressingunits/dt10.jpg',
Blue: '../images/Bedrooms/Dressingunits/dt11.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '219',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Dressingunits/dt11.jpg',
Blue: '../images/Bedrooms/Dressingunits/dt12.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '220',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Dressingunits/dt12.jpg',
Blue: '../images/Bedrooms/Dressingunits/dt1.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '221',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Blankets/b1.jpg',
Blue: '../images/Bedrooms/Blankets/b2.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '222',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Blankets/b2.jpg',
Blue: '../images/Bedrooms/Blankets/b3.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '223',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Blankets/b3.jpg',
Blue: '../images/Bedrooms/Blankets/b4.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '224',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Blankets/b4.jpg',
Blue:'../images/Bedrooms/Blankets/b5.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '225',
name: 'Product 19',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Blankets/b5.jpg',
Blue: '../images/Bedrooms/Blankets/b6.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '226',
name: 'Product 20',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Blankets/b6.jpg',
Blue: '../images/Bedrooms/Blankets/b7.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '227',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Blankets/b7.jpg',
Blue: '../images/Bedrooms/Blankets/b8.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '228',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Blankets/b8.jpg',
Blue: '../images/Bedrooms/Blankets/b9.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '229',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Blankets/b9.jpg',
Blue:'../images/Bedrooms/Blankets/b10.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '230',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Blankets/b10.jpg',
Blue: '../images/Bedrooms/Blankets/b11.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '231',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Blankets/b11.jpg',
Blue: '../images/Bedrooms/Blankets/b12.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '232',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Pillows/p1.jpg',
Blue: '../images/Bedrooms/Pillows/p1.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '233',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Pillows/p1.jpg',
Blue: '../images/Bedrooms/Pillows/p2.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '234',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Pillows/p2.jpg',
Blue: '../images/Bedrooms/Pillows/p1.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '235',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Pillows/p3.jpg',
Blue: '../images/Bedrooms/Pillows/p1.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '236',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Pillows/p4.jpg',
Blue: '../images/Bedrooms/Pillows/p1.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '237',
name: 'Product 19',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Pillows/p5.jpg',
Blue: '../images/Bedrooms/Pillows/p1.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '238',
name: 'Product 20',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Pillows/p6.jpg',
Blue: '../images/Bedrooms/Pillows/p1.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '239',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Pillows/p7.jpg',
Blue: '../images/Bedrooms/Pillows/p1.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '240',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Pillows/p8.jpg',
Blue: '../images/Bedrooms/Pillows/p1.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '241',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Pillows/p9.jpg',
Blue: '../images/Bedrooms/Pillows/p1.jpg',},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '242',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Pillows/p10.jpg',
Blue: '../images/Bedrooms/Pillows/p1.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '243',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Pillows/p11.jpg',
Blue: '../images/Bedrooms/Pillows/p1.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '244',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Bedrooms/Pillows/p12.jpg',
Blue: '../images/Bedrooms/Pillows/p1.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '245',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Dining/Diningsets/1.jpg',
Blue: '../images/Dining/Diningsets/1.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '246',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Dining/Diningsets/2.jpg',
Blue: '../images/Dining/Diningsets/1.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '247',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Dining/Diningsets/3.jpg',
Blue: '../images/Dining/Diningsets/1.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '248',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Dining/Diningsets/4.jpg',
Blue: '../images/Dining/Diningsets/1.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '249*',
name: 'Product 19',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Dining/Diningsets/5.jpg',
Blue: '../images/Dining/Diningsets/1.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '250',
name: 'Product 20',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Dining/Diningsets/6.jpg',
Blue: '../images/Dining/Diningsets/1.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '251',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Dining/Diningsets/7.jpg',
Blue: '../images/Dining/Diningsets/1.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '252',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Dining/Diningsets/8.jpg',
Blue: '../images/Dining/Diningsets/1.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '253',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Dining/Diningsets/9.jpg',
Blue: '../images/Dining/Diningsets/1.jpg',},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '254',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Dining/Diningsets/10.jpg',
Blue: '../images/Dining/Diningsets/1.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '255',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Dining/Diningsets/11.jpg',
Blue: '../images/Dining/Diningsets/1.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '256',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Dining/Diningsets/12.jpg',
Blue: '../images/Dining/Diningsets/1.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '257',
name: 'Modern Sofa',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Gray: '../images/Dining/Crockeryunits/1.jpg',
Yellow: '../images/Dining/Crockeryunits/2.jpg',
},
colors: { Gray: '#808080', Yellow: '#FFFF00'},
glbFile: '/images/base1.glb',
},
{
id: '258',
name: 'Product 2',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
price: '49999',
images: {
Red: '../images/Dining/Crockeryunits/2.jpg',
Blue: '../images/Dining/Crockeryunits/3.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/base2.glb',
},
{
id: '259',
name: 'Corner Sofa',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
price: '49999',
images: {
Red: '../images/Dining/Crockeryunits/3.jpg',
Blue: '../images/Dining/Crockeryunits/4.jpg',
},
colors: { Red: '#333333', Blue: '#3c4d03' },
glbFile: '/images/base3.glb',
},
{
id: '260',
name: 'Product 4',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.', 
price: '49999',
images: {
Red: '../images/Dining/Crockeryunits/4.jpg',
Blue: '../images/Dining/Crockeryunits/5.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/base4.glb',
},
{
id: '261',
name: 'Product 5',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
price: '49999',
images: {
Red: '../images/Dining/Crockeryunits/5.jpg',
Blue: '../images/Dining/Crockeryunits/6.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/base5.glb',
},
{
id: '262',
name: 'Product 6',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
price: '49999',
images: {
Red: '../images/Dining/Crockeryunits/6.jpg',
Blue: '../images/Dining/Crockeryunits/7.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/base6.glb',
},
{
id: '263',
name: 'Product 7',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
price: '49999',
images: {
Red: '../images/Dining/Crockeryunits/7.jpg',
Blue: '../images/Dining/Crockeryunits/8.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/base7.glb',
},
{
id: '264',
name: 'Product 8',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
price: '49999',
images: {
Red: '../images/Dining/Crockeryunits/8.jpg',
Blue: '../images/Dining/Crockeryunits/9.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/base8.glb',
},
{
id: '265',
name: 'Product 9',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
price: '49999',
images: {
Red: '../images/Dining/Crockeryunits/9.jpg',
Blue: '../images/Dining/Crockeryunits/10.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/base9.glb',
},
{
id: '266',
name: 'Product 10',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
price: '49999',
images: {
Red: '../images/Dining/Crockeryunits/1.jpg',
Blue: '../images/Dining/Crockeryunits/2.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/base10.glb',
},
{
id: '267',
name: 'Product 11',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
price: '49999',
images: {
Red: '../images/Dining/Crockeryunits/2.jpg',
Blue: '../images/Dining/Crockeryunits/3.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/base11.glb',
},
{
id: '268',
name: 'Product 12',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
price: '49999',
images: {
Red: '../images/Dining/Crockeryunits/3.jpg',
Blue: '../images/Dining/Crockeryunits/4.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/base12.glb',
},
{
id: '269',
name: 'Product 13',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',           
price: '49999',
images: {
Red: '../images/Office/Desks/1.jpg',
Blue: '../images/Office/Desks/2.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/base13.glb',
},
{
id: '270',
name: 'Product 14',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',            
price: '49999',
images: {
Red: '../images/Office/Desks/2.jpg',
Blue: '../images/Office/Desks/3.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/base14.glb',
},
{
id: '271',
name: 'Product 15',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Desks/3.jpg',
Blue: '../images/Office/Desks/4.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/base15.glb',
},
{
id: '272',
name: 'Product 16',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Desks/4.jpg',
Blue: '../images/Office/Desks/5.jpeg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/16.glb',
},
{
id: '273',
name: 'Product 17',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Desks/5.jpeg',
Blue: '../images/Office/Desks/6.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '274',
name: 'Product 18',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Desks/6.jpg',
Blue: '../images/Office/Desks/7.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '275',
name: 'Product 19',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Desks/7.jpg',
Blue: '../images/Office/Desks/8.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '276',
name: 'Product 20',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Desks/8.jpg',
Blue: '../images/Office/Desks/9.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '277',
name: 'Product 20',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Desks/9.jpg',
Blue: '../images/Office/Desks/10.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '278',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Desks/10.jpg',
Blue: '../images/Office/Desks/11.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '279',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Desks/11.jpg',
Blue: '../images/Office/Desks/12.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '280',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Desks/12.jpg',
Blue: '../images/Office/Desks/1.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '281',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Chairs/1.jpg',
Blue: '../images/Office/Chairs/2.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '282',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Chairs/2.jpg',
Blue: '../images/Office/Chairs/3.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '283',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Chairs/3.jpg',
Blue: '../images/Office/Chairs/4.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '284',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Chairs/4.jpg',
Blue: '../images/Office/Chairs/5.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '285',
name: 'Product 19',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Chairs/5.jpg',
Blue: '../images/Office/Chairs/6.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '286',
name: 'Product 20',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Chairs/6.jpg',
Blue: '../images/Office/Chairs/7.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '287',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Chairs/7.jpg',
Blue: '../images/Office/Chairs/8.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '288',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Chairs/8.jpg',
Blue: '../images/Office/Chairs/9.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '290',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Chairs/9.jpg',
Blue: '../images/Office/Chairs/10.jpg',},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '291',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Chairs/10.jpg',
Blue: '../images/Office/Chairs/11.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '292',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Chairs/11.jpg',
Blue: '../images/Office/Chairs/12.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '293',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Chairs/12.jpg',
Blue: '../images/Office/Chairs/1.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '294',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Bookcases/1.jpg',
Blue: '../images/Office/Bookcases/2.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '295',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Bookcases/2.jpg',
Blue: '../images/Office/Bookcases/3.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '296',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Bookcases/3.jpg',
Blue: '../images/Office/Bookcases/4.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '297',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Bookcases/4.jpg',
Blue: '../images/Office/Bookcases/5.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '298',
name: 'Product 19',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Bookcases/5.jpg',
Blue: '../images/Office/Bookcases/6.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '299',
name: 'Product 20',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Bookcases/6.jpg',
Blue: '../images/Office/Bookcases/7.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '300',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Bookcases/7.jpg',
Blue: '../images/Office/Bookcases/8.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '301',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Bookcases/8.jpg',
Blue: '../images/Office/Bookcases/9.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '302',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Bookcases/9.jpg',
Blue: '../images/Office/Bookcases/10.jpg',},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '303',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Bookcases/10.jpg',
Blue: '../images/Office/Bookcases/11.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '304',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Bookcases/11.jpg',
Blue: '../images/Office/Bookcases/12.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '305',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Bookcases/12.jpg',
Blue: '../images/Office/Bookcases/1.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '306',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Receptioncounter/1.jpg',
Blue: '../images/Office/Receptioncounter/2.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '307',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Receptioncounter/2.jpg',
Blue: '../images/Office/Receptioncounter/3.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '308',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Receptioncounter/3.jpg',
Blue: '../images/Office/Receptioncounter/4.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '309',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Receptioncounter/4.jpg',
Blue: '../images/Office/Receptioncounter/5.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '310',
name: 'Product 19',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Receptioncounter/5.jpg',
Blue: '../images/Office/Receptioncounter/6.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '311',
name: 'Product 20',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Receptioncounter/6.jpg',
Blue: '../images/Office/Receptioncounter/7.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '312',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Receptioncounter/7.jpg',
Blue: '../images/Office/Receptioncounter/8.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '313',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Receptioncounter/8.jpg',
Blue: '../images/Office/Receptioncounter/9.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '314',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Receptioncounter/9.jpg',
Blue: '../images/Office/Receptioncounter/10.jpg',},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '315',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Receptioncounter/10.jpg',
Blue: '../images/Office/Receptioncounter/11.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '316',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Receptioncounter/11.jpg',
Blue: '../images/Office/Receptioncounter/12.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},
{
id: '317',
name: 'Product 22',
description: 'The product is a great choice. It has a solid construction, which makes it a long-lasting investment for you and your family.',
price: '49999',
images: {
Red: '../images/Office/Receptioncounter/12.jpg',
Blue: '../images/Office/Receptioncounter/1.jpg',
},
colors: { Red: '#f2f7f7', Blue: '#030e6b' },
glbFile: '/images/sofachair1.glb',
},                                                                              
];
const product = products.find((p) => p.id === productId);
const [isInWishlist, setIsInWishlist] = useState(false);
const [showDropdown, setShowDropdown] = useState(false);
const [quantities, setQuantities] = useState(Array(products.length).fill(1));
const [isAddedToCart, setIsAddedToCart] = useState(false);
const [selectedColor, setSelectedColor] = useState(product ? Object.keys(product.colors)[0] : '');
const productIndex = product ? products.findIndex((p) => p.id === productId) : -1;
useEffect(() => {
if (product) {
const inWishlist = wishlist.some((item) => item.id === productId);
setIsInWishlist(inWishlist);
}
}, [product, wishlist, productId]);
const handleAddToCart = () => {
if (product) {
const selectedQuantity = quantities[productIndex];
addToCart({
...product,
quantity: selectedQuantity,
color: selectedColor,
image: product.images[selectedColor],
});
setIsAddedToCart(true);
}
};
const handleGoToCart = () => {
navigate('/cart');
};
const handleWishlistToggle = () => {
if (product) {
if (isInWishlist) {
removeFromWishlist(product.id);
} else {
addToWishlist({
...product,
color: selectedColor,
image: product.images[selectedColor],
});
}
setIsInWishlist(!isInWishlist);
}
};
const handleShareToggle = () => {
setShowDropdown(!showDropdown);
};
const handleShare = (platform) => {
const shareData = {
title: product.name,
text: `Check out this amazing product: ${product.name} for ₹${product.price}`,
url: window.location.href,
};
switch (platform) {
case 'facebook':
window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}`, '_blank');
break;
case 'whatsapp':
window.open(`https://wa.me/?text=${encodeURIComponent(shareData.text + ' ' + shareData.url)}`, '_blank');
break;
case 'instagram':
window.open(`https://instagram.com/?url=${encodeURIComponent(shareData.url)}`, '_blank');
break;
default:
alert('Unsupported platform');
}
setShowDropdown(false);
};
const handleColorChange = (color) => {
setSelectedColor(color);
};
if (!product) {
return 
<p>Product not found.</p>
;
}
return (
<div className="product-details">
   <div className="image-section">
      <img src={product.images[selectedColor]} alt={product.name} />
      {/* Button to open 3D view on a new page */}
      {product.glbFile && (
      <Link to={`/product/${productId}/3dview`}>
      <button className="view-3d-button">View 3D Model</button>
      </Link>
      )}
   </div>
   <div className="details-section">
      <h2>{product.name}</h2>
      <p className='pd'>{product.description}</p>
      <p className="price">Price: ₹{product.price}<del className='del'>₹ 79,000</del> <span className='inc'>(Inc of all taxes)</span></p>
      {/* Color Selection */}
      <div className="color-selection">
         <label>Select Color:</label>
         {Object.keys(product.colors).map((color) => (
         <button
         key={color}
         className={`color-button ${selectedColor === color ? 'selected' : ''}`}
         onClick={() => handleColorChange(color)}
         style={{
         backgroundColor: product.colors[color],
         border: selectedColor === color ? '2px solid black' : '1px solid lightgray',
         width: '30px',
         height: '30px',
         borderRadius: '50%',
         margin: '5px',
         }}
         />
         ))}
      </div>
      <div className="wishlist-share">
         <button 
         className="product-wish1" 
         onClick={handleWishlistToggle}
         style={{ color: 'black' }}
         >
         {isInWishlist ? <FaHeart style={{ color: 'red' }} /> : <FaRegHeart style={{ color: 'black' }} />}
         <span style={{ color: 'black' }}>
         {isInWishlist ? ' Wishlisted' : ' Add to Wishlist'}
         </span>
         </button>
         <button className="share-button" onClick={handleShareToggle} style={{ marginLeft: '8px' }}>
         <IoShareSocialSharp style={{ marginRight: '4px' }} />
         <span> Share</span>
         </button>
         {showDropdown && (
         <div className="share-dropdown">
            <button className='dd' onClick={() =>
               handleShare('facebook')}>
               <FaFacebook className='facebook'/>
               Facebook
            </button>
            <button className='dd' onClick={() =>
               handleShare('whatsapp')}>
               <FaWhatsapp className="whatsapp"/>
               WhatsApp
            </button>
            <button className='dd' onClick={() =>
               handleShare('instagram')}>
               <FaInstagram className='instagram' />
               Instagram
            </button>
         </div>
         )}
      </div>
      <label className='qua'>
         Quantity:
         <select
            value={quantities[productIndex]}
            onChange={(e) =>
            setQuantities(prev => {
            const newQuantities = [...prev];
            newQuantities[productIndex] = e.target.value;
            return newQuantities;
            })}
            >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
         </select>
      </label>
      <div className="product-buttons">
         {!isAddedToCart ? (
         <button className="product-cart1" onClick={handleAddToCart}>ADD TO CART</button>
         ) : (
         <button className="product-cart1" onClick={handleGoToCart}>GO TO CART</button>
         )}
         <button className='buy-now1'>BUY NOW</button>
      </div>
   </div>
</div>
);
};
export default ProductDetails;