import Image from "next/image"
import Header from "../components/Header"
import projectImage from '../images/travelodge.jpg'
import NextImage from '../images/next-js.svg'
import TailwindImage from '../images/tailwind.svg'
import Link from "next/link"
import ReactImage from '../images/react-2.svg'


function Travelodge() {
  return (
    <div>
      <Layout className="">
        
      </Layout>
      
    </div>
  )
}

export default Travelodge


export const Layout = () => {
  return(
    <>
      <div className=" max-w-7xl mx-auto ">
        <Header/> 
        
    </div>
    <AboutProject/>
    
    </>
  
  )
}

export const AboutProject = () => {
  return(
    <div className=" bg-gray-50">
      <div className="flex items-center space-x-20 font-poppins max-w-7xl mx-auto pt-20">
      <h1 className="text-5xl bg-yellow-400 text-black p-4">02</h1>
      <h2 className="text-3xl bg-blue-extraDark p-4">Sosspay UX/UI/Rebranding</h2>
      </div>
      <div className="pt-52 font-poppins max-w-7xl mx-auto pb-20">
        <h3 className="text-5xl pb-5 text-black  font-bold">About Project </h3>
        <p className="text-2xl text-black ">Currently Working as a freelance UX/UI Designer for Sosspay </p>
        <Link href={"/"}><button className=" bg-black p-5  mt-32">Back to Home</button></Link>
      </div>
      
      
    </div>
  )
}

