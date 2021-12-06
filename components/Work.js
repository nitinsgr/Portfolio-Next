import Image from 'next/image'
import CoverImage from '../images/Capture.PNG'
import DisplayImage from '../images/Desktop.jpg'
import Sosspay from '../images/SOSSPAY.jpg'
import SpotifyImage from '../images/Spotify.jpg'
import { FaBeer, FaExternalLinkAlt, FaFacebook, FaFacebookF, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

function Work() {
    return (
        <>
        <main className=" max-w-7xl mx-auto mt-32 mb-30 ">
                <h1 className="text-8xl font-semibold text-left font-poppins">Case Studies & Work</h1>
               
            </main>
            <main className="max-w-7xl mx-auto">
                 <div className="flex mx-auto mb-20 mt-36">
                    <div className=" max-w-full relative">
                        <Image src={DisplayImage} objectFit="contain" objectPosition="center" className=" hover:shadow-inner opacity-50 hover:opacity-100 rounded-b-full rounded-l-full transition duration-500 ease-in-out mix-blend-overlay"/>
                    </div>
                    <div className=" flex flex-col ml-20 float-right text-right transform -translate-x-1/4">
                        <div className="flex float-right translate-x-2/4 ml-20 text-right space-x-14">
                            <h3 className="text-2xl font-poppins font-semibold">01</h3>
                            <div className="border h-0 w-20 transform translate-y-3"></div>
                            <h3 className="text-1xl float-right text-right font-poppins">Featured Project</h3>
                        </div>
                        
                        <h5 className="text-3xl font-poppins font-bold float-right ">Travel & Hotel Booking</h5>
                        <p className="text-1xl font-poppins pt-5">Website Re-design & Development</p>
                        <div className=" flex shadow-md hover:shadow-lg flxe-grow rounded-md mt-10 bg-white-white transform translate-x-1/5 h-32 pl-4 w-full text-black font-poppins text-left">
                          <p className="p-4">An Idea to re-design/re-build Airbnb website, Project completetion done using next js, Tailwindcss and other re-usable libraries and components.</p>
                        </div>
                        <div className="flex space-x-5 justify-end">
                            <FaGithub className="h-12 w-5 hover:text-red-400 " />
                            <FaExternalLinkAlt className="h-12 w-5" size={40}/>
                            
                        </div>
                    </div>
                </div>

                 <div className="flex mx-auto mb-20 mt-36">
                   
                    <div className=" flex flex-col ml-0 float-left text-left transform translate-x-24 z-10">
                        <div className="flex float-leftt ml-0 text-left space-x-24">
                            <h3 className="text-1xl float-left font-poppins">Featured Project</h3>
                            <div className="border h-0 w-20 transform translate-y-3"></div>
                            <h3 className="text-2xl font-poppins font-semibold">02</h3>
                        </div>
                        
                        <h5 className="text-3xl font-poppins font-bold float-left ">Spotify Plug & Play</h5>
                        <p className="text-1xl font-poppins pt-5">Webapp design & Development</p>
                        <div className=" flex shadow-md flxe-grow rounded-md mt-10 bg-white-white transform translate-x-1/5 h-32 pl-4 w-full text-black font-poppins">
                          <p className="p-4">A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                        </div>
                        <div className="flex space-x-5 justify-start">
                            <FaGithub className="h-12 w-5 hover:text-red-400" />
                            <FaExternalLinkAlt className="h-12 w-5" size={40}/>
                        </div>
                    </div>
                     <div className=" max-w-full relative">
                        <Image src={SpotifyImage} objectFit="contain" className=" rounded-tr-full rounded-br-full rounded-bl-full opacity-50 hover:opacity-100 transition duration-500 ease-in-out"/>
                    </div>
                </div>

                 <div className="flex mx-auto mb-20 mt-36">
                    <div className=" max-w-full relative">
                        <Image src={Sosspay} objectFit="contain" className=" rounded-b-full rounded-tl-full opacity-50 hover:opacity-100 transition duration-500 ease-in-out"/>
                    </div>
                    <div className=" flex flex-col ml-20 float-right text-right transform -translate-x-1/4">
                        <div className="flex float-right translate-x-2/4 ml-20 text-right space-x-14">
                            <h3 className="text-2xl font-poppins font-semibold">01</h3>
                            <div className="border h-0 w-20 transform translate-y-3"></div>
                            <h3 className="text-1xl float-right font-poppins">Featured Project</h3>
                        </div>
                        
                        <h5 className="text-3xl font-poppins font-bold float-right ">Sosspay Wallet</h5>
                        <p className="text-1xl font-poppins pt-5">UX/UI, Re-designing, Branding</p>
                        <div className=" flex shadow-md flxe-grow rounded-md mt-10 bg-white-white transform translate-x-1/5 h-32 pl-4 w-full text-black font-poppins text-left">
                          <p className="p-4">A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                        </div>
                        <div className="flex space-x-5 justify-end">
                            <FaGithub className="h-12 w-5 hover:text-red-400 " />
                            <FaExternalLinkAlt className="h-12 w-5" size={40}/>
                        </div>
                    </div>
                </div>
            </main>

        

            </>
        
    )
}

export default Work
