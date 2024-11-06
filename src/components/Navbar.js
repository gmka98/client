import React from "react"
import Image from "next/image"
import Pathauto from "@/assets/pathauto.png"
import Link from "next/link"

export default function Navbar(){
    return(
        

<nav className=" ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
    <div>
    <Link href="/">

      <Image
      src={Pathauto}
      width={50}
      height={30}
      alt="pathauto logo"/>
      </Link>

    </div>
    <div>
      <ul className="flex  justify-center text-gray-700 ">
        <li className="mr-5 hover:border-2 border-black hover:border-solid rounded-full p-2 hover:text-black hover:bg-custom-gradient transition-all capitalize">à Propos</li>
        <li className="mx-5 hover:border-2 border-black hover:border-solid rounded-full p-2 hover:text-black hover:bg-custom-gradient transition-all ">Competences</li>
        <li className="mx-5 hover:border-2 border-black hover:border-solid rounded-full p-2 hover:text-black hover:bg-custom-gradient transition-all ">Services</li>

      </ul>
    </div>
    <div>
      <Link href="/">
      <button className="bg-black text-white rounded-full p-2 px-2">
        Contact
      </button>
      </Link>

    </div>
  </div>
</nav>
    )
}