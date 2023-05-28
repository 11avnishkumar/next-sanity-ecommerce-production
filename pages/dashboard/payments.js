import React from 'react'
import Stripe from 'stripe'
import Sidebar from '../../components/Sidebar'
const payments = ({ payments }) => {
    const formatDate = (dt) => {
        const date = new Date(dt * 1000);
        const formattedDate = date.toDateString();
        return formattedDate;
    }
    return (
        <div className='min-h-screen py-10 flex'>
            <Sidebar />
            <div className='w-full px-10 py-6 space-y-3'>
                <h1 className='md:text-3xl mb-3'>Payment Details</h1>
                <div className='bg-white rounded-lg shadow-lg px-4 py-4'>
                    <div className='flex justify-between items-center gap-4 mb-3'>
                        <div className=''>
                            <div className='flex justify-center items-center gap-4'>Method</div>
                        </div>
                        <div className=''>
                            <div className='flex justify-center items-center gap-4'>Amount</div>
                        </div>
                        <div className=''>
                            <div className='flex justify-center items-center gap-4'>Status</div>
                        </div>
                        <div className=''>
                            <div className='flex justify-center items-center gap-4'>Date</div>
                        </div>
                    </div>
                    {payments.map((payment) => (
                        <div className='flex justify-between items-center gap-4' key={payment.id}>
                            <div className='mb-2'>
                                <div className='flex justify-center items-center gap-4'>{payment.payment_method_types}</div>
                            </div>
                            <div className='mb-2'>
                                <div className='flex justify-center items-center gap-4'>{payment.amount}</div>
                            </div>
                            <div className='mb-2 border border-1 border-emerald-500 rounded-full px-4 py-1'>
                                <div className='flex justify-center items-center gap-4'>{payment.status}</div>
                            </div>
                            <div className=''>
                                <div>{formatDate(payment.created)}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)

    const paymentIntents = await stripe.paymentIntents.list();


    return {
        props: {
            payments: paymentIntents.data,
        },
    };
}

export default payments