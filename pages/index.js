import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/Main'
import Navbar from '../components/Navbar'

export default function Home() {
  
    return (   
       
    <div className=" md:w-4/5 w-full h-fit m-auto">
      <Head>
        <title>
        Next.js E-commerce Product Page 
        </title>
      </Head>
      <div>
        <Navbar/>
      </div>  
      <div className="flex justify-between">
          <Main/>
      </div>
    </div>
)}
