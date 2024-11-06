import React, { useEffect } from "react";
import KeenSlider from "keen-slider";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";

// Import images for each service
import maintenance from "@/assets/mecanique.jpg";
import repairImage from "@/assets/repair.jpg";
import inspectionImage from "@/assets/entretien.jpg";
import diagnosticImage from "@/assets/diagnostic.jpg";

const ServicesSlide = ({ title, description, image }) => {
  return (
    <div className="keen-slider__slide">
      <blockquote className="flex h-full flex-col justify-between  border-black border-2 rounded-2xl p-6 shadow-sm sm:p-8 lg:p-12">
        <div>
          <Image className="w-full h-48 object-cover mb-4" src={image} alt={title} />
          <div className="mt-4">
            <p className="text-2xl font-bold text-black sm:text-3xl">{title}</p>
            <p className="mt-4 leading-relaxed text-gray-700">{description}</p>
          </div>
        </div>

        <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
          &mdash; Pathauto Services
        </footer>
      </blockquote>
    </div>
  );
};

export default function Service() {
  useEffect(() => {
    const keenSlider = new KeenSlider("#keen-slider", {
      loop: true,
      drag: true,
      slides: {
        origin: "center",
        perView: 1.25,
        spacing: 16,
      },
      breakpoints: {
        "(min-width: 1024px)": {
          slides: {
            origin: "auto",
            perView: 1.5,
            spacing: 32,
          },
        },
      },
    });

    return () => keenSlider.destroy(); // Cleanup on unmount
  }, []);

  return (
    <section className="mx-4">
      <h2 className="text-9xl uppercase z-10 absolute top-98 inset-x-0 text-center text-gray-100 font-medium opacity-10">
        Services
      </h2>
      <h3 className="text-center text-3xl mt-16 z-20 font-medium">Nos Services</h3>
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Des Services à la Hauteur de Vos Attentes !
            </h2>
            <p className="mt-4 text-gray-700">
              Nous proposons une gamme complète de services pour maintenir et réparer votre véhicule, garantissant ainsi sa sécurité et sa performance sur la route.
            </p>
          </div>

          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <div id="keen-slider" className="keen-slider">
              <ServicesSlide
                title="Entretien Petit et Grand"
                description="Nous offrons des services d'entretien régulier pour tous types de véhicules, assurant un bon fonctionnement et une longue durée de vie."
                image={maintenance}
              />
              <ServicesSlide
                title="Réparations Mécaniques"
                description="Nos experts effectuent des réparations sur tout type de problème mécanique, avec des pièces de haute qualité."
                image={repairImage}
              />
              <ServicesSlide
                title="Préparation au Contrôle Technique"
                description="Nous préparons votre véhicule pour le contrôle technique, en vérifiant tous les points essentiels pour qu'il passe sans souci."
                image={inspectionImage}
              />
              <ServicesSlide
                title="Diagnostic et Recherche de Panne"
                description="Grâce à nos outils de diagnostic avancés, nous identifions rapidement les pannes mécaniques et électroniques de votre véhicule."
                image={diagnosticImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
