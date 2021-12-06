import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import {MailIcon} from '@heroicons/react/outline'
import Link from "next/link"

function Contact() {
    return (
        <>
            <main className="max-w-7xl mx-auto">
                <div className=" items-center text-center mt-30 mb-20 pt-20">
                    <h1 className="text-6xl font-poppins font-semibold ">Get In Touch</h1>
                    <p className="text-1xl pt-5 text-center max-w-2xl items-center mx-auto font-poppins ">I'm Currently Available for any opportunity, you can contact me on my social media handle instagram and main</p>
                    <div className="mx-auto pt-10">
                      <Link href="https://mail.google.com/mail/u/0/#inbox?compose=new"><button className="border px-10 py-4 text-1xl text-yellow-500 font-poppins hover:bg-yellow-500 hover:text-black transition duration-200 ease-in-out">Say Hello</button></Link> 
                    </div>

                    <div className="mx-auto">
                        <h4 className="font-poppins text-1xl mt-40 align-bottom">Designed & Built by Nitin Sagar</h4>
                        <div className="flex text-center space-x-5 items-center mt-5 justify-center">
                            <FaTwitter className="h-10 w-10 hover:bg-red-300 rounded-full p-2" />
                            <FaInstagram className="h-10 w-10 hover:bg-red-300 rounded-full p-2" />
                            <Link href='https://mail.google.com/mail/u/0/#inbox?compose=new'><MailIcon className="h-10 hover:bg-red-300 rounded-full p-2  cursor-pointer"/></Link>
                            
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Contact
