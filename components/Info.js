import { FaMailchimp } from "react-icons/fa"
import {MailIcon} from '@heroicons/react/outline'
import Work from "./Work"
import Link from 'next/link'


function Info() {
    return (
       <>
        <main className="max-w-7xl mx-auto mt-20">
                    <div className="flex flex-row space-x-4 xs:text-2xl xs:space-x-10 xs:justify-between xs:w-full xs:m-20">
                        <h3 className="font-semibold ">I'm Nitin Sagar</h3>
                        <div className="border h-0 w-10 transform translate-y-3 xs:w-10"></div>
                        <h3 className="font-semibold">Available For Freelance Work</h3>
                    </div>
                <div className="mt-20 font-poppins font-semibold justify-center text-9xl xs:text-center xs:m-10">
                    <h1> I'm a Freelance <span className=" text-yellow-500">UX/UI</span>  Designer Turning Your Ideas Into Reality</h1>
                    
                </div>
                <div className=" w-6/12 pt-20 pb-10 font-poppins xs:w-screen xs:m-20">
                    <h4 className="text-2xl xs:text-4xl xs:w-screen">I help companies to design digital products and turn ideas into a functional and delightful experience. I’m focusing on working on interface and digital design – mainly building products, branding and websites.</h4>
                    <div className="shadow-xl mt-4 border-1 pb-2 flex space-x-5 pt-2 text-center align-middle items-center flex-grow rounded-full hover:bg-red-300 transition duration-500 ease-in-out">
                        <MailIcon className="relative h-12 pl-5" />
                        <div className="text-white border h-8"></div>
                        <h6>NitinSagar309@gmail.com</h6>
                    </div>  
                </div>
             
            
            </main>
            
        </>
    )
}

export default Info
