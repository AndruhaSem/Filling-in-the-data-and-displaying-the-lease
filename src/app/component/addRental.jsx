import React, {useState} from "react";
import ChoosingRental from "./choosingRental";
import NumberProduct from "./numberProduct";
import TimeRental from "./timeRental";
import PaymentMethod from "./paymentMethod";
import Deposit from "./deposit";
import CustomerData from "./customerData";
import DesignButton from "./designButton";

function AddRental() {
    const [index,setIndex] = useState(1)
    const [counter, setCounter] = useState({quantity: 1, hour: 0.5, day: 12})
    const [indexRadio, setIndexRadio] = useState({payment: 0, deposit: 0})

    function handleButtonChange(ind) {
        setIndex(ind)
        if(ind === 1){
            setCounter((prevState) => ({
                ...prevState,
                quantity: 1,
                day: 12
            }));
        } else {
            setCounter((prevState) => ({
                ...prevState,
                quantity: 1,
                hour: 0.5
            }));
        }
    }

    function handleButtonRentalChange() {
        setIndex(1)
        // setCount(1)
        // setCountHour(0.5)
        // setCountDay(12)
        setIndexRadio({payment: 0, deposit: 0})
    }
    return(
        <div className="container">
            <div className="container_rental">
                <ChoosingRental
                    index={index}
                    onButtonChange={handleButtonChange}
                />
                <NumberProduct
                    counter={counter.quantity}
                    setCounter={setCounter}
                />
                <TimeRental
                    index={index}
                    countHour={counter.hour}
                    countDya={counter.day}
                    setCounter={setCounter}
                />
                <PaymentMethod
                    index={indexRadio.payment}
                    setIndex={setIndexRadio}
                />
            </div>
            <div className={"container-info__client " + (2 === index? "active" : "")}>
                <Deposit
                    index={indexRadio.deposit}
                    setIndex={setIndexRadio}
                />
                <CustomerData/>
            </div>
            <DesignButton
                onButtonRentalChange={handleButtonRentalChange}
            />
        </div>
    )
}
export default AddRental