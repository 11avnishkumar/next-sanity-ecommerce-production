import React, { useState } from 'react'
const Modal = ({closeModal}) => {
  const productCategories = [
    'Laptops',
    'Smartphones',
    'Tablets',
    'Cameras',
    'Headphones',
    'Televisions',
    'Gaming Consoles',
    'Printers',
    'Wearable Devices',
    'Home Appliances',
    'Speakers',
    'Drones',
    'Monitors',
    'Projectors',
    'Networking Devices',
    'Computer Accessories',
    'Virtual Reality',
    'Smart Home Devices',
    'External Storage',
    'GPS Devices'
  ];
  const productBrands = [
    'Apple',
    'Samsung',
    'Sony',
    'Dell',
    'HP',
    'Lenovo',
    'LG',
    'Microsoft',
    'Canon',
    'Nikon',
    'Bose',
    'JBL',
    'ASUS',
    'Panasonic',
    'Google',
    'Fitbit',
    'Xiaomi',
    'Philips',
    'GoPro',
    'Amazon'
  ];
  
  
  const [title,setTitle] = useState("");
  const [price,setPrice] = useState("");
  const [brand,setBrand] = useState("");
  const [category,setCategory] = useState("");
  const [description,setDescription] = useState("");
  const [draft,setDraft] = useState(false);
console.log(title,price,brand,category,description,draft);
  return (
    <div className='min-h-screen transition-all z-[1000] absolute left-0 right-0 bottom-0 top-0'>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-xl rounded-lg shadow-lg p-4 bg-white">
          <div className='mx-auto mt-5 flex justify-between items-center'>
            <span className="text-2xl font-bold tracking-tight text-gray-900">
              Enter the product details
            </span>
            <span className='text-2xl cursor-pointer' onClick={()=> closeModal(false)}>&times;</span>
          </div>
          <form className="mt-4 space-y-6">
            <div className="rounded-md shadow-sm">
              <div className='mb-4'>
                <label htmlFor="product-name" className="sr-only">
                  Enter Product Name
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  autoComplete="title"
                  required
                  className="relative block w-full appearance-none rounded-md  border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 sm:text-sm"
                  placeholder="Title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className='mb-4'>
                <label htmlFor="product-name" className="sr-only">
                  Price
                </label>
                <input
                  id="price"
                  name="price"
                  type="number"
                  min="0"
                  max="1000000"
                  autoComplete="price"
                  required
                  className="relative block w-full appearance-none rounded-md  border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 sm:text-sm"
                  placeholder="Price"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              
              <div className='mb-4'>
                <label htmlFor="brand" className="sr-only">
                  Select Brand
                </label>
                <select className='block w-full appearance-none rounded-md  border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 sm:text-sm' onChange={(e) => setBrand(e.target.value)}>
                 <option value="" selected >Select a Brand</option> 
                {productBrands.map((op,index) =>(
                  <option value={`${op}`} key={index}>{op}</option>
                ))}
                </select>
              </div>
              <div className='mb-4'>
                <label htmlFor="category" className="sr-only">
                  Categories
                </label>
                <select className='block w-full appearance-none rounded-md  border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 sm:text-sm' onChange={(e) => setCategory(e.target.value)}>
                 <option value="" selected>Select a Category</option> 
                {productCategories.map((op,index) =>(
                  <option value={`${op}`} key={index}>{op}</option>
                ))}
                </select>
              </div>
              <div>
                <label htmlFor="description" className="sr-only">
                  Product Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  type="text-area"
                  autoComplete="description"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 sm:text-sm"
                  placeholder="Enter Product Description"
                  onChange={(e) => setDescription(e.target.value)}
                >
                </textarea>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="is-active"
                  name="is-active"
                  type="checkbox"
                  value="false"
                  onChange={(e) => setDraft(e.target.value)}
                  className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                />
                <label htmlFor="is-active" className="ml-2 block text-sm text-gray-900">
                  Active
                </label>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-emerald-500 py-3 px-4 text-sm font-medium text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Modal