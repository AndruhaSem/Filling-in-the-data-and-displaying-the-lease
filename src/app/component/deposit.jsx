import React from "react";

function Deposit({index, setIndex}) {

    function handleButtonsDepositChange(ind) {
        setIndex((prevState) => ({
            ...prevState,
            deposit: ind
        }));
    }
    return(
        <>
            <h3>Залог</h3>
            <div className="info-client">
                <div className={"client-deposit pledge-button mr-b " + (1 === index ? "active" : "")} onClick={()=> handleButtonsDepositChange(1)}>
                    <div className="icons"> </div>
                    <p className="deposit">Документы</p>
                </div>
                <div className={"client-deposit_cash pledge-button " + (2 === index ? "active" : "")} onClick={()=> handleButtonsDepositChange(2)}>
                    <div className="icons"> </div>
                    <p className="deposit">Наличка</p>
                </div>
            </div>
        </>
    )
}
export default Deposit
