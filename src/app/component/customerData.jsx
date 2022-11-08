import React from "react";

function CustomerData(){
    return(
        <>
            <h3>Даные покупателя</h3>
            <form className="form-client">
                <div className="user-box">
                    <input className="name-client" type="text" name="" required=""/>
                    <label>Ф.И.О</label>
                </div>
                <div className="user-box">
                    <input className="number-client" type="number" name="" required=""/>
                    <label>Телефон</label>
                </div>
            </form>
        </>
    )
}
export default CustomerData