import React from 'react';
import './Return.css';

const Return = () => {
    return (
        <div className="return-policy-container">
            <h1>Return & Refund Policy</h1>
            <p className='p'>
                Thank you for shopping at <strong>Urban Comfort</strong>. We hope you love your new furniture, but if you are not entirely satisfied with your purchase, we’re here to help.
            </p>

            <h2>1. Returns</h2>
            <p className='p'>
                You have <strong>30 calendar days</strong> to return an item from the date you received it. To be eligible for a return, your item must be in the same condition that you received it, unused, and in its original packaging.
            </p>
            <p className='p'>
                Please ensure the item includes the receipt or proof of purchase. Custom-made or personalized furniture items are not eligible for returns.
            </p>

            <h2>2. Refunds</h2>
            <p className='p'>
                Once we receive your item, we will inspect it and notify you of the status of your refund. If your return is approved, we will initiate a refund to your original method of payment. You will receive the credit within a certain amount of days, depending on your card issuer's policies.
            </p>

            <h2>3. Shipping Costs</h2>
            <p className='p'>
                You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
            </p>

            <h2>4. Damaged or Defective Items</h2>
            <p className='p'>
                If you received a damaged or defective item, please contact us immediately at <a href="mailto:support@yourfurnitureshop.com">support@urbancomfort.com</a>. We will arrange for a replacement or refund as quickly as possible.
            </p>

            <h2>5. Non-returnable Items</h2>
            <ul>
                <li>Custom or personalized furniture</li>
                <li>Clearance items</li>
                <li>Gift cards</li>
            </ul>

            <h2>6. Contact Us</h2>
            <p className='p'>
                If you have any questions about our Return & Refund Policy, please contact us at:
            </p>
            <ul>
                <li>Email: <a href="mailto:support@urbancomfort.com">support@urbancomfort.com</a></li>
                <li>Phone: +1 234-567-890</li>
                <li>Address: 201, Narsingi, Hyderabad, Telangana, 500075.</li>
            </ul>
        </div>
    );
};

export default Return;