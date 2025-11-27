import React from 'react'
import Header from '../components/Header'

import { FaLocationDot } from 'react-icons/fa6'
import { IoCall } from 'react-icons/io5'
import { IoIosMailOpen } from 'react-icons/io'
import Footer from '../../components/Footer'
Footer





function Contact() {
  return (
    <>
    <Header/>
    {/* contact heading*/}
    <div className=' mx-5 p-2'>
      <h1 className='justify-center text-center text-3xl'>Contacts</h1>
      <p className='text-center font-bold'>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione, officia delectus consequuntur, dicta libero magni omnis architecto voluptas culpa praesentium ipsum assumenda quae dolor, nihil rerum fugit expedita corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio maiores fuga, modi vel accusantium magnam ex,ratione 
     aliquam eius odit consequuntur earum, itaque nulla labore veritatis quis aut atque!</p>

     {/*  */}
        <section className='md:px-40 p-5 my-5 md:grid grid-cols-3 items-center'>
          <div className='p-5 flex justify-center items-center '><FaLocationDot/>
          <p className='text-center font-bold'>kakkanad</p></div>
           <div className='p-5 flex justify-center items-center'><IoCall/><p className='font-bold'>+91-8289947087</p></div>
         <div className='p-5 flex justify-center items-center'><IoIosMailOpen/><p className='font-bold'>bookstore112@gmail.com</p></div>
        </section>
        {/* dual section */}
        {/* form */}
        <section className='md:px-40 p-5 my-5 md:grid grid-cols-2 items-center' >
          <div style={{width:'400px'}} className='bg-black text-white p-5 flex flex-col justify-center items-center my-5'>
            <h1 className='text-3xl font-bold text-center'>Send Me A Message</h1>
          <input type="text" placeholder='Name' className='bg-white text-black placeholder-gray-400 w-full p-2 rounded my-5'/>
          <input type="text" placeholder='E-Mail ID' className='bg-white text-black placeholder-gray-400 w-full p-2 rounded my-5'/>
          <textarea style={{height:'100px'}} type="text" placeholder='Message' className='bg-white text-black placeholder-gray-400 w-full p-2 rounded my-5'/>
                    <button className='justify-center bg-blue-400  text-black text-bold p-2 w-90'>Send</button>

          </div>
          {/* location */}
          <div className='p-5 flex justify-center items-center'>
            <img className='w-full ' src="public/map.png" alt="" />

          </div>
        </section>



    </div>
<Footer/>
    </>
  )
}

export default Contact