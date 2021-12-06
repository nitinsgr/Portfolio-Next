import Link from 'next/link'
import Image from 'next/image'
import { FaBeer, FaFacebook, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import Eye from '../images/eye.png'
function Header() {
    return (
    
       
        <header className="flex flex-row justify-between h-20 top-0 m-0 pl-10 pt-10 pr-20">
            <div className="relative h-18 w-28 animate-bounce">
                <Link href="/">
                <Image src={Eye}
                        layout="fill"
                        className="cursor-pointer"
                    objectFit="contain"
                /></Link>
            </div>
             <div className="flex space-x-5 ">
                <FaFacebookF className=" flex hover:bg-red-300 rounded-full p-3 transition duration-200 ease-in-out relative h-10 w-10 hover:text-black text-white"/>
                <FaTwitter  className=" flex hover:bg-red-300 rounded-full p-3 transition duration-200  ease-in-out  relative h-10 w-10 hover:text-black text-white" />
                <FaInstagram className=" flex hover:bg-red-300 rounded-full p-3 transition duration-200 ease-in-out relative h-10 w-10 hover:text-black text-white"/>
            </div>
             <div>
               <Link href="/about"><h2 className=" text-1xl font-semibold hover:text-red-200 lg:text-1xl">About & Services</h2></Link>
            </div>
        </header>
    
    )
}

export default Header
