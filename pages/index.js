import Head from 'next/head'
import Image from 'next/image'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Info from '../components/Info'
import Work from '../components/Work'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
  <>
      <Header />
      <Info />
      <div>
        <Work/>
      </div>
     
      <div>
        <Contact/>
      </div>
      

  </>
  )
}


