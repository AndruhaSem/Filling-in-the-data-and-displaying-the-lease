import React from "react";

function TimeRental({index,countHour,countDya,setCounter}) {
    function handleIncrement(){
        if(index === 1){
            setCounter((prevState) => ({
                ...prevState,
                hour: prevState.hour + 0.5
            }));
        } else {
            setCounter((prevState) => ({
                ...prevState,
                day: prevState.day = 24
            }));
        }

    }
    function handleDecrement() {
        if(index === 1){
            if(countHour > 0.5){
                setCounter((prevState) => ({
                    ...prevState,
                    hour: prevState.hour - 0.5
                }));
            }
        } else {
            setCounter((prevState) => ({
                ...prevState,
                day: prevState.day = 12
            }));
        }
    }
    return(
        <>
            <h3>Время</h3>
            <div className="details-wrapper_time">
                <div className="counter-wrapper">
                    <div className="items__control" onClick={handleDecrement}>-</div>
                    <div className="items__current" >{index === 1 ? countHour : countDya}</div>
                    <div className="items__control" onClick={handleIncrement}>+</div>
                </div>
            </div>
        </>
    )
}
export default TimeRental