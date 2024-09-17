import Audi from "@/assets/R.jpg";

export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: `url(${Audi.src})`,
      }}
      className="bg-center bg-gray-700 bg-blend-multiply pb-64"
    >
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
        ENTRETIEN DIAGNOSTIQUE REPARATION  
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
        NOUS CHOYONS VOTRE VOITURE COMME LA NOTRE
        </p>
        
      </div>
    </section>
  );
}
