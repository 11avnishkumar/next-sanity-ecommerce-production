import React, { useState } from 'react'
const ProductFilter = (props) => {
    const [color,setColor] = useState([]);
    const [categories,setCategories] = useState([]);
    const [brand,setBrand] = useState([]);
        
    const filterCategories = {
        categoriesFilter: ['Earphone', 'Mobile', 'Smartphone', 'Pendrive', 'Monitor'],
        brandFilter: ['Dell','Redmi', 'Boat', 'Apple', 'Samsung', 'Sony'],
        colorFilter : [
            'bg-red-500',
            'bg-pink-500',
            'bg-rose-500',
            'bg-orange-500',
            'bg-amber-500',
            'bg-yellow-500',
            'bg-lime-500',
            'bg-green-500',
            'bg-emerald-500',
            'bg-teal-500',
            'bg-cyan-500',
            'bg-indigo-500',
            'bg-purple-500',
            'bg-fuchsia-500',
            'bg-blue-500',
            'bg-violet-500'
          ]
    }
    const getColors = (values) => {
         setColor((prevColor) => {
          if(!prevColor.includes(values))  return [...prevColor,values]
          else return prevColor
        })
    }
    const getBrand = (values) => {
        setBrand((prevBrand) => {
        if(!prevBrand.includes(values)) return [...prevBrand,values]
        else return prevBrand
        })
    }
    const getCategories = (values) =>{
        setCategories((prevCategories) => {
        if(!prevCategories.includes(values)) return [...prevCategories,values]
        else return prevCategories
        })
    }
    
    // call the functions and pass the values
    props.filterDataHandler(color,categories,brand);
    
 
    return (
        <div className='min-h-screen'>
            <nav className='py-6 px-10 border-r border-gray-200'>
                {/* Brand */}
                <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Choose Brand</h3>
                <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                 {filterCategories.brandFilter.map((item,index) => (
                    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600" key={index}>
                        <div className="flex items-center pl-3">
                            <input id={`${item}-checkbox`} type="checkbox" value={`${item}`} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onChange={(e)=> getBrand(e.target.value)} />
                            <label htmlFor={`${item}-checkbox`} className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{item}</label>
                        </div>
                    </li>
                  ))}
                </ul>
                {/* color */}
                <h3 className="mt-4 mb-4 font-semibold text-gray-900 dark:text-white">Choose Color</h3>
                <ul className="bg-white flex flex-wrap">
                 {filterCategories.colorFilter.map((item,index) => (
                    <li className="flex rounded-t-lg dark:border-gray-600" key={index}>
                        <div className="flex items-center pr-3 py-1">
                            <input id={`${item}-checkbox`} type="checkbox" value={`${item}`} className="hidden"  onChange={(e)=>getColors(e.target.value)}/>
                            <label htmlFor={`${item}-checkbox`} className={`inline-block  h-8 w-8 rounded-full ${item}`}></label>
                        </div>
                    </li>
                  ))}
                </ul>
              { /* categories */ }
                <h3 className="mt-4 mb-4 font-semibold text-gray-900 dark:text-white">Choose Categories</h3>
                <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                 {filterCategories.categoriesFilter.map((item,index) => (
                    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600" key={index}>
                        <div className="flex items-center pl-3">
                            <input id={`${item}-checkbox`} type="checkbox" value={`${item}`} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onChange={(e) => getCategories(e.target.value)} />
                            <label htmlFor={`${item}-checkbox`} className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{item}</label>
                        </div>
                    </li>
                  ))}
                </ul>
            </nav>
        </div>
    )
}

export default ProductFilter 
