import Stripe from 'stripe'
import Sidebar from '../../components/Sidebar'
const customers = ({ customers }) => {
    const formatDate = (dt) => {
        const date = new Date(dt * 1000);
        const formattedDate = date.toDateString();
        return formattedDate;
    }
    return (
        <div className='min-h-screen py-10 flex'>
            <Sidebar />
            <div className='w-full px-10 py-6 space-y-3'>
                <h1 className='md:text-3xl mb-3'>Customers Details</h1>
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
                    {customers.map((customer) => (
                        <div className='flex justify-between items-center gap-4'>
                            <div className='mb-2'>
                                <div className='flex justify-center items-center gap-4'>{customer.name}</div>
                            </div>
                            <div className='mb-2'>
                                <div className='flex justify-center items-center gap-4'>{customer.amount}</div>
                            </div>
                            <div className='mb-2 border border-1 border-emerald-500 rounded-full px-4 py-1'>
                                <div className='flex justify-center items-center gap-4'>{customer.status}</div>
                            </div>
                            <div className=''>
                                <div>{formatDate(customer.created)}</div>
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

    const customers = await stripe.customers.list({
        limit: 3,
      });
    console.log(customers.data);

    return {
        props: {
            customers: customers.data,
        },
    };
}

export default customers