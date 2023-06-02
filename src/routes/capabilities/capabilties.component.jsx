import { useState } from "react";

import Carousel from "../../components/carousel/carousel.component";
import CapabilitiesGridImages from "../../components/capabilities-utility/capabilities.grid.component";
import Reveal from "../../utility/reveal";

const Capabilities = () => {
  const [text4, setText4] = useState(false);

  const onClickHandler4 = () => {
    setText4(!text4);
  };
  return (
    <>
      <div className="md:px-44 px-6">
        <Reveal delay={0.5} y1={-50} y2={0}>
          <h1 className="md:text-7xl text-3xl font-bold leading-none tracking-wider">
            Our Capabilities
          </h1>
        </Reveal>
      </div>

      {/* CAROUSEL */}
      <Carousel />

      <div className="md:px-36 px-6">
        <div className="grid px-8 border-b-2 border-black py-16">
          <p className="md:text-3xl text-2xl leading-tight tracking-wide font-bold ">
            Maximizing the potential of technology within your company requires
            a mindset shift. Our strategic consulting is backed by real-world
            results. We don't just talk about transformation; we make it real.
          </p>
        </div>
      </div>

      {/* GRID ITEMS */}
      <div className="grid md:grid-cols-2 pt-10">
        <CapabilitiesGridImages
          translate1={"md:translate-y-[90%]"}
          translate2={"md:translate-y-[90%]"}
          translate3={"md:translate-y-[70%]"}
        />

        <div className="relative text-white overflow-hidden w-full h-[80vh] bg-[url('https://digitalesque.xyz/static/ae893a2dff3e538a678b494e9561958f/0de74/pe.webp')] bg-cover bg-center">
          <div className="h-[80vh] bg-gradient-to-t from-black via-transparent to-transparent">
            <div
              className={`flex flex-col justify-center md:px-10 px-6 content-end overlay transition-transform duration-500 ease-in-out transform  ${
                text4
                  ? "md:translate-y-[60%] translate-y-[40%]"
                  : "translate-y-full h-[93%]"
              }`}
            >
              <button
                onClick={onClickHandler4}
                className="flex w-full justify-between items-center text-2xl font-extrabold text-white"
              >
                <p>Process Reengineering</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className={`w-8 h-8 transition-all transition-transform duration-300 ease-in-out ${
                    text4 ? "rotate-45" : "rotate-0"
                  }`}
                >
                  <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
                </svg>
              </button>
              <div
                className={`grid grid-cols-1 self-center overlay transition-transform duration-300 ease-in-out transform ${
                  text4 ? "" : "h-[100vh]"
                }`}
              >
                <p className="pt-5">
                  We support businesses and organizations desirous of bringing
                  overall transformation in their methodology, making it (more)
                  efficient and modern. This can be measured to restructure
                  formal procedures, change in existing processes, and also
                  overall changes in the style of functioning and management.
                </p>
                <p className="pt-3">
                  By taking a step back, our strategists can analyze areas like
                  supply chain, customer experience, finance operations, etc. to
                  embed emerging technologies and intelligent workflows to
                  improve the business/organization holistically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Capabilities;
