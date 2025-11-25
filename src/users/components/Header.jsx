import React, { useState } from 'react'
import { FaBars, FaFacebook, FaInstagram, FaUser, FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
Link

function Header() {
  const [listStatus,setListStatus]= useState(false)
  const menuBtnClick=()=>{
    setListStatus(!listStatus)
  }
  return (
   <> 
   {/* upper-part --tittle & login */}
<div  className='grid grid-cols-3 p-3'>
    {/* login tittle */}
<div className='flex items-center'>
      <img width={'70px'} height={'70px'} src="/public/logo.jpg" alt="" />
      <h1 className='text-2xl font-bold  md:hidden'>BOOK-STORE</h1>
</div>
<div className=' md:flex justify-center items-center hidden'>
      <h1 className='text-3xl font-bold'> BOOK-STORE</h1></div>
<div className='md:flex justify-end items-center hidden'>
<FaFacebook/>
<FaInstagram className='mx-2'/>
<FaXTwitter/>
        <Link to={'/'} className='ms-3 border rounded py-2 hover:bg-black hover:bg-white flex items-center'> <FaUser className='me-2'/>Login</Link>


</div>
</div>
{/* loweer-part */}

<nav className='w-full p-2 bg-black text-white md:flex justify-center items-center '>

  <div className='flex justify-between items-center text-2xl md:hidden'>

    <button onClick={menuBtnClick}><FaBars/></button>
    <Link to={'/login'} className='ms-4 border rounded px-2 py-1 hover:bg-white hover:text-black flex items-center'><FaUser className='me-1'/> </Link>
  </div>
  {/* ul-Links */}

  <ul className={listStatus? "flex flex-col" : "md:flex justify-center items-center hidden" }>
    <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/'} >HOME</Link></li>
    <li className='md:mx-4 my-3 md:my-0'><Link to={'/books'} >BOOKS</Link></li>
    <li className='md:mx-4 mb-3 md:mb-0'><Link to={'/contact'} >CONTACT</Link></li>


  </ul>
</nav>
   </>
  )
}

export default Header