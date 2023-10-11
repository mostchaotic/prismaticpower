import Image from "next/image";

export interface SinglePersonProps {
  about: string;
  image: string;
  name: string;
  role: string;
}

const SinglePerson = ({about,image,name,role}: SinglePersonProps) => {

  return (
    <div className="wow fadeInUp overflow-hidden rounded-md dark:bg-dark">
      <div className={`${name === 'yamil' ? 'transform: translateY(60)': ''}, relative block lg:h-[450px] w-full z-0 overflow-hidden`}>
        <Image src={image} alt={`picture-of-${name}`} width={500} height={175} />
      </div>
      {/* <div className="p-6 sm:p-8 sm-h-4 lg:h-58 md:py-8"> */}
      <div className="z-50 p-2">
        <h3>{name}</h3>
      {/* </div> */}
        <p className="pb-6 text-base font-thin text-body-color">
          {role}
        </p>
        <p className="">
          {about}
        </p>
      </div>
    </div>
  )
}

export default SinglePerson;