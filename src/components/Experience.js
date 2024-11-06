import Link from "next/link";

export default function Experience() {
    return (
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center z-20 font-medium">Compétences</p>
          <h2 className="inset-x-0 absolute z-10 text-9xl text-gray-600 font-bold opacity-5">Compétences</h2>
          <div className="z-30 mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
            <div className="relative w-full text-center lg:text-left lg:w-2/4">
              <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">
                Maîtrisez chaque aspect de votre véhicule avec notre expertise
              </h2>
            </div>
            <div className="relative w-full text-center lg:text-left lg:w-2/4">
              <p className="text-lg font-normal text-gray-500 mb-5">
                Nous mettons à votre disposition notre savoir-faire technique pour un entretien et des réparations efficaces et durables.
              </p>
              <Link
                href="#"
                className="flex flex-row items-center justify-center gap-2 text-base font-semibold text-black lg:justify-start hover:text-indigo-700"
              >
                Découvrez nos services
               
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            {/* Compétence 1 */}
            <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-black">
              <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.7222 11.6667V7.22225C24.7222 5.99495 23.7273 5 22.5 5H4.72222C3.49492 5 2.5 5.99492 2.5 7.22222V22.7778C2.5 24.0051 3.49492 25 4.72222 25H22.5C23.7273 25 24.7222 24.005 24.7222 22.7777V17.7778M20.8333 17.7778H25.2778C26.5051 17.7778 27.5 16.7829 27.5 15.5556V13.8889C27.5 12.6616 26.5051 11.6667 25.2778 11.6667H20.8333C19.606 11.6667 18.6111 12.6616 18.6111 13.8889V15.5556C18.6111 16.7829 19.606 17.7778 20.8333 17.7778Z"
                    stroke="black"
                    strokeWidth="2"
                  ></path>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                Diagnostique Précis
              </h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                Analyse approfondie de vos systèmes mécaniques et électroniques pour identifier rapidement les problèmes.
              </p>
            </div>
            {/* Compétence 2 */}
            <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-black">
              <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.375 15.8571C16.1009 15.8571 17.5 14.458 17.5 12.7321C17.5 11.0062 16.1009 9.6071 14.375 9.6071C12.6491 9.6071 11.25 11.0062 11.25 12.7321C11.25 14.458 12.6491 15.8571 14.375 15.8571ZM14.375 15.8571V20.8571M3.75 13.2264V15.2343C3.75 17.6868 3.75 18.9131 4.27747 19.9685C4.80493 21.0239 5.78567 21.76 7.74715 23.2322L8.57248 23.8516C11.4626 26.0208 12.9077 27.1054 14.5753 27.1054C16.243 27.1054 17.688 26.0208 20.5782 23.8516L21.4035 23.2322C23.365 21.76 24.3457 21.0239 24.8732 19.9685C25.4006 18.9131 25.4006 17.6868 25.4006 15.2343V13.2264C25.4006 9.95932 25.4006 8.32576 24.546 7.05852C23.6913 5.79128 22.1768 5.17918 19.1477 3.95499L18.3223 3.62144C16.4724 2.87381 15.5475 2.5 14.5753 2.5C13.6032 2.5 12.6782 2.87381 10.8283 3.62144L10.003 3.95499C6.97389 5.17919 5.45934 5.79128 4.60467 7.05852C3.75 8.32576 3.75 9.95932 3.75 13.2264Z"
                    stroke="black"
                    strokeWidth="2"
                  ></path>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                Réparations rapides
              </h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                Des interventions mécaniques rapides et efficaces pour minimiser l&apos;immobilisation de votre véhicule.
              </p>
            </div>
            {/* Compétence 3 */}
            <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-black">
              <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.1034 20.8584C12.2338 19.4784 12.3587 18.2838 12.3225 17.1894C12.2735 15.7663 11.6835 14.3588 10.6504 13.3411C9.89306 12.5981 9.08744 11.7194 8.66492 10.6515C8.27244 9.66359 8.07412 8.58664 8.10535 7.50006C8.13194 6.56055 7.3371 5.83746 6.3805 5.85861C5.35434 5.88089 4.60922 6.66741 4.58986 7.49619C4.51283 10.6972 5.38879 13.8356 7.08464 16.3981C8.35892 18.4561 10.147 20.0895 12.1034 20.8584ZM12.1034 20.8584C12.1034 20.8584 13.1564 24.7977 15.7047 25.4169C18.253 26.0362 18.6337 22.7042 18.6337 22.7042C18.6337 22.7042 19.6874 22.3342 19.9992 21.3646C20.3109 20.395 19.2952 19.9087 19.2952 19.9087L18.2007 19.4432"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                Entretien complet
              </h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                Entretien régulier de votre véhicule, y compris le contrôle technique, pour assurer sa longévité.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  