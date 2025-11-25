import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaSearch } from 'react-icons/fa'


function Home() {
  return (
    <>
    <Header/>
    <div>
      {/* landing part- search*/}
      <div style={{height:'700px'}} className='flex justify-center items-center flex-col bg-[url(/public/background-image.png)] bg-cover text-white'>
      <div style={{height:'700px' , backgroundColor:'rgba(0,0,0,5'}} className='w-full flex justify-center items-center flex-col'>
        <h1 className='text-5xl font-bold mb-2'>WonderFul Gifts</h1>
        <p>gifts your family  and friends a book</p>
        {/* search */}
        <div className='mt-9 flex'>
          <input type="text" className='bg-white rounded-3xl text-black w-100 placeholder-gray-500 p-2' placeholder='Search a BOOKS HRER'  />
          <button className='text-gray-500' style={{marginLeft:"-40px"}}><FaSearch/></button>
        </div>
      </div>
       </div>
      {/* new arribel */}
      <section className='md:px-40 p-5 flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold'>NEW ARRIVALS</h1>
        <h1 className='text-2xl'>Explore Our Latest Collections</h1>
      </section>
      {/* new auther */}
      {/* testimoney */}
    </div>
    <Footer/>
    </>
  )
}

export default Home