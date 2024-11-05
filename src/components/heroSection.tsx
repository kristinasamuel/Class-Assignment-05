import Image from "next/image";
export default function HeroSection() {
  return (
    <>
    <div className="flex flex-col md:flex-row justify-center items-center ">
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start md:mt-0 mt-10 ">
        <h1 className="font-bold text-[32px] text-center md:text-left w-full md:text-[40px] md:w-[496px]">
          IMPECCABLE CRAFTSMANSHIP AND FINESSE
        </h1>
        <p className="font-medium md:text-left  text-center text-xl md:text-3xl text-[#787054] mt-3">
          An example of intricate workmanship and detail, elegant necklaces and
          long and short chains form a part of our desirable collection.
        </p>
        <button className="bg-[#A29875] font-medium text-3xl mt-4 items-center md:text-left text-white md:w-[288px] p-2 md:p-[10px] ">
          Explore Now
        </button>
      </div>
      <div className="flex flex-col justify-center items-center p-5 md:p-2 w-[400px] md:[462px] mt-5 md:mt-10 overflow-hidden ">
        <Image
          src={"/images/Hero_image.svg"}
          height={462}
          width={647}
          alt="hero_image"
          className="rounded"
        /> 
      </div>
    </div>
    </>
  );
}
