import React, { Component } from 'react';
import { connect } from 'react-redux';

class PaypalButton extends Component {

  componentDidMount() {
    paypal.Button.render({
      env: 'sandbox', // sandbox | production
      client: {
        sandbox: 'AWfRDqDY7uO5FAudVguQAuBDzDJ9tjJ1c4gGajDVKeSOxUR6Fgny5Vquhz796bmbiD2vOVkXiJbh-zH8',
        // production: 'Aco85QiB9jk8Q3GdsidqKVCXuPAAVbnqm0agscHCL2-K2Lu2L6MxDU2AwTZa-ALMn_N0z-s2MXKJBxqJ',
      },

      payment: function () {
        // Make a client-side call to the REST api to create the payment

        return paypal.rest.payment.create(this.props.env, this.props.client, {
          transactions: [
            {
              amount: { total: '0.01', currency: 'USD' },
              payee: {
                email: 'frank@frank.com',
              },
            },
          ],
        });
      },

      onAuthorize: function (data, actions) {
        return actions.payment.execute().then(function () {
          document.querySelector('#paypal-button-container').innerText = 'Payment Complete!';
        });
      },
    }, '#paypal-button-container');
  }

  render() {
    return (
      <div id="paypal-button-container"></div>
    );
  }
}

const mapStateToProps = ({ userReducer }) => {
  return {
    user: userReducer,
  };
};

export default connect(
  mapStateToProps,
)(PaypalButton);

// <script src="https://www.paypalobjects.com/api/checkout.js"></script>
// <div id="paypal-button-container"></div>
// <script>
//     // Render the PayPal button
// </script>
