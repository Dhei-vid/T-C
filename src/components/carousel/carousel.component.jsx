import { useEffect } from "react";
import { Carousel, initTE } from "tw-elements";

const Slides = () => {
  useEffect(() => {
    initTE({ Carousel });
  });

  return (
    <div className="pt-10 md:px-36 px-6">
      <div
        id="carouselDarkVariant"
        className="relative"
        data-te-carousel-init
        data-te-carousel-slide
      >
        {/* <!-- Carousel indicators --> */}
        <div
          className="absolute inset-x-0 bottom-0 z-[2] mx-[5%] mb-5 flex list-none"
          data-te-carousel-indicators
        >
          <button
            data-te-target="#carouselDarkVariant"
            data-te-slide-to="0"
            data-te-carousel-active
            className="mx-[3px] box-content h-[3px] w-[70px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-[#148F7C] bg-clip-padding p-0 -indent-[999px] opacity-30 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            data-te-target="#carouselDarkVariant"
            className="mx-[3px] box-content h-[3px] w-[70px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-[#148F7C] bg-clip-padding p-0 -indent-[999px] opacity-30 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            data-te-slide-to="1"
            aria-label="Slide 1"
          ></button>
          <button
            data-te-target="#carouselDarkVariant"
            className="mx-[3px] box-content h-[3px] w-[70px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-[#148F7C] bg-clip-padding p-0 -indent-[999px] opacity-30 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            data-te-slide-to="2"
            aria-label="Slide 1"
          ></button>
        </div>

        {/* <!-- Carousel items --> */}
        <div className="relative w-full border-t-2 border-black pt-8 overflow-hidden after:clear-both after:block after:content-['']">
          {/* <!-- First item --> */}
          <div
            className="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-fade
            data-te-carousel-item
            data-te-carousel-active
          >
            <img
              src="https://digitalesque.xyz/static/dc69b4dd03b578f3e267015ef3f98204/9392e/PURPOSE.jpg"
              className="block w-full h-[80vh] mx-w-full"
              alt="Motorbike Smoke"
            />
            <div className="absolute inset-x-[5%] bottom-10 pb-10 md:pr-36 font-semibold leading-tight md:text-3xl text-[1.4rem] text-white md:block">
              <p>
                Our PURPOSE is to improve African lives through the digital
                transformation of Africa one project at a time.
              </p>
            </div>
          </div>

          {/* <!-- Second item --> */}
          <div
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-fade
            data-te-carousel-item
          >
            <img
              src="https://digitalesque.xyz/static/532f9d58ac3d83551c92bd43f0d04465/08c90/VISION.jpg"
              className="block w-full h-[80vh]"
              alt="Mountaintop"
            />
            <div className="absolute inset-x-[5%] bottom-10 pb-10 md:pr-36 font-semibold leading-tight md:text-3xl text-[1.4rem] text-white md:block">
              <p>
                Our VISION is to be the premier human-centric digital
                transformation agency in Africa.
              </p>
            </div>
          </div>

          {/* <!-- Third item --> */}
          <div
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-fade
            data-te-carousel-item
          >
            <img
              src="https://digitalesque.xyz/static/f33e43bfd4e86c30465c17b18c159e8f/db637/MISSION.jpg"
              className="block w-full h-[80vh]"
              alt="Woman Reading a Book"
            />
            <div className="absolute inset-x-[5%] bottom-10 pb-10 md:pr-36 font-semibold leading-tight md:text-3xl text-[1.4rem] text-white md:block">
              <p>
                Our MISSION is to offer bespoke, trusted advanced digital
                solutions to the challenges of individuals, businesses, and
                governments in Africa by transforming systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slides;
