import react,{useState} from 'react'
import Link from 'next/link'
const EditProfile = () => {
    
    const [err, setError] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [profilepic, setProfilePic] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('');

    const handleProfileUpdate = async (e) =>{
        e.preventDefault()
        // const imageUrl = await upload()
        const imageUrl = ''
        try {
                await axios.put(`https://blog-application-15ev.onrender.com/api/users/${currentUser._id}`,{
                userId:currentUser._id,
                firstname,
                lastname,
                phone,
                email,
                address,
                country,
                // photo: file ? imageUrl : "",
            })

            navigate('/profile')
        }catch (err){
            setError(err)
            console.log(err)
        }
    }
    return (
        <div className='bg-gray-100 px-6 py-6'>
            {/* Index container  */}
            <div className="px-2 py-4">
                {/* form */}
                <div className="flex justify-between items-center mb-3">
                    <div>
                        <ul className='inline-flex items-center space-x-4'>
                            <li className='text-xl md:text-3xl text-gray-500'><Link href={'/profile'}>EditProfile</Link></li>
                            <li className='text-md md:text-xl'>Edit Profile</li>
                        </ul>
                    </div>
                    <div className='flex justify-between items-center bg-green-600 px-5 py-3 text-white rounded-full shadow-lg space-x-6 cursor-pointer'>
                        <input  type="button" className='w-12 cursor-pointer' value="Save" onClick={handleProfileUpdate}/>
                        <span>&rarr;</span>
                    </div>
                </div>
                <form action="">
                    <div className='shadow-lg rounded-lg bg-white text-slate-700 flex flex-col md:flex-row md:justify-center md:items-start md:space-x-6 px-6 py-6'>
                        {/* left column with images */}
                        <div className='w-full md:w-1/2'>
                            {/* Avatar image */}
                            <div className='relative mb-4'>
                                <div className={'h-48 w-48 overflow-hidden border-4 border-emerald-500 rounded-full mx-auto '}>
                                    {profilepic &&
                                    <img src={profilepic} className='object-cover w-full' alt="" />
                                    }
                                    <p className='pt-20'>No Profile Pic</p>
                                </div>
                                <div className='bg-white shadow-md absolute top-12 left-60 md:top-16 md:left-80 h-24 w-24 cursor-pointer rounded-full flex justify-center items-center'>
                                    <input type="file" id='profile-pic' className='hidden'/>
                                    <label htmlFor="profile-pic" className={'cursor-pointer'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
                                        </svg>
                                    </label>
                                </div>
                            </div>

                            {/* Form */}
                            <div className='space-y-4 mb-4'>
                                <div className='flex justify-center items-center space-x-3'>
                                    <input type="text"  className='w-full rounded-md border-gray-300 outline-none  focus:border-emerald-500 ring-1 ring-emerald-100 focus:ring-4 focus:ring-emerald-300' value={firstname} placeholder={'Enter First Name'} onChange={e=>setFirstName(e.target.value)}/>
                                    <input type="text" className='w-full rounded-md border-gray-300 outline-none  focus:border-emerald-500 ring-1 ring-emerald-100 focus:ring-4 focus:ring-emerald-300' value={lastname} placeholder={'Enter Last Name'} onChange={e=>setLastName(e.target.value)} />
                                </div>
                                <div className="group">
                                    <input type="password"  className='w-full rounded-md border-gray-300 outline-none  focus:border-emerald-500 ring-1 ring-emerald-100 focus:ring-4 focus:ring-emerald-300' placeholder={'Enter Password'} />
                                </div>
                                <div className="group">
                                    <input type="email"  className='w-full rounded-md border-gray-300 outline-none  focus:border-emerald-500 ring-1 ring-emerald-100 focus:ring-4 focus:ring-emerald-300' value={email} placeholder={'Enter Email'} onChange={e=>setEmail(e.target.value)}/>
                                </div>
                                <div className="group">
                                    <input type="text"  className='w-full rounded-md border-gray-300 outline-none  focus:border-emerald-500 ring-1 ring-emerald-100 focus:ring-4 focus:ring-emerald-300' value={phone} placeholder={'Enter Phone'} onChange={e=>setPhone(e.target.value)}/>
                                </div>
                                <div className="group">
                                    <input type="text"  className='w-full py-8 rounded-md border-gray-300 outline-none  focus:border-emerald-500 ring-1 ring-emerald-100 focus:ring-4 focus:ring-emerald-300' value={address} placeholder={'Enter Address'} onChange={e=>setAddress(e.target.value)}/>
                                </div>
                                <div className="group">
                                    <input type="text"  className='w-full rounded-md border-gray-300 outline-none  focus:border-emerald-500 ring-1 ring-emerald-100 focus:ring-4 focus:ring-emerald-300' placeholder={'Country'} onChange={e=>setCountry(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        {/* right cols */}
                        <div className='w-full md:w-1/2 space-y-4'>
                            {/* Language and gender */}
                            <div className='flex justify-center items-center space-x-3'>
                                <div className="group w-full">
                                    <select  className='w-full rounded-md border-gray-300 outline-none  focus:border-emerald-500 ring-1 ring-emerald-100 focus:ring-4 focus:ring-emerald-300'>
                                        <option value="">English</option>
                                        <option value="">Hindi</option>
                                    </select>
                                </div>
                                <div className="group w-full">
                                    <select  className='w-full rounded-md border-gray-300 outline-none  focus:border-emerald-500 ring-1 ring-emerald-100 focus:ring-4 focus:ring-emerald-300'>
                                        <option value="">Male</option>
                                        <option value="">Female</option>
                                        <option value="">Transgender</option>
                                    </select>
                                </div>
                            </div>
                            {/* Date of birth */}
                            <div className="group">
                                <input type="date"  className='w-full rounded-md border-gray-300 outline-none  focus:border-emerald-500 ring-1 ring-emerald-100 focus:ring-4 focus:ring-emerald-300' placeholder={'Date of Birth'} />
                            </div>
                            {/* Social media link */}
                            <div className='flex justify-center items-center space-x-3'>
                                <div className="group w-full">
                                    <input type="text"  className='w-full rounded-md border-gray-300 outline-none  focus:border-emerald-500 ring-1 ring-emerald-100 focus:ring-4 focus:ring-emerald-300' placeholder={'Twitter'} />
                                </div>
                                <div className="group w-full">
                                    <input type="text"  className='w-full rounded-md border-gray-300 outline-none  focus:border-emerald-500 ring-1 ring-emerald-100 focus:ring-4 focus:ring-emerald-300' placeholder={'Linked In'} />
                                </div>
                            </div>
                            {/* Social media link part 2 */}
                            <div className='flex justify-center items-center space-x-3'>
                                <div className="group w-full">
                                    <input type="text"  className='w-full rounded-md border-gray-300 outline-none  focus:border-emerald-500 ring-1 ring-emerald-100 focus:ring-4 focus:ring-emerald-300' placeholder={'Google'} />
                                </div>
                                <div className="group w-full">
                                    <input type="text"  className='w-full rounded-md border-gray-300 outline-none  focus:border-emerald-500 ring-1 ring-emerald-100 focus:ring-4 focus:ring-emerald-300' placeholder={'Facebook'} />
                                </div>
                            </div>
                            {/* Slogan */}
                            <div className="group">
                                <input type="text"  className='w-full rounded-md border-gray-300 outline-none  focus:border-emerald-500 ring-1 ring-emerald-100 focus:ring-4 focus:ring-emerald-300' placeholder={'Slogan'} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditProfile

