import React, { Component } from 'react';
import PayPalIntegration from './PayPalIntegration';
import { Link } from 'react-router-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

export default class CartTotals extends Component {
  render() {
    const { cartSubTotal, cartTax, cartTotal, cart, clearCart } = this.props.value;
    const { history } = this.props;
    const emptyCart = cart.length === 0 ? true : false;

    return (
      <React.Fragment>
        {!emptyCart && (
          <div className="container">
            <div className="row">
              <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                <Link to="/">
                  <button
                    className="btn btn-outline-danger text-uppercase mb-3 px-5"
                    type="button"
                    onClick={() => {
                      clearCart();
                    }}
                  >
                    clear cart
                  </button>
                </Link>
                <h5>
                  <span className="text-title"> subtotal :</span> <strong>PHP {cartSubTotal} </strong>
                </h5>
                <h5>
                  <span className="text-title"> tax :</span> <strong>PHP {cartTax} </strong>
                </h5>
                <h5>
                  <span className="text-title"> total :</span> <strong>PHP {cartTotal} </strong>
                </h5>
                <PayPalScriptProvider options={{ 'client-id': 'YOUR_CLIENT_ID' }}>
                  <PayPalIntegration
                    totalAmount={cartTotal}
                    clearCart={clearCart}
                    history={history}
                  />
                  <button
                    className="btn btn-primary btn-lg"
                    onClick={() => {
                      window.paypal.Buttons().render('#paypal-button-container');
                    }}
                  >
                    Checkout with PayPal
                  </button>
                </PayPalScriptProvider>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}