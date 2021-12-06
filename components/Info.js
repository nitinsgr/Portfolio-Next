import { FaMailchimp } from "react-icons/fa"
import {MailIcon} from '@heroicons/react/outline'
import Work from "./Work"
import Link from 'next/link'


function Info() {
    return (
       <>
        <main className="max-w-7xl mx-auto mt-20">
                <section className=" font-poppins flex flex-col">
                    <div className="flex flex-row space-x-4">
                        <h3 className="text-1xl font-semibold">I'm Nitin Sagar</h3>
                        <div className="border h-0 w-10 transform translate-y-3"></div>
                        <h3 className="text-1xl font-semibold">Available For Freelance Work</h3>
                    </div>
                     
               
                <div className="mt-20 w-full font-poppins font-semibold md:text-6xl sm:text-3xl lg:text-9xl xs:2xl justify-center">
                    <h1> I'm a Freelance <span className=" text-yellow-500">UX/UI</span>  Designer Turning Your Ideas Into Reality</h1>
                    
                </div>
                <div className=" w-6/12 pt-20 pb-10 font-poppins object-right">
                    <h4 className="text-2xl">I help companies to design digital products and turn ideas into a functional and delightful experience. I’m focusing on working on interface and digital design – mainly building products, branding and websites.</h4>
                    <div className="shadow-xl mt-4 border-1 pb-2 flex space-x-5 pt-2 text-center align-middle items-center flex-grow rounded-full hover:bg-red-300 transition duration-500 ease-in-out">
                        <MailIcon className="relative h-12 pl-5" />
                        <div className="text-white border h-8"></div>
                        <h6>NitinSagar309@gmail.com</h6>
                    </div>  
                </div>
                </section>
            
            </main>
            
        </>
    )
}

export default Info
