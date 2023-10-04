import Image from "next/image";

interface FeatureBlockProps {
  title: string;
  description: string;
  image: string;
  isReverse?: boolean;
}

const FeatureBlock = ({ description, image, isReverse = false, title}: FeatureBlockProps) => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className={`container `}>
        <div className={`-mx-4 flex flex-wrap items-center  ${isReverse ? 'flex-row-reverse' : 'flex-row'} `}>
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src={`/images/${image}`}
                style={{objectFit: 'contain'}}
                alt="about image"
                fill
              />
            </div>
          </div>
         <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  {title}
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureBlock;
