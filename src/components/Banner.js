import Image from "next/image"

{/* Assets */}
import Expertise from "@/assets/experience.png"
import Flexibilite from "@/assets/flexibilite.png"
import Rapidite from "@/assets/rapide.png"
import Services from "@/assets/services.png"


export default function Banner(){
    return(
        <div className="p-6 py-12 border-solid border-2 rounded-full border-black">
	<div className="container mx-auto">
		<div >
			<ul className="flex flex-col lg:flex-row items-center justify-between">
                <li>
                    <Image
                    className="w-10 h-10 rounded " alt="Default avatar" 
                    src={Expertise}/>
                    <p>Expertise</p>
                </li>
                <li>
                    <Image
                    className="w-10 h-10 rounded"  alt="Default avatar" 
                    src={Flexibilite}/>
                    <p>Fiabilite</p>
                </li>
                <li>
                    <Image
                    className="w-10 h-10 rounded"  alt="Default avatar" 
                    src={Rapidite}/>
                    <p>Rapidite</p>
                </li>
                <li>
                    <Image
                    className="w-10 h-10 rounded"  alt="Default avatar" 
                    src={Services}/>
                    <p>Services Personnalise</p>
                </li>
            </ul>
		</div>
	</div>
</div>
    )
} 