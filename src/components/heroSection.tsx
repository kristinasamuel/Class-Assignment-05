import Image from "next/image";
export default function HeroSection() {
  return (
    <>
    <div className="flex flex-col md:flex-row justify-center items-center">
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start mt-10 md:mt-0 ">
        <h1 className="font-bold text-[32px] md:text-[40px] text-center md:text-left w-full md:w-[496px]">
          IMPECCABLE CRAFTSMANSHIP AND FINESSE
        </h1>
        <p className="font-medium text-center md:text-left text-xl md:text-3xl text-[#787054] mt-4">
          An example of intricate workmanship and detail, elegant necklaces and
          long and short chains form a part of our desirable collection.
        </p>
        <button className="bg-[#A29875] font-medium text-3xl mt-4 text-center text-white p-2 md:p-[10px] hover:bg-[#c4b685]">
          Explore Now
        </button>
      </div>
      <div className="p-6 md:p-2 mt-5 md:mt-10 overflow-hidden ">
        <Image
          src={"/images/Hero_image.svg"}
          height={647}
          width={462}
          alt="hero_image"

        /> 
      </div>
    </div>
    </>
  );
}
