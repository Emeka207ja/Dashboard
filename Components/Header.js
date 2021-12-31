import NavLink from 'next/link'
import Image from 'next/image'
import {useState} from 'react'

const Header=()=>{
    const [show,setShow]=useState(false)
    const showMenu =()=>{
        setShow(prevState=>!prevState)
    }
    return(
        <nav className='bg-gray-50 py-5'>
            <ul className='flex justify-between m-7 max-w-7xl mx-auto items-center px-2'>

              <div className='flex   justify-around items-center space-x-4 '>
              <li ><span><Image src='/images/envoi.png' alt='' height={15} width={18} />
               </span><NavLink href='#'><a className='text-2xl'> Envoi</a></NavLink></li>

               <div className='hidden md:flex'>
               <div><span className='relative left-40'><Image src='/images/search.png' alt='' height={14} width={14}/></span>  <input class="shadow appearance-none border border-white rounded-xl  py-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline w-60"  id="search" type='text'  placeholder=' Search orders'></input><NavLink href='#'><a></a></NavLink></div>
               </div>
              </div>

               <div className='hidden md:flex  justify-between items-center space-x-4'>
               <li className='space-x-1'><span><Image src='/images/primeStar.png' alt='' height={15} width={18} />
               </span><NavLink href='#'><a>Primestar</a></NavLink></li>

               <li><NavLink href='#'><a><span><Image src='/images/notification.png' alt='' height={15} width={18} />
               </span></a></NavLink></li>
               </div>

              {/* mobile goes here */}
              <div className='md:hidden flex items-center' onClick={showMenu}>
                  <span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                  </span>
              </div>
              
            </ul>
            {
                show &&  <div className='md:hidden block space-x-4 py-3'>
                <div className='p-1'><span className='relative left-40'><Image src='/images/search.png' alt='' height={14} width={14}/></span>  <input class="shadow appearance-none border border-white rounded-xl  py-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline w-60"  id="search" type='text'  placeholder=' Search orders'></input><NavLink href='#'><a></a></NavLink></div>
                  <div  className='p-1'>
                    <span><Image src='/images/primeStar.png' alt='' height={15} width={18} />
                   </span><NavLink href='#'><a>Primestar</a></NavLink>
                    </div>
                    <div  className='p-1'>
                    <NavLink href='#'><a><span><Image src='/images/notification.png' alt='' height={15} width={18} />
                   </span></a></NavLink>
                    </div>
                </div>
            }
        </nav>
    )
}
export default Header