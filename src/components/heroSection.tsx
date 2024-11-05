import Image from "next/image";
export default function HeroSection() {
  return (
    <>
    <div className="flex flex-col md:flex-row justify-center items-center ">
      <div className="w-1/2 md:mt-0 mt-10">
        <h1 className="font-bold text-[32px] md:text-[40px] md:w-[496px]">
          IMPECCABLE CRAFTSMANSHIP AND FINESSE
        </h1>
        <p className="font-medium text-xl md:text-3xl text-[#787054] mt-3">
          An example of intricate workmanship and detail, elegant necklaces and
          long and short chains form a part of our desirable collection.
        </p>
        <button className="bg-[#A29875] font-medium text-3xl mt-4 text-white md:w-[288px] p-2 md:p-[10px] ">
          Explore Now
        </button>
      </div>
      <div className="w-[400px] md:w-[462px] mt-5 md:mt-10  ">
        <Image
          src={"/images/Hero_image.svg"}
          height={647}
          width={462}
          alt="hero_image"
          className="rounded"
        /> 
      </div>
    </div>
    </>
  );
}
