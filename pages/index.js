import Head from 'next/head'
import Image from 'next/image'
import Header from '../Components/Header'
import Layout from '../Components/Layout'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Search from './search'
import Transactions from '../Components/Transactions'

const Home=()=> {
  return (
    <div>
     <Layout>
       <div className='flex justify-around max-w-full bg-gray-50'>
         <nav>
           <ul className=' sm:w-38 lg:w-40 '>
             <li  className='p-3 '><span><Image  src='/images/Dashboard.png' width={14} height={14}/></span><Link href='#' ><a className='mx-3'>Dashborad</a></Link></li>
             <li  className='p-3'><span><Image src='/images/driver.png' width={14} height={14}/></span><Link href=''><a className='mx-3'>Drivers</a></Link></li>
             <li  className='p-3'><span><Image src='/images/track.png' width={14} height={14}/></span><Link href=''><a className='mx-3'>Live track</a></Link></li>
             <li  className='p-3'><span><Image src='/images/transactions.png' width={14} height={14}/></span><Link href=''><a className='mx-3'>Transactions</a></Link></li>
             <li  className='p-3'><span><Image src='/images/settings.png' width={14} height={14}/></span><Link href=''><a className='mx-3'>Settings</a></Link></li>
           </ul>
         </nav>
         <div className='bg-blue-600 h-25 relative  w-20  lg:w-40 my-6 mx-2 rounded-3xl'>
           <span className='absolute top-2 bg-opacity-7 bg-blue-100 left-2 p-1 rounded-xl'><Image src='/images/transactions.png' alt='' height={15} width={15}/></span>
           <div className='relative top-20'>
             <h3 className='text-xl text-center text-white'>Earnings</h3>
             <h3 className='text-xl text-center text-white'>0.0</h3>
           </div>
         </div>
         <div className='bg-gray-600 h-25 lg:w-40  w-20 mx-2 my-6 rounded-3xl'>
         <div className='relative top-20'>
             <h3 className='text-xl text-center text-white'>Earnings</h3>
             <h3 className='text-xl text-center text-white'>0.0</h3>
           </div>
         </div>
         <div className='bg-blue-400 lg:h-21  h-25 lg:w-40 w-20  my-6 mx-2 rounded-3xl'>
         <div className='relative top-20'>
             <h3 className='text-xl text-center text-white'>Earnings</h3>
             <h3 className='text-xl text-center text-white'>0.0</h3>
           </div>
         </div>
       </div>
       <Transactions/>
     </Layout>
     
    </div>
  )
}
export default Home

