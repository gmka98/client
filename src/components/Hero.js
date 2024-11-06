"use client";
import Audibg from "@/assets/audibg.jpeg";
import { motion } from "framer-motion"


import Image from "next/image";
import { IconContext } from "react-icons";
import { TbClock } from "react-icons/tb"; // Correction de l'icône
import { GiSkills } from "react-icons/gi";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


export default function Hero() {
  return (
    <section className="mt-3 mx-4">
      <div className="">
        <motion.h2
         initial={{ x: -200, opacity: 0 }} // Position initiale hors écran à gauche
         animate={{ x: 0, opacity: 1 }} // Animation vers la droite avec apparition
         transition={{ duration: 2 }} // Durée de l'animation en secondes
         exit={{ x: 200, opacity: 0 }} // Optionnel : déplacement vers la droite en sortie
         drag="x" // Drag limité à l'axe horizontal
         className="text-7xl font-semibold z-50 mb-9  w-4/5 mt-9">
          Pathauto – Votre partenaire en entretien et réparations automobiles
        </motion.h2>
        
      </div>
      <div className="flex ">
      <div className="w-1/2 ">
        <p className=" ">
        Confiez-nous votre voiture pour un entretien de qualité, une préparation au contrôle
        technique ou des réparations mécaniques. Pathauto met à votre service son expertise pour garder votre véhicule en parfait état de marche.
        </p>
        <div className="flex items-center mt-10">
          <button className="ml-4 p-3 mt-5 border-2 border-solid border-black bg-black text-white rounded-lg hover:text-black hover:bg-white">
          Appelez Maintenant
          </button>
        <div>
          <ul className="flex ">
            <li className="ml-5 mt-5 text-white bg-[#1877f2] border-2 border-solid rounded-full p-2">
              <FaFacebook />
            </li>
            <li className="ml-5 mt-5  text-white bg-[#cc39a4] border-2 border-solid rounded-full p-2">
              <GrInstagram />
            </li>
            <li className="ml-5 mt-5  text-white bg-black border-2 border-solid rounded-full p-2">
              <FaTiktok />
            </li>
            <li className="ml-5 mt-5  text-white bg-[#00ff00] border-2 border-solid rounded-full p-2">
              <FaWhatsapp />
            </li>
          </ul>
        </div>

        </div>
      </div>
      <div className="flex">
        <Image
          className="  right-10 grayscale  rounded-lg ml-44 relative -top-24 drop-shadow-2xl"
          src={Audibg}
          alt="Audi"
          width={500}
          height={500}
        />
        </div>
      </div>
   
    </section>
  );
}
