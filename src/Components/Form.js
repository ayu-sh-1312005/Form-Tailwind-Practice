// jshint esversion:6
import React, { useEffect, useState } from 'react';
import "./Form.css";

function Form() {

  const [formData,setFormData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    country:"India",
    street:"",
    city:"",
    state:"",
    postal:"",
    notification:"",
    comments:false,
    candidates:false,
    offers:false
  });

  function changeHandler(event){
    const {name,value,checked,type}=event.target;
    console.log(name,":",value)
    setFormData({...formData,[name]: type==="checkbox" ? checked:value});
  }
  function handleClick(event){
    event.preventDefault();
    console.log("Final Output");
    console.log(formData)
  }

  useEffect(()=>{
    console.log(formData);
  },[formData]);

  return (
    <div className='w-[420px] border-2 border-gray-400'>
      <form action="" className='w-full h-full flex flex-col gap-2 py-5 px-2'>
        <div className='flex flex-col'>
          <label>First Name</label>
          <input onChange={changeHandler} value={formData.firstName} name="firstName" className='border-[2px] border-gray-300 rounded-md py-1 px-2' type="text" placeholder='Ayush' id="firstName" />
        </div>
        <div className='flex flex-col'>
          <label>Last Name</label>
          <input value={formData.lastName} onChange={changeHandler} name="lastName" className='border-[2px] border-gray-300 rounded-md py-1 px-2' type="text" placeholder='Gupta' id="lastName" />
        </div>
        <div className='flex flex-col'>
          <label>Email address</label>
          <input onChange={changeHandler} name="email" value={formData.email} className='border-[2px] border-gray-300 rounded-md py-1 px-2' type="text" placeholder='ayushgupta1312005@gmail.com' id="email" />
        </div>
        <div className='flex flex-col'>
          <label>Country</label>
          <select onChange={changeHandler} name="country" value={formData.country} className='border-[2px] border-gray-300 rounded-md py-1 px-2' id="country">
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
          </select>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="" className=''>Street address</label>
          <input onChange={changeHandler} name="street" value={formData.state} className='border-[2px] border-gray-300 rounded-md py-1 px-2' type="text"  placeholder='Washington streets' id="street" />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="" >City</label>
          <input onChange={changeHandler} name="city" value={formData.city} className='border-[2px] border-gray-300 rounded-md py-1 px-2' type="text" placeholder='New York City' id="city" />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="" >State / Province</label>
          <input onChange={changeHandler} name="state" value={formData.state} className='border-[2px] border-gray-300 rounded-md py-1 px-2' type="text" placeholder='Calafonia' id="state" />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="" >ZIP / Postal Code</label>
          <input onChange={changeHandler} name="postal" value={formData.postal} className='border-[2px] border-gray-300 rounded-md py-1 px-2' type="text" placeholder='560063' id="postal" />
        </div>
        <div className='flex flex-col gap-2'>
            <label htmlFor="" className='text-lg'>By Email</label>

            <div className='flex flex-row gap-2'>
              <div>
                <input onChange={changeHandler} type="checkbox" name="comments" value={formData.comments} id="" />
              </div>
              <div>
                <p className='text-lg'>Comments</p>
                <p className='text-sm text-gray-400'>Get notified when someone posts a comment on posting.</p>
              </div>
            </div> 

            <div className='flex flex-row gap-2'>
              <div>
                <input onChange={changeHandler} name="candidates" type="checkbox" value={formData.candidates} id="" />
              </div>
              <div>
                <p className='text-lg'>Candidates</p>
                <p className='text-sm text-gray-400'>Get notified when a candidate apply for job.</p>
              </div>
            </div> 

            <div className='flex flex-row gap-2'>
              <div>
                <input onChange={changeHandler} name="offers" type="checkbox" value={formData.offers} id="" />
              </div>
              <div>
                <p className='text-lg'>Offers</p>
                <p className='text-sm text-gray-400'>Get notified when candidate accept or rejects an offer.</p>
              </div>
            </div>  

        </div>

        <div className='flex flex-col'>
          <label htmlFor="" className='text-lg'>Push Notifications</label>
          <p className='text-sm text-gray-400'>There are delivered via SMS to your mobile phone</p>
          <div className='flex flex-col gap-1'>
            <div className='flex flex-row gap-2 py-1 px-2'>
              <input onChange={changeHandler} type="radio" name="notification" value="Everything" id="" />
              <label htmlFor="">Everything</label>
            </div>
            <div className='flex flex-row gap-2 py-1 px-2'>
              <input onChange={changeHandler} type="radio" name="notification" value="Same as email" id="" />
              <label htmlFor="">Same as email</label>
            </div>
            <div className='flex flex-row gap-2 py-1 px-2'>
              <input onChange={changeHandler} type="radio" name="notification" value="No push notification" id="" />
              <label htmlFor="">No push notification</label>
            </div>
        </div>
        </div>

        <div className='py-1 px-2'>
          <button onClick={handleClick} className='bg-blue-500 py-1 rounded-sm px-3 text-white' type="submit">Save</button>
        </div>
      </form>
    </div>
  )
}

export default Form