import Image from "next/image";
import Wall from "@/assets/audiwallpapers.jpg";

export default function Call() {
  return (
    <section className="relative h-screen">
      <Image
        src={Wall}
        alt="Audi Wallpaper"
        layout="fill"
        objectFit="cover"
        className="absolute grayscale"
      />
      <div className="relative z-10  h-full flex items-center justify-center ">
        <div className="border-l-8 border-red-600  p-1 bg-black bg-opacity-25">
            <h1 className="text-white">Appelez-nous pour plus d&apos;informations</h1>
            <p className="text-white text-9xl font-bold">(+32) 456 317 638</p>
        </div>
      </div>
    </section>
  );
}
