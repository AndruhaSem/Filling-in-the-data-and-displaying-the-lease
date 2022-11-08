import React from "react";

function TimeRental({index,count,countDya,setCount,setCountDay}) {
    function handleIncrement(){
        if(index === 1){
            setCount(prevState => prevState + 0.5)
        } else {
            setCountDay(prevState => 24)
        }

    }
    function handleDecrement() {
        if(index === 1){
            if(count > 0.5){
                setCount(prevState => prevState - 0.5)
            }
        } else {
            setCountDay(prevState => 12)
        }
    }
    return(
        <>
            <h3>Время</h3>
            <div className="details-wrapper_time">
                <div className="counter-wrapper">
                    <div className="items__control" onClick={handleDecrement}>-</div>
                    <div className="items__current" >{index === 1 ? count : countDya}</div>
                    <div className="items__control" onClick={handleIncrement}>+</div>
                </div>
            </div>
        </>
    )
}
export default TimeRental