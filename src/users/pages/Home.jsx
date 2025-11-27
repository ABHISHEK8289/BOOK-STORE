import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'



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
        {/* books row */}

        <div className="md:grid grid-cols-4 w-full mt-10">
          <div className="shadow rounded p-3 mx-4">
            <img width={'300px'} height={'300px'} src="https://m.media-amazon.com/images/I/91xJ3bhoszL._AC_UF1000,1000_QL80_.jpg" alt="" />
            <div className="flex justify-center items-center flex-cols mt-4">
              <h3 className='text-blue-600 font-bold text-lg'>Author</h3>
              <h4 className='text-lg'>tittle</h4>
              <h5 >$5.5 price</h5>
            </div>
          </div>
          {/*  */}
          <div className="shadow rounded p-3 mx-4">
            <img width={'300px'} height={'300px'} src="https://m.media-amazon.com/images/I/91xJ3bhoszL._AC_UF1000,1000_QL80_.jpg" alt="" />
            <div className="flex justify-center items-center flex-cols mt-4">
              <h3 className='text-blue-600 font-bold text-lg'>Author</h3>
              <h4 className='text-lg'>tittle</h4>
              <h5 >$5.5 price</h5>
            </div>
          </div>
          {/*  */}
          <div className="shadow rounded p-3 mx-4">
            <img width={'300px'} height={'300px'} src="https://m.media-amazon.com/images/I/91xJ3bhoszL._AC_UF1000,1000_QL80_.jpg" alt="" />
            <div className="flex justify-center items-center flex-cols mt-4">
              <h3 className='text-blue-600 font-bold text-lg'>Author</h3>
              <h4 className='text-lg'>tittle</h4>
              <h5 >$5.5 price</h5>
            </div>
          </div>
          {/*  */}

           <div className="shadow rounded p-3 mx-4">
            <img width={'300px'} height={'300px'} src="https://m.media-amazon.com/images/I/91xJ3bhoszL._AC_UF1000,1000_QL80_.jpg" alt="" />
            <div className="flex justify-center items-center flex-cols mt-4">
              <h3 className='text-blue-600 font-bold text-lg'>Author</h3>
              <h4 className='text-lg'>tittle</h4>
              <h5 >$5.5 price</h5>
            </div>
          </div>
          
        </div>

        {/*  */}

        <div className='text-center mt-5 '>
          <Link to={'/books'} className='p-3  rounded bg-black text-white'>Explore More..</Link>

        </div>
      </section>
      {/* new auther */}

      <section className="md:px-40 p-5 my-5 md:grid grid-cols-2 items-center">
       <div className='text-center'>
          <h1 className='text-3xl font-bold'>FEATURED AUTHORS</h1>
          <h2 className='text-2xl'>Captivates With Every Word</h2>
          <p className='text-justify mt-5'>A Book Store is a system designed to manage the buying, selling, and organization of books in an efficient and user-friendly way. It stores detailed information about each book, such as the title, author, category, price, and stock availability. Customers can easily search for the books they want, add them to a cart, and complete their purchase through a simple checkout process. The system also maintains customer records and order history to improve the shopping experience. For the admin, it provides tools to add or update books, monitor stock levels, and view sales reports. Overall, a Book Store system helps both customers and administrators by making book management faster, more accurate, and more convenient.</p>

          <p className='text-justify mt-5'>A Book Store is a comprehensive system that simplifies the entire process of managing and selling books. It maintains a digital record of all books, including details like their titles, authors, publication dates, genres, prices, and stock quantities. This helps customers quickly find the books they need through search and filtering options. The system also supports features like a shopping cart, secure checkout, and order tracking to make the buying process smooth and efficient. For administrators, the Book Store system provides powerful tools to add new books, update existing information, manage stock levels, handle customer details, and generate sales reports. By automating these tasks, it reduces human errors and saves time. Overall, a Book Store system ensures organized inventory management, improves customer experience, and supports efficient business operations for both online and physical stores.</p>

       </div>
       <div className='p-5 flex justify-center items-center'>
        <img className='w-full' src="https://www.thehalprize.com/wp-content/uploads/sites/6/2021/07/20200208_Rogers__LVP4587-791x1024-1-791x675.jpeg" alt="author" />
       </div>
        
      </section>
      {/* testimoney */}
       <section className='md:px-40 p-5 flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold'>TESTIMONIALS</h1>
        <h1 className='text-2xl'>See What Other  Are Saying</h1>
        <div className="my-10 flex justify-center items-center flex-col">
          {/* user img */}
          <img width={'200px'} height={'200px'} src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcScd4KbQbrRlYFXgzyOeNl_n_4T0zeGHyGBpglz_l2pnjHkhqWce3wTqwvPWWwi9aDR12Gye8Pco68ehhs" alt="" />
          <p className='mt-5'>Lionel Messi</p>
          <p className='text-justify mt-4'><span className='font-bold me-2'>Lionel Messi is one of the greatest footballers of all time — often considered the GOAT. Here’s a quick, clean summary for you.</span>Lionel Messi is widely regarded as one of the greatest footballers in history, known for his extraordinary dribbling, flawless technique, and unmatched playmaking ability. Born in Argentina, he rose to global fame at FC Barcelona, where he spent over two decades breaking records and winning major titles, including multiple Champions League and La Liga trophies. Messi’s vision on the field, combined with his goal-scoring consistency, makes him a rare all-round attacker. His career reached its ultimate peak when he led Argentina to victory in the 2022 FIFA World Cup, further cementing his legacy as a true footballing icon.</p>
        </div>


       </section>


    </div>
    <Footer/>
    </>
  )
}

export default Home