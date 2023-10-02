import Link from "next/link";
import { useState } from 'react';

const Hero = () => {
  const title = 'Prismatic Power';
  const otherTitle = `Prismatic Power is a pioneering force in the renewable energy industry,
  dedicated to harnessing the boundless power of the sun to create a
  sustainable and brighter future. Established with a vision to revolutionize
  the energy landscape, we specialize in designing, installing, and financing
  commercial solar projects. At Prismatic Power, we are not just an energy
  company; we are the architects of a cleaner, greener world. `;
  const subtitle = `Lighting Up Your World with Solar Energy.`
  return (
    <div className='h-screen'>
      <section
        id="home"
        className="relative h-full z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container flex flex-col h-full align-bottom">
        <div className="h-3/5"></div>

          <div className="-mx-4 justify-center flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px]  "
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                {title}
                </h1>
                <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                {subtitle}
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  {/* <Link
                    href="https://nextjstemplates.com/templates/saas-starter-startup"
                    className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                   🔥 Engage
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </section>
    </div>
  );
};

export default Hero;
