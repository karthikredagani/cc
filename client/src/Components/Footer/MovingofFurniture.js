import React from 'react';
import './MovingofFurniture.css';  // Import the CSS file

const MovingofFurniture = () => {
  return (
    <div className="shipping-policy-container">
      <h1 className='h1'>Moving Of Furniture</h1>

      <section>
        <h2 className="mov">Estimated Delivery Time</h2>
        <p className='p'>
          We generally dispatch the product within a day of order confirmation.
        </p>
        <p className='p'>
          Estimated delivery time depends on the following factors:
          <ul>
            <li>Product's availability with the Seller</li>
            <li>The destination to which you want the order shipped and location of the warehouse</li>
          </ul>
        </p>
      </section>

      <section>
        <h2 className="mov">Shipping Charges or Additional Charges</h2>
        <p className='p'>
          Few shipments might be charged. Additional costs such as Octroi, entry taxes need to be paid by the buyer.
        </p>
      </section>

      <section>
        <h2 className="mov">Order Tracking</h2>
        <p className='p'>
          We would like to deliver at the earliest, ideally within 10 days of your order. However, there will be cases where we take around 12 - 15 days for delivery. In such cases, we proactively call or email the customer to inform them of the status of their product and where it is in transit.
        </p>
        <p className='p'>
          Incase you don’t hear from us within 10 days of placing order, please give us a call to our customer care or email us at <a href="mailto:urbancomfort@gmail.com">urbancomfort@gmail.com</a>. Currently there is no online mechanism to check the status of your order.
        </p>
      </section>

      <section>
        <h2 className="mov">Delivery of Damaged Products</h2>
        <p className='p'>
          We have the highest quality control measures that ensure the product is up to our standards when you receive the product. In case you receive a damaged product, please bring it to notice by calling us immediately. Please reach out to us at <a href="tel:+914027841562">040 27841562 / 3 / 5</a> or write to us at <a href="mailto:urbancomfort@gmail.com">urbancomfort@gmail.com</a>.
        </p>
        <p className='p'>
          We will assess and get back to you within 2 business days. Depending on the degree of damage, we will either repair the product or offer you a replacement.
        </p>
      </section>

      <section>
        <h2 className="mov">Order Cancellation and Cancellation Charges</h2>
        <p className='p'>
          Orders can only be cancelled before the order is delivered. We will not be able to process cancellation requests after the order is delivered.
        </p>
        <p className='p'>
          A restocking fee of Rs.999 is applicable for all order cancellations, except sofas. Since all our sofas are made to order, we do not offer exchanges or cancellations. If you cannot accept delivery of your sofa, you will forfeit the advance order fee paid.
        </p>
      </section>
    </div>
  );
};

export default MovingofFurniture;
