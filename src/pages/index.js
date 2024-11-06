import Image from "next/image";
import localFont from "next/font/local";
{/* import components */}
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Abouts from "@/components/Abouts"
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";

import Services from "@/components/Services";
import Call from "@/components/Call";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <Abouts/>
    <Experience/>
    <Services/>
    <Call/>
    <Footer/>
    
   </div>
  );
}
