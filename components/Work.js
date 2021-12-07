import Image from 'next/image'
import CoverImage from '../images/Capture.PNG'
import DisplayImage from '../images/Desktop.jpg'
import Sosspay from '../images/SOSSPAY.jpg'
import SpotifyImage from '../images/Spotify.jpg'
import { FaBeer, FaExternalLinkAlt, FaFacebook, FaFacebookF, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

function Work() {
    return (
        <>
        <main className=" max-w-7xl mx-auto mt-32 mb-30 xs:m-0 xs:mx-0 xs:ml-10 xs:justify-center xs:items-center xs:transform xs:translate-x-1/4 ">
                <h1 className="text-8xl font-semibold text-left xs:text-6xl font-poppins">Case Studies & Work</h1>
               
            </main>
            <main className="max-w-7xl mx-auto">
                 <div className="flex mx-auto mb-20 mt-36 xs:m-20">
                    <div className=" max-w-full relative">
                        <Image src={DisplayImage} objectFit="contain" objectPosition="center" className=" hover:shadow-inner opacity-50 hover:opacity-100 rounded-b-full xs:invisible rounded-l-full transition duration-500 ease-in-out mix-blend-overlay"/>
                    </div>
                    <div className=" flex flex-col ml-0 float-right xs:text-left text-right transform -translate-x-1/4 xs:transform-none ">
                        <div className="flex float-right translate-x-2/4 ml-40 text-right xs:text-left xs:space-x-24 space-x-14">
                            <h3 className="text-2xl font-poppins xs:text-left font-semibold xs:text-3xl">01</h3>
                            <div className="border h-0 w-20 transform translate-y-3"></div>
                            <h3 className="text-1xl float-right text-right font-poppins xs:text-2xl">Featured Project</h3>
                        </div>
                        
                        <h5 className="text-3xl font-poppins font-bold float-right ">Travel & Hotel Booking</h5>
                        <p className="text-1xl font-poppins pt-5 xs:text-2xl">Website Re-design & Development</p>
                        <div className=" flex shadow-md hover:shadow-lg xs:transform-none xs:translate-x-0 flxe-grow rounded-md mt-10 bg-white-white transform translate-x-1/5 h-32 pl-4 w-full text-black font-poppins text-left">
                          <p className="p-4">An Idea to re-design/re-build Airbnb website, Project completetion done using next js, Tailwindcss and other re-usable libraries and components.</p>
                        </div>
                        <div className="flex space-x-5 justify-end">
                            <FaGithub className="h-12 w-5 hover:text-red-400 " />
                            <FaExternalLinkAlt className="h-12 w-5" size={40}/>
                            
                        </div>
                    </div>
                </div>

                 <div className="flex mx-auto mb-20 mt-36 xs:mx-20">
                   
                    <div className=" flex flex-col ml-0 float-left text-left transform translate-x-24 z-10 xs:translate-x-0 xs:transform">
                        <div className="flex float-leftt ml-0 mr-40 xs:mr-20 text-left space-x-24 xs:space-x-36">
                            <h3 className="text-1xl float-left font-poppins xs:text-2xl">Featured Project</h3>
                            <div className="border h-0 w-20 transform translate-y-3"></div>
                            <h3 className="text-2xl font-poppins font-semibold xs:text-3xl">02</h3>
                        </div>
                        
                        <h5 className="text-3xl font-poppins font-bold float-left ">Spotify Plug & Play</h5>
                        <p className="text-1xl font-poppins pt-5 xs:text-2xl">Webapp design & Development</p>
                        <div className=" flex shadow-md xs:translate-x-0 xs:transform-none rounded-md mt-10 bg-white-white transform h-32 pl-4 w-full text-black font-poppins">
                          <p className="p-4 xs:p-3">A fully functional Spotify Web app with user Authentication, Functionality to play and listen songs and much more.</p>
                        </div>
                        <div className="flex space-x-5 justify-start">
                            <FaGithub className="h-12 w-5 hover:text-red-400" />
                            <FaExternalLinkAlt className="h-12 w-5" size={40}/>
                        </div>
                    </div>
                     <div className=" max-w-full relative">
                        <Image src={SpotifyImage} objectFit="contain" className=" xs:invisible rounded-tr-full rounded-br-full rounded-bl-full opacity-50 hover:opacity-100 transition duration-500 ease-in-out"/>
                    </div>
                </div>

                <div className="flex mx-auto mb-20 mt-36 xs:m-20">
                    <div className=" max-w-full relative">
                        <Image src={DisplayImage} objectFit="contain" objectPosition="center" className=" hover:shadow-inner opacity-50 hover:opacity-100 rounded-b-full xs:invisible rounded-l-full transition duration-500 ease-in-out mix-blend-overlay"/>
                    </div>
                    <div className=" flex flex-col ml-0  text-right xs:text-left transform -translate-x-1/4 xs:transform-none ">
                        <div className="flex translate-x-2/4 ml-40 text-right space-x-14 xs:space-x-24">
                            <h3 className="text-2xl font-poppins font-semibold xs:text-3xl xs:float-left xs:text-left">03</h3>
                            <div className="border h-0 w-20 transform translate-y-3"></div>
                            <h3 className="text-1xl float-right text-right font-poppins xs:text-2xl">Featured Project</h3>
                        </div>
                        
                        <h5 className="text-3xl font-poppins font-bold float-right ">SossPay Wallet</h5>
                        <p className="text-1xl font-poppins pt-5 xs:text-2xl">UX/UI, Rebranding, Redesigning</p>
                        <div className=" flex shadow-md hover:shadow-lg xs:transform-none xs:translate-x-0 flxe-grow rounded-md mt-10 bg-white-white transform translate-x-1/5 h-32 pl-4 w-full text-black font-poppins text-left">
                          <p className="p-4">An Idea to re-design/re-build Airbnb website, Project completetion done using next js, Tailwindcss and other re-usable libraries and components.</p>
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
