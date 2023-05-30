import { useEffect } from "react";
import { Carousel, initTE } from "tw-elements";

const Slides = () => {
  useEffect(() => {
    initTE({ Carousel });
  });

  return (
    <div className="pt-10 px-36">
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
              className="block w-full h-[80vh] mx-w-full contain"
              alt="Motorbike Smoke"
            />
            <div className="absolute inset-x-[5%] bottom-10 hidden pb-12 pr-36 leading-tight font-semibold text-3xl text-white md:block">
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
            <div className="absolute inset-x-[5%] bottom-10 hidden pb-12 pr-36 leading-tight font-semibold text-3xl text-white md:block">
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
            <div className="absolute inset-x-[5%] bottom-10 hidden pb-12 pr-36 font-semibold leading-tight text-3xl text-white md:block">
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

{
  {
    /* <!-- Carousel controls - prev item--> */
  }
  /* <button
className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
type="button"
data-te-target="#carouselDarkVariant"
data-te-slide="prev"
>
<span className="inline-block h-8 w-8 dark:grayscale">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5L8.25 12l7.5-7.5"
    />
  </svg>
</span>
<span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
  Previous
</span>
</button>
{/* <!-- Carousel controls - next item--> */
}
{
  /* <button
className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
type="button"
data-te-target="#carouselDarkVariant"
data-te-slide="next"
>
<span className="inline-block h-8 w-8 dark:grayscale">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
</span>
<span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
  Next
</span>
</button>  */
}
