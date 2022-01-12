import Image from "next/image"
import Header from "../components/Header"
import Arizona from '../images/ArizonaImage.png'
import NextImage from '../images/html-1.svg'
import TailwindImage from '../images/css-3.svg'
import Link from "next/link"
import ReactImage from '../images/bootstrap.svg'
import Javascriptmage from '../images/logo-javascript.svg'



function ArizonaInteriors() {
  return (
    <div>
      <Layout className="">
        
      </Layout>
      
    </div>
  )
}

export default ArizonaInteriors


export const Layout = () => {
  return(
    <>
      <div className=" max-w-7xl mx-auto ">
        <Header/> 
    </div>
     <ProjectImage/>    
     <AboutProject/>
    <ProjectDesc />
     <Intro/>
     <Technology/>
     
    </>
  
  )
}

export const AboutProject = () => {
  return(
    <div className=" bg-gray-50">
      <div className="flex items-center space-x-20 font-poppins max-w-7xl mx-auto pt-20">
      <h1 className="text-5xl bg-yellow-400 text-black p-4">03</h1>
      <h2 className="text-3xl bg-blue-extraDark p-4">ArizonaInteriors Website Design/Development</h2>
      </div>
      <div className="pt-52 font-poppins max-w-7xl mx-auto pb-20">
        <h3 className="text-5xl pb-5 text-black  font-bold">About Project </h3>
        <p className="text-2xl text-black ">ArizonaInteriros is a website/portfolio project made for interior designer so they can provide rich attractive experience to users who seeking experienced interior designer for their houses </p>
      </div>
    </div>
  )
}

export const ProjectDesc = () => {
  return  (
    <div className=" bg-gray-50">
    <div className="grid grid-cols-3 gap-2font-poppins w-2/4 bg-yellow-500 p-4 max-w-7xl text-white-white mx-auto ">
        <div className="flex flex-col border-r border-l text-center  ">
          <h2 className="text-2xl">Year</h2>
          2021
        </div>
        <div className="flex flex-col text-center border-r ">
          <h2 className="text-2xl">Work</h2>
          Freelance/Personal
        </div>
        <div className="flex flex-col text-center border-r">
          <Link href={'https://travelodgecollection.netlify.app/'}><h2 className="text-2xl cursor-pointer">Link</h2></Link>
          Visit Project
        </div>
    </div>
  </div>
  )
}

export const ProjectImage  = () => {
  return(
    <div className=" mt-20 mb-20 ml-20 mr-20 hover:grayscale-0 hover:filter">
      <Image src={Arizona}  />
    </div>
  )
}

export const Intro = () => {
  return(
    <div className=" bg-gray-50 h-500 font-poppins">
      <div className=" max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold text-black pt-20 pb-5">Introduction</h1>
        <div className="p-5 bg-blue-extraDark"> 
        <p className=" w-3/4 text-2xl text-white-white pl-10 pt-10 pb-10">Project took around 2 weeks more or less. It was challenging to provide better User expeirence and User interface. Gathering and evaluating user Requirement, illustrating design ideas and mapping the concept.</p>
          
        </div>
 
      </div>
    </div>
  )
}

export const Technology = () =>{
  return  (
    <div className="bg-gray-50 h-500">
      <div className=" max-w-7xl mx-auto">
      <h1 className="text-6xl text-black font-bold">Technology & Language</h1>
       <div className=" grid grid-cols-4 w-3/4 mt-10">
        <Image src={NextImage} width={80} height={80} />
        <Image src={TailwindImage} width={90} height={80} />
        <Image src={ReactImage} width={80} height={80} />
        <Image src={Javascriptmage} width={80} height={80} />
       </div>
       <Link href={"/"}><button className=" bg-black p-5  mt-32">Back to Home</button></Link>
      </div>
    </div>
  )
}