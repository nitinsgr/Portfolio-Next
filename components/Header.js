import Link from 'next/link'
import Image from 'next/image'
import { FaBeer, FaFacebook, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import Eye from '../images/eye.png'
function Header() {
    return (
    
       
        <header className=" mx-auto max-w-7xl xs:ml-10 xs:justify-end xs:mt-10 xs:mb-10 md:flex md:justify-between lg:flex lg:justify-between xl:flex xl:justify-between">
            <div className="relative h-18 w-28 xs:invisible animate-bounce xs:max-w-7xl">
                <Link href="/"  className="">
                <Image src={Eye}
                        layout="fill"
                        className="cursor-pointer"
                    objectFit="contain"
                   
                /></Link>
            </div>
             <div className="flex space-x-5  xs:invisible ">
                <FaFacebookF className=" flex hover:bg-red-300 rounded-full p-3 transition duration-200 ease-in-out relative h-10 w-10 hover:text-black text-white"/>
                <FaTwitter  className=" flex hover:bg-red-300 rounded-full p-3 transition duration-200  ease-in-out  relative h-10 w-10 hover:text-black text-white" />
                <FaInstagram className=" flex hover:bg-red-300 rounded-full p-3 transition duration-200 ease-in-out relative h-10 w-10 hover:text-black text-white"/>
            </div>
             <div>
               <Link href="/about"><h2 className="font-semibold hover:text-red-200 lg:text-1xl xs:text-2xl max-w-screen-sm xs:pl-10">About & Services</h2></Link>
            </div>
        </header>
    
    )
}

export default Header
