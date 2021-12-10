import Image from 'next/image'
import CoverImage from '../images/Capture.PNG'
import DisplayImage from '../images/Desktop.jpg'
import Sosspay from '../images/SOSSPAY.jpg'
import SpotifyImage from '../images/Spotify.jpg'
import { FaBeer, FaExternalLinkAlt, FaFacebook, FaFacebookF, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import Link from 'next/link'

function Work() {
    return (
        <>
        <main className=" max-w-7xl mx-auto mt-32 md:mb-52 text-center ">
                <h1 className="text-5xl lg:text-7xl font-semibold font-poppins">Case Studies & Work</h1>
               
            </main>
             <main className="max-w-7xl mx-auto">
                 <div className="flex mx-auto mb-20 mt-20 flex-row md:mb-60 ">
                     <div className="relative hidden md:block invisible md:visible h-2 ">
                        <Image src={DisplayImage} objectFit="contain" objectPosition="" className="rounded-b-full rounded-l-full"/>
                    </div> 
                    <div className=" flex flex-col">
                         <div className="flex text-center space-x-2 items-center justify-evenly">
                            <h3 className="text-1xl font-poppins md:text-2xl">01</h3>
                            <div className="border h-0 w-5  transform translate-y-0"></div>
                            <h3 className="text-1xl md:text-2xl font-poppins">Featured Project</h3>
                        </div>
                         
                        <h5 className="text-2xl text-center font-poppins font-bold md:text-right">Travel & Hotel Booking</h5>
                        <p className="text-1xl text-center md:text-right font-poppins pt-5">Website Re-design & Development</p>
                        <div className="text-left bg-white-white text-black m-2 font-poppins">
                          <p className="p-4">Redesigned and Rebuilt Airbnb website using nextjs, Tailwindcss and other reusable libraries.Fully authenticated, Mapbox and much more.</p>
                        </div>
                         <div className="flex space-x-5 justify-start md:justify-end pl-10">
                            <FaGithub className="h-7 w-5 hover:text-red-400 " />
                            <Link href="https://airbnb-next-tailwind-six.vercel.app/"><FaExternalLinkAlt className="h-7 w-5 cursor-pointer" size={40}/></Link>
                            
                        </div> 
                    </div>
                </div>
                <div className="flex mx-auto mb-20 md:pt-56 flex-row md:mb-56">
                    
                    <div className=" flex flex-col">
                         <div className="flex flex-row-reverse text-center space-x-2 items-center justify-evenly">
                            <h3 className="text-1xl font-poppins md:text-2xl">02</h3>
                            <div className="border h-0 w-5  transform translate-y-0"></div>
                            <h3 className="text-1xl md:text-2xl">Featured Project</h3>
                        </div>
                         
                        <h5 className="text-2xl text-center font-poppins font-bold md:text-left">Spotify playlist & Profile</h5>
                        <p className="text-1xl text-center md:text-left font-poppins pt-5">Website Re-design & Development</p>
                        <div className="text-left bg-white-white text-black m-2 font-poppins">
                          <p className="p-4">Fully Functional spotify app with all featues, simply plug and play on your local browser. Nextjs 12, Nextauth, Tailwindcss and much more..</p>
                        </div>
                         <div className="flex space-x-5 justify-start md:justify-start pl-2">
                            <FaGithub className="h-7 w-5 hover:text-red-400 " />
                            <Link href="https://airbnb-next-tailwind-six.vercel.app/"><FaExternalLinkAlt className="h-7 w-5 cursor-pointer" size={40}/></Link>
                            
                        </div> 
                    </div>
                    <div className="relative hidden md:block invisible md:visible h-10 ">
                        <Image src={SpotifyImage} objectFit="contain" objectPosition="" className="rounded-r-full rounded-b-full"/>
                    </div> 
                </div>

                <div className="flex mx-auto mb-20 mt-20 flex-row md:pt-64 ">
                     <div className="relative hidden md:block invisible md:visible h-2 ">
                        <Image src={Sosspay} objectFit="contain" objectPosition="" className="rounded-b-full rounded-l-full"/>
                    </div> 
                    <div className=" flex flex-col">
                         <div className="flex text-center space-x-2 items-center justify-evenly">
                            <h3 className="text-1xl font-poppins md:text-2xl">03</h3>
                            <div className="border h-0 w-5  transform translate-y-0"></div>
                            <h3 className="text-1xl md:text-2xl font-poppins">Featured Project</h3>
                        </div>
                         
                        <h5 className="text-2xl text-center font-poppins font-bold md:text-right">Sosspay Wallet App & Website</h5>
                        <p className="text-1xl text-center md:text-right font-poppins pt-5">UX/UI & Rebranding</p>
                        <div className="text-left bg-white-white text-black m-2 font-poppins">
                          <p className="p-4">Project I've been working on currently. My taks is to manage and design the app and website to provide better digital experience.</p>
                        </div>
                         <div className="flex space-x-5 justify-start md:justify-end pl-10">
                            <FaGithub className="h-7 w-5 hover:text-red-400 " />
                            <Link href="https://airbnb-next-tailwind-six.vercel.app/"><FaExternalLinkAlt className="h-7 w-5 cursor-pointer" size={40}/></Link>
                            
                        </div> 
                    </div>
                </div>
                
                 
            </main> 

        

            </>
        
    )
}

export default Work
