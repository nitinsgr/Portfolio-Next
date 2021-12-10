import Header from "../components/Header"
import Link from 'next/link'
import Image from 'next/image'
import Javascript from '../images/logo-javascript.svg'
import ReactIcon from '../images/react-2.svg'
import NextIcon from '../images/next.svg'
import NodeIcon from '../images/nodejs.svg'
import SassIcon from '../images/sass-1.svg'
import MongoIcon from '../images/mongodb-icon-1.svg'
import AdobeIcon from '../images/figma-1.svg'
import XDIcon from '../images/adobe-xd-1.svg'
import { FaBeer, FaFacebook, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import Eye from '../images/eye.png'

function about() {
  
    return (
        <>
           
           <header className=" flex justify-evenly pt-10">
            <div className="relative h-18 w-28 animate-bounce xs:max-w-7xl">
                <Link href="/"  className="">
                <Image src={Eye}
                        layout="fill"
                        className="cursor-pointer"
                    objectFit="contain"
                /></Link>
            </div>
             <div className="flex space-x-5 invisible md:visible">
                <FaFacebookF className=" flex hover:bg-red-300 rounded-full p-3 transition duration-200 ease-in-out relative h-10 w-10 hover:text-black text-white"/>
                <FaTwitter  className=" flex hover:bg-red-300 rounded-full p-3 transition duration-200  ease-in-out  relative h-10 w-10 hover:text-black text-white" />
                <FaInstagram className=" flex hover:bg-red-300 rounded-full p-3 transition duration-200 ease-in-out relative h-10 w-10 hover:text-black text-white"/>
            </div>
             <div>
               <Link href="/about"><h2 className="font-semibold hover:text-red-200 text-xs">Back Home</h2></Link>
            </div>
        </header>
        
            <main className=" max-w-7xl mx-auto">
                <div className="flex font-poppins mt-32 space-x-5 p-4">
                    <h4 className="text-1xl">Few words about me</h4>
                    <div className="border h-0 w-2 transform translate-y-3"></div>
                </div>
                <div className="flex flex-col text-left p-4">
                    <h1 className="text-5xl md:text-8xl pt-10 font-poppins font-semibold">Hello !</h1>
                    <h1 className="text-5xl md:text-8xl font-poppins font-medium pt-5">I'm Nitin Sagar</h1>
                    <h1 className="text-5xl md:text-8xl font-poppins font-thin text-yellow-500 pt-5">I Design & Build Digital Experience & Interfaces </h1>
                </div>
                 <div className=" text-left p-4">
                    <p className="text-1xl pb-5 font-poppins">Hi there, I'm a multi talented human being with almost year of experience in wide range of design and development disciplines.</p>

                    <p className="text-1xl font-poppins pb-5">You can call me a UX/UI design, developer and illustration artist by passion. professionaly I love to be called as a front-end designer/developer.</p>
                    <p  className="text-1xl font-poppins pb-10">I don't like to be define myself with work I've done, but I define myself with what type of work I want to do. I prefer to keep learning, love facing new challenges which kept me in this field. I like to develop my expertise in a number of areas over the courses in my life and career goal. I currently working remotely freelance client based projects and few personal projects to equip myself with vast knowledge of other disciplines.</p>
                    
                </div> 
                 <div className="flex flex-col p-4">
                    <h3 className="text-1xl font-poppins">Here are a few technologies i've been working with recently</h3>
                    <div className="flex pb-10 pt-10  space-x-6">
                    <Image src={Javascript} className=" rounded-xl" width={100} height={100} objectFit="contain"/>
                    <Image src={ReactIcon} className="rounded-xl" width={100} height={100} objectFit="contain"/>
                    <Image src={NextIcon} className="rounded-xl" width={100} height={100} objectFit="contain"/>
                    <Image src={NodeIcon} className="rounded-xl" width={100} height={100} objectFit="contain"/>
                    <Image src={MongoIcon} className="rounded-xl" width={100} height={100} objectFit="contain"/>
                    <Image src={SassIcon} className="rounded-xl" width={100} height={100} objectFit="contain"/>
                    <Image src={AdobeIcon} objectFit="contain" className="rounded-xl z-10" width={100} height={100}/>
                    <Image src={XDIcon} objectFit="contain" className="rounded-xl z-10" width={100} height={100}/>
                    
                
                    </div>
                </div> 
                 <div className="flex pb-20 items-center justify-center md:items-start md:justify-start ">
                    <Link href="./Resume-FrontEnd.pdf"><button className="text-1xl text-red-400 hover:bg-yellow-300 font-poppins font-semibold hover:pl-2 border-2 p-4 ">My Resume</button></Link>
                </div> 
            </main>
        </>
    )
}

export default about
