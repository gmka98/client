import Link from "next/link"
import Image from "next/image"
import Pathauto from "@/assets/pathauto.png"
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaTiktok } from "react-icons/fa";


export default function Footer() {
    return (
        <footer className="bg-white">
            <div className="flex justify-between items-center">
                <div>
                    <Image 
                    src={Pathauto}
                    width={50}
                    height={30}
                    alt="Pathauto logo"/>

                </div>
                <div>
                <ul className="flex  justify-center text-gray-700 ">
                    <li className="mr-5  hover:text-black hover:bg-custom-gradient transition-all ">A Propos</li>
                    <li className="mx-5  hover:text-black hover:bg-custom-gradient transition-all ">Competences</li>
                    <li className="mx-5  hover:text-black hover:bg-custom-gradient transition-all ">Services</li>
                </ul>

                </div>
                <div>
                    <ul className="flex">
                        <li className="mr-5 text-black   p-2">
                        <FaFacebook />
                        </li>
                        <li className="mr-5 text-black   p-2">
                        <GrInstagram />
                        </li>
                        <li className="mr-5 text-black   p-2">
                        <FaTiktok />
                        </li>
                    </ul>
                
                </div>
               

            </div>
            <hr class="h-px bg-gray-200 border-none dark:bg-gray-700"/>
            <div>
                <p class="text-center text-gray-500 dark:text-gray-400">© Pathauto 2024 - All rights reserved</p>
            </div>

        </footer>

    )
}
