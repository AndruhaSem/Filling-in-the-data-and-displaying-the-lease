import React from "react";

function NumberProduct({counter,setCounter}) {

    function handleIncrement() {
        setCounter((prevState) => ({
            ...prevState,
                quantity: prevState.quantity + 1,
        }));
    }
    function handleDecrement(){
        if(counter > 1){
            setCounter((prevState) => ({
                ...prevState,
                quantity: prevState.quantity - 1,
            }));
        }
    }
    return(
        <>
            <h3>Количество</h3>
            <div className="details-wrapper_quantity">
                <div className="items counter-wrapper">
                    <div className="items__control" onClick={handleDecrement}>-</div>
                    <div className="items__current" >{counter}</div>
                    <div className="items__control" onClick={handleIncrement}>+</div>
                </div>
            </div>
        </>
    )
}
export default NumberProduct