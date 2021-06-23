import React from 'react';

class Payment extends React.Component{
  constructor(){
    super();
    this.state = {}
  }

  render() {
    return(
      <div>
        <div className="pricing-table">
          <div className="pricing-plan">
            <div className="plan-header">Starter</div>
              <div className="plan-price"><span className="plan-price-amount"><span className="plan-price-currency">$</span>20</span>/month</div>
            <div className="plan-items">
              <div className="plan-item">20GB Storage</div>
              <div className="plan-item">100 Domains</div>
              <div className="plan-item">-</div>
            <div className="plan-item">-</div>
          </div>
  <div className="plan-footer">
    <button className="button is-fullwidth" disabled="disabled">Current plan</button>
  </div>
</div>

</div>
      </div>
    )
  }
}



export default Payment;
