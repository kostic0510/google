import Head from 'next/head'
import Image from 'next/image'
import Avatar from "../components/Avatar"
import { MicrophoneIcon ,ViewGridIcon} from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/outline'
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Head>
        <title>Google</title>Will
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicons.ico" />
      </Head>

     
       <header className="flex w-full p-5 justify-between text-sm text-gray-700">
       <div className="flex space-x-4 items-center">
       <p className="link">About</p>
       <p className="link">Store</p>
       </div>
       <div className="flex space-x-4 items-center">
       <p className="link">Gmail</p>
       <p className="link">Images</p>
       <ViewGridIcon className="h-10 w-10 p-2 rounded-full cursor-pointer hover:bg-gray-100"/>
       <Avatar url='https://avatars.githubusercontent.com/u/58090261?s=400&u=57478c3f0a41eccf3e1fcc350116f2f933fbef29&v=4' />
       </div>
       </header>

       <form className="flex flex-col items-center mt-38 flex-grow w-4/5">
       <Image src="https://png2.cleanpng.com/sh/e1ddef276148a39234dd87af84cb8076/L0KzQYm3U8MxN5Nnj5H0aYP2gLBuTfdwd5hxfZ9yLXAwd7F2hBxmNZ10f9G2Z3Byd73sTcViapY1e6kEZUDkQIeCTsc1PWc7TqI8MUW1QoW3VMQ4O2o3SKM3cH7q/kisspng-google-i-o-google-logo-google-5abe0c79e0a069.7456660315224044739201.png"
       height={100}
       width={300}
       />
       <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
       <SearchIcon className="h-5 mr-3 text-gray-500"/>
       <input type="text" className="flex-grow focus:outline-none" />
       <MicrophoneIcon className="h-5"/>
       </div>
       <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
       <button className="btn">  Google Search </button>
       <button className="btn"> I'm feeling Lucky </button>
       </div>
       <Footer />
       </form>
       
    </div>
  )
}
