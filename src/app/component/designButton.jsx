import React from "react";

function DesignButton({onButtonRentalChange}) {
    return(
        <div className="create_button">
            <button name="button" className="create-button__arrange" onClick={onButtonRentalChange}>Арендовать</button>
        </div>
    )
}
export default DesignButton
