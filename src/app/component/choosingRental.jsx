import React from "react";

function ChoosingRental({index, onButtonChange}) {
    return(
        <>
            <h2>SUP</h2>
            <div className="position">
                <div className={"info-position__street btn-position " + (1 === index ? "active" : "")} onClick={()=>onButtonChange(1)}>
                    <div className="icons"> </div>
                    <p className="name-position">Пляж</p>
                </div>
                <div className={"info-position__room mr btn-position " + (2 === index ? "active" : "")} onClick={()=>onButtonChange(2)}>
                    <div className="icons"> </div>
                    <p className="name-position">Помещение</p>
                </div>
            </div>
        </>
    )
}
export default ChoosingRental