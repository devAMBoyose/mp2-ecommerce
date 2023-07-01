import React, { useEffect } from 'react';

const PayPalIntegration = ({ totalAmount, clearCart, history }) => {
  useEffect(() => {
    const initializePayPalButton = () => {
      window.paypal
        .Buttons({
          createOrder: function (data, actions) {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    currency_code: 'USD',
                    value: totalAmount,
                  },
                },
              ],
            });
          },
          onApprove: function (data, actions) {
            return actions.order.capture().then(function (details) {
              alert('Transaction completed by ' + details.payer.name.given_name);
              clearCart();
              history.push('/success'); // Redirect to success page
            });
          },
        })
        .render('#paypal-button-container');
    };

    const script = document.createElement('script');
    script.src = "https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID&currency=USD&intent=capture;"
    script.addEventListener('load', initializePayPalButton);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [totalAmount, clearCart, history]);

  return <div id="paypal-button-container"></div>;
};

export default PayPalIntegration;