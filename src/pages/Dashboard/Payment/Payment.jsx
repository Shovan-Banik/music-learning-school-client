import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const[selectedClass,setSelectedClass]=useState([]);
    const { classId } = useParams();

    useEffect(()=>{
        fetch(`http://localhost:5000/carts/${classId}`)
        .then(res=>res.json())
        .then(data=>{
            setSelectedClass(data)
        })
    },[])
    return (
        <div>
            <div className="border-2 bg-slate-100 shadow-lg p-2 mb-12">
                <h2 className="text-3xl font-bold my-5 text-center">Make Sure Your Payment First!</h2>
            </div>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm price={parseFloat(selectedClass.price)} selectedClass={selectedClass}></CheckoutForm>
                </Elements>
            </div>

        </div>
    );
};

export default Payment;