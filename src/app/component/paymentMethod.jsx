import React from "react";

function PaymentMethod({index,setIndex}) {
    function handleButtonsPaymentChange(ind) {
        setIndex((prevState) => ({
                    ...prevState,
                    payment: ind
                }));
    }
    return(
        <>
            <h3>Способ оплаты</h3>
            <div className="payment-method">
                <div className={"cash-payments mr-b btn-payments " + (1 === index ? "active" : "")} onClick={()=> handleButtonsPaymentChange(1)}>
                    <div className="icons"> </div>
                    <p className="cash">Наличные</p>
                </div>
                <div className={"no-cash_payments btn-payments " + (2 === index ? "active" : "")} onClick={()=> handleButtonsPaymentChange(2)}>
                    <div className="icons"> </div>
                    <p className="cash">Перевод</p>
                </div>
            </div>
        </>
    )
}
export default PaymentMethod