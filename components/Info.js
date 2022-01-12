import { FaMailchimp } from "react-icons/fa"
import {MailIcon} from '@heroicons/react/outline'
import Work from "./Work"
import Link from 'next/link'


function Info() {
    return (
       <>
        <main className=" max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row space-x-10 text-center text-xs text-center pt-20 font-poppins">
                        <h3 className="font-semibold text-3xl md:text-sm">I'm Nitin Sagar</h3>
                        <h3 className="font-semibold text-3xl md:text-sm">Available For Freelance Work</h3>
                    </div>
                 <div className="mt-20 font-poppins font-semibold  pl-5 items-center p-2 text-center text-5xl lg:text-8xl xl:text-9xl xl:text-left">
                    <h1> I'm a Freelance <span className=" text-yellow-500">UX/UI</span>  Designer Turning Your Ideas Into Reality</h1>
                    
                </div>
                 <div className=" pt-10 pb-10 font-poppins">
                    <h4 className="text-1xl p-10 lg:text-left lg:text-2xl md:w-3/4">I help companies to design digital products and turn ideas into a functional and delightful experience. I’m focusing on working on interface and digital design – mainly building products, branding and websites.</h4>
                    <div className="shadow-lg mt-4 md:w-2/4 border-1 p-4 flex text-center align-middle items-center flex-grow rounded-full hover:bg-red-300 transition duration-500 ease-in-out">
                        <MailIcon className="relative h-9 pl-5 pr-2" />
                        <div className="text-white border h-4 space-x-4 "></div>
                        <h6 className="text-center text-sm md:text-2xl lg:text-left pl-3">NitinSagar309@gmail.com</h6>
                    </div>  
                </div>  
             
            
            </main>
            
        </>
    )
}

export default Info
