import React, { useState } from 'react'
import { FaEye, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Auth({insideRegister}){
  const [viewPassword,setViewPassword] = useState(false)

  return (
    <div className='w-full min-h-screen flex justify-center items-center flex-col bg-[url(/background-image2.png)] bg-cover bg-center'>
      <div className='p-10'>
        <h1 className='text-3xl font-bold text-white text-center '>BOOK-STORE</h1>
        <div style={{width:'400px'}} className='bg-black text-white p-5 flex flex-col justify-center items-center my-5'>

          <div style={{width:'100px',height:'100px',borderRadius:'50%'}} className='border mb-5 flext justify-center items-center'><FaUser className='text-3xl'/></div>
        
        <h1 className='text-2xl'>{insideRegister?"Register":"login"}Login</h1>
        <form className='my-5 w-full'>
          {/* username */}
         
           {
            insideRegister &&
            <input type="text" placeholder='User-Name' className='bg-white text-black placeholder-gray-400 w-full p-2 rounded my-5'/>

          }
           {/* email */}
      
          <input type="text" placeholder='E-Mail ID' className='bg-white text-black placeholder-gray-400 w-full p-2 rounded my-5'/>
             <div className='flex items-center'>
              {/* password */}
              <input type={viewPassword?"text":'password'} placeholder='PassWord' className='bg-white text-black placeholder-gray-400 w-full p-2 rounded my-5'/>
              {viewPassword?
                <FaEye onClick={()=>setViewPassword(!viewPassword)} className='text-gray-400 cursor-pointer' style={{marginLeft:'-30px',marginTop:'-20px'}}/>
                :
                 <FaEye onClick={()=>setViewPassword(!viewPassword)} className='text-gray-400 cursor-pointer' style={{marginLeft:'-30px',marginTop:'-20px'}}/>
              }
             </div>
             {/* forget password */}
             {
             insideRegister &&
             <div className='flex justify-between mb-5'>
              <p className='text-xs text-orange-300'>"never Share YOUR password with others!"</p>
              <button className='text-xs underline '>forget Password</button>

             </div>
             
             }
             {/* login/register button */}
              <div className='text-center'>
             {insideRegister ?
             
              <button type='button' className='bg-green-700 p-2 w-full rounded '>Register </button>
              :
              <button type='button' className='bg-green-700 p-2 w-full rounded '>Login</button>
             

             }
             </div>

             {/*  google authentication */}
             <div className='my-5 text-center'>
              {insideRegister ?
                 <p className='text-blue-600'> already a user ? <Link to={'/login'} className='underline ms-5'>LOGIN</Link> </p>
             :
             <p className='text-blue-600'> Are you A New User ? <Link to={'/register'} className='underline ms-5'>Register</Link> </p>
              }
            


             </div>
             
             


       
         
        </form>
        </div>

      </div>

    </div>
  )
}

export default Auth