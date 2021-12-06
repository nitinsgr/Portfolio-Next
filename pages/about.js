import Header from "../components/Header"
import Link from 'next/link'
import Image from 'next/image'
import Javascript from '../images/logo-javascript.svg'
import ReactIcon from '../images/react-2.svg'
import NextIcon from '../images/next.svg'
import NodeIcon from '../images/nodejs.svg'
import SassIcon from '../images/sass-1.svg'
import MongoIcon from '../images/mongodb-icon-1.svg'


function about() {
  
    return (
        <>
           
            <Header />
        
            <main className=" max-w-7xl mx-auto">
                <div className="flex font-poppins mt-32 space-x-5">
                    <h4 className="text-1xl">Few words about me</h4>
                    <div className="border h-0 w-16 transform translate-y-3"></div>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-9xl pt-10 font-poppins font-semibold">Hello !</h1>
                    <h1 className="text-9xl font-poppins font-medium pt-5">I'm Nitin Sagar</h1>
                    <h1 className="text-9xl font-poppins font-thin text-yellow-500 pt-5">I Design & Build Digital Experience & Interfaces </h1>
                </div>
                <div className="mt-40 flex flex-col mx-auto">
                    <p className="text-2xl pb-5 font-poppins">Hi there, I'm a multi talented human beign with almost year of experience in wide range of design and development disciplines.</p>

                    <p className="text-2xl font-poppins pb-5">You can call me a UX/UI design, developer and illustration artist by passion. professionaly I love to be called as a front-end designer/developer.</p>
                    <p  className="text-2xl font-poppins pb-10">I don't like to be define myself with work I've done, but I define myself with what type of work I want to do. I prefer to keep learning, love facing new challenges which kept me in this field. I like to develop my expertise in a number of areas over the courses in my life and career goal. I currently working remotely freelance client based projects and few personal projects to equip myself with vast knowledge of other disciplines.</p>
                    
                </div>
                <div className="flex flex-col">
                    <h3 className="text-2xl font-poppins">Here are a few technologies i've been working with recently</h3>
                    <div className="flex pb-10 pt-10  space-x-6">
                    <Image src={Javascript} className=" rounded-xl" width={100} height={100} objectFit="contain"/>
                    <Image src={ReactIcon} className="rounded-xl" width={100} height={100} objectFit="contain"/>
                    <Image src={NextIcon} className="rounded-xl" width={100} height={100} objectFit="contain"/>
                    <Image src={NodeIcon} className="rounded-xl" width={100} height={100} objectFit="contain"/>
                    <Image src={MongoIcon} className="rounded-xl" width={100} height={100} objectFit="contain"/>
                    <Image src={SassIcon} className="rounded-xl" width={100} height={100} objectFit="contain"/>
                    </div>
                </div>
                <div className="flex pb-20">
                    <Link href="./Resume-FrontEnd.pdf"><button className="text-2xl text-red-400 hover:bg-yellow-300 font-poppins font-semibold hover:pl-2 border-2 p-4 ">My Resume</button></Link>
                </div>
            </main>
        </>
    )
}

export default about
