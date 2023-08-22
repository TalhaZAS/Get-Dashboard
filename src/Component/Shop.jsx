
import React,{ useState } from 'react';
import { shopData, localData,tableData } from './Data'; 

const ToggleButtonComponent = () => {
  const [isShopDataActive, setIsShopDataActive] = useState(1);

  const toggleData = () => {
    setIsShopDataActive( prevCount => !prevCount )   ;
   
};


  const activeData =   isShopDataActive ? shopData : localData 
  
  return (
    <>
   
    <div className="p-4 ">
          <h1 className="text-3xl font-serif font-semibold mb-7">User DashBoard</h1>
          
      <div className="mb-4 py-5 px-8 ">
        <button
          className=" text-gray-400 font-semibold text-3xl mr-3 px-4 py-2  font-serif
          hover:bg-red-400  hover:text-gray-100 transition-colors duration-300 ease-in-out"
          onClick={toggleData}
        >
          {isShopDataActive ? 'Vendor Favorites' : 'Vendor Favorites' }
        
        </button>
        <button
          className=" text-gray-400 font-semibold text-3xl mr-3 px-4 py-2  font-serif
          hover:bg-red-400 hover:text-gray-100 transition-colors duration-300 ease-in-out "
          onClick={toggleData}
        >
          {isShopDataActive ? 'Local Offer' : 'Local Offer'}
        
        </button>
        <button
          className=" text-gray-400 font-semibold text-3xl mr-3 px-4 py-2  font-serif
          hover:bg-red-400 hover:text-gray-100 transition-colors duration-300 ease-in-out "
          onClick={tableData}
          
        >
          Offer History
        
        </button>
        
        <hr className="w-45 mx-auto my-4 bg-gray-100 rounded  dark:bg-gray-700"></hr>
      </div>
      
      <div className="grid  gap-4  lg:grid-cols-4">
        {activeData.map(item => (
          <div key={item.title} className="bg-white p-4 rounded shadow  hover:shadow-2xl">
               <a
              href={item.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
        
            <img src={item.image} alt={item.title} className="w-full h-35 object-cover hover:underline" />
            </a>
            <div className='mt-3'>
            <h1 className="text-xl font-semibold mt-2">{item.title}</h1>
            <p className="text-gray-600 mt-1">{item.description}</p>
            <div className=" mt-3">
              <span className="text-black-xl  mr-3">
               <del>{item.price}</del>
              </span>
              <span className="text-black font-semibold text-xl">{item.nprice}</span>
            </div>
            <h4 className='font-semibold mt-5'>{item.end}</h4>
          </div>
          </div>   
        ))}
      </div>
      
    </div>
       {
        /* 
        <table className="min-w-full">
        <thead>
          <tr className="bg-orange-100">
            <th className="text-left py-2 px-4">Shop </th>
            <th className="text-left py-2 px-4">Offer </th>
            <th className="text-left py-2 px-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {.map((item, index) => (
            <tr key={index}>
              <td className="border py-2 px-4">{item.col1}</td>
              <td className="border py-2 px-4">{item.col2}</td>
              <td className="border py-2 px-4">{item.col3}</td>
            </tr>
          ))}
        </tbody>
      </table>
        */
       }

    </>
    
  );
};

export default ToggleButtonComponent;
