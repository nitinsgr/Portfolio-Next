import Image from "next/image"
import Link from "next/link"

function Work() {
    return (
        <div>
            <WorkHeader/>
            <ProjectOne/>
        </div>
    )
}

export default Work


export const WorkHeader = () => {
    return(
        <div>
            <div className=" md:max-w-7xl md:mx-auto mt-20  ">
                <h1 className=" text-4xl md:text-8xl font-bold font-poppins md:w-5/6 p-2 ">Case Study & Work</h1>
            </div>
        </div>
    )
}


export const ProjectOne = () => {
 return(
     <div className="m-5">
        <div className="max-w-7xl mx-auto gap-5 ">
           <Link href={'https://travelodgecollection.netlify.app/'}>
           <div className=" flex  md:flex-row items-center space-x-5 mt-20 hover:bg-yellow-500 transform transition-all  duration-500  ease-in-out cursor-pointer">
            <h1 className=" text-3xl md:text-6xl font-poppins transition transform ">Travelodge Website </h1>
            <hr className=" border-white-white border  md:w-2/6 w-3/5 mt-5"/>
            </div>
           </Link> 
           <Link href={'/Sosspay'}>
           <div className=" flex items-center space-x-5 hover:bg-yellow-500  transform transition-all  duration-500 ease-in-out cursor-pointer mt-20">
            <h1 className=" text-3xl md:text-6xl font-poppins">SOSSPAY Freelance </h1>
            <hr className=" border-white-white border w-3/5 md:w-2/6 mt-5"/>
            </div>
           </Link>
          
          <Link href={'https://arizonainteriors.netlify.app/'}>
          <div className=" flex items-center space-x-5 hover:bg-yellow-500  transform transition-all  duration-500 ease-in-out cursor-pointer mt-20">
            <h1 className=" text-3xl md:text-6xl font-poppins ">ArizonaInteriors </h1>1
            <hr className=" border-white-white border w-3/5 md:w-2/6 mt-5"/>
            </div>
          </Link>
           <Link href={'https://markstudio.netlify.app/'}>
           <div className=" flex items-center space-x-5 hover:bg-yellow-500  transform transition-all  duration-500 ease-in-out cursor-pointer mt-20">
            <h1 className=" text-3xl md:text-6xl font-poppins">MarkStudio </h1>
            <hr className=" border-white-white border md:w-2/6  w-3/5 mt-5"/>
            </div>
           </Link>
           
        </div>
     </div>
 )
}

//sdsdds