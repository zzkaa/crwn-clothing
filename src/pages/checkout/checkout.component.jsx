import React from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { connect } from "react-redux";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, cartTotal }) => {
  console.log(cartItems, cartTotal);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      <div>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <div className="total">TOTAL: ${cartTotal}</div>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
  cartTotal: cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  ),
});

export default connect(mapStateToProps)(CheckoutPage);
