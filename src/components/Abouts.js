import Image from "next/image";
import audileft from "@/assets/audileft.jpg";

export default function About() {
  return (
    <article className="mx-4">
      <div className="ml-20">
        <p className="font-semibold mb-1">Qui Sommes-Nous</p>
        <p className="text-3xl font-bold text-gray-900 w-3/5">
        Une expertise dédiée à l&apos;entretien et la réparation automobile
        </p>
      </div>
      <div className="flex mt-5">
        <div className="w-1/2 ml-2 mt-4">
          <Image
            className="mt-9 w-full h-96 rounded-lg object-cover"
            src={audileft}
            width={200}
            height={100}
            alt="Image Audi"
          />
        </div>
        <div className="w-1/2 pl-8 flex flex-col justify-center z-20">

          <p className="text-lg text-gray-600 mb-4">
            Chez Pathauto, nous sommes bien plus qu&apos;un simple garage. Nous
            partageons une passion commune pour l&apos;automobile, qui se reflète
            dans la qualité des services que nous offrons. Que ce soit pour un
            entretien régulier, des réparations complexes ou un diagnostic
            précis, notre équipe d&apos;experts est là pour vous accompagner à chaque
            étape.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Avec des années d&apos;expérience dans le domaine de la mécanique, nous
            mettons un point d&apos;honneur à offrir des services rapides et
            efficaces pour assurer la longévité de votre véhicule, tout en
            vous garantissant une tranquillité d&apos;esprit.
          </p>
          <p className="text-lg text-gray-600">
            Nous nous engageons à fournir un service personnalisé, avec une
            attention particulière aux détails, pour que chaque intervention
            soit à la hauteur de vos attentes.
          </p>
                  <h2 className="absolute z-10 text-9xl text-gray-600 font-bold opacity-5">A Propos</h2>

        </div>
      </div>
    </article>
  );
}
