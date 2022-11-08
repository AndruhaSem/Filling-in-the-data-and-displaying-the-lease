import React, {useState} from "react";
import ChoosingRental from "./choosingRental";
import NumberProduct from "./numberProduct";
import TimeRental from "./timeRental";
import PaymentMethod from "./paymentMethod";
import Deposit from "./deposit";
import CustomerData from "./customerData";
import DesignButton from "./designButton";

function Rental() {
    const [index,setIndex] = useState(1)
    const [count, setCount] = useState(1)
    const [countHour, setCountHour] = useState(0.5)
    const [countDya, setCountDay] = useState(12)
    const [indexPayment,setIndexPayment] = useState(0)
    const [indexDeposit,setIndexDeposit] = useState(0)

    function handleButtonChange(ind) {
        setIndex(ind)
        if(ind === 1){
            setCount(1)
            setCountDay(12)
        } else {
            setCount(1)
            setCountHour(0.5)
        }
    }

    function handleButtonRentalChange() {
        setIndex(1)
        setCount(1)
        setCountHour(0.5)
        setCountDay(12)
        setIndexPayment(0)
        setIndexDeposit(0)
    }
    return(
        <div className="container">
            <div className="container_rental">
                <ChoosingRental
                    index={index}
                    onButtonChange={handleButtonChange}
                />
                <NumberProduct
                    count={count}
                    setCount={setCount}
                />
                <TimeRental
                    index={index}
                    count={countHour}
                    countDya={countDya}
                    setCount={setCountHour}
                    setCountDay={setCountDay}
                />
                <PaymentMethod
                    index={indexPayment}
                    setIndex={setIndexPayment}
                />
            </div>
            <div className={"container-info__client " + (2 === index? "active" : "")}>
                <Deposit
                    index={indexDeposit}
                    setIndex={setIndexDeposit}
                />
                <CustomerData/>
            </div>
            <DesignButton
                onButtonRentalChange={handleButtonRentalChange}
            />
        </div>
    )
}
export default Rental