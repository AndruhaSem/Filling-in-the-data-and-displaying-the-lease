import React from "react";

function NumberProduct({count,setCount}) {

    function handleIncrement() {
        setCount(prevState => prevState + 1)
    }
    function handleDecrement(){
        if(count > 1){
            setCount(prevState => prevState - 1)
        }
    }
    return(
        <>
            <h3>Количество</h3>
            <div className="details-wrapper_quantity">
                <div className="items counter-wrapper">
                    <div className="items__control" onClick={handleDecrement}>-</div>
                    <div className="items__current" >{count}</div>
                    <div className="items__control" onClick={handleIncrement}>+</div>
                </div>
            </div>
        </>
    )
}
export default NumberProduct