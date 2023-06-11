import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useUserData from "../../../hooks/useUserData";


const CheckoutForm = ({price,selectedClass}) => {
    const stripe = useStripe();
    const elements = useElements();
    const{user}=useAuth();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const[axiosSecure]=useAxiosSecure();
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const{_id,className,instructorEmail,classImage,seats,selectedClassId}=selectedClass;
    const navigate=useNavigate();
    const[userFromDB]=useUserData();

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
            // console.log(paymentMethod);
        }
        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );
        if (confirmError) {
            console.log(confirmError);
        }
        setProcessing(false)
        console.log('payment intent',paymentIntent);
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                className,
                instructorEmail,
                classImage,
                seats,
                selectedClassId,
                cart_id:_id,
                userId:userFromDB._id
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    if (res.data.result.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Payment successfully done',
                            showConfirmButton: false,
                            timer: 1500
                          })
                          navigate('/dashboard/enrolledClass')
                    }
                })
        }
        

    }
    return (
        <>
            <form onSubmit={handleSubmit} className="w-2/3 mx-auto bg-slate-50 p-5 rounded-lg shadow-lg">
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className="mt-5 text-center">
                    <button className="btn btn-sm btn-neutral" type="submit" disabled={!stripe || !clientSecret || processing}>
                        Pay
                    </button>
                </div>
            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;