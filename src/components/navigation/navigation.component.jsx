import { useCallback, useState } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Reveal from "../../utility/reveal";

const Navigation = () => {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState(false);

  const toggleMenu = useCallback(() => {
    setMobile(!mobile);
  });

  const redirect = useCallback(() => navigate("/"));

  return (
    <div className="relative">
      {mobile ? (
        <AnimatePresence>
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 1.5,
              type: "tween",
              ease: "backInOut",
              opacity: 0,
              delay: 0.2,
            }}
            className="absolute bg-[#148F7C] text-white z-40 top-0 w-full h-100%"
          >
            <div className="md:px-44 px-6 py-10 font-bold">
              <header className="flex md:flex-row flex-col-reverse md:gap-8 gap-12 items-center z-30 justify-between border-b-2 border-white pb-8">
                <h2 className="md:text-4xl text-2xl">
                  The Digitalesque Website Menu
                </h2>
                <button
                  onClick={toggleMenu}
                  className="text-2xl flex justify-center gap-1 align-items-center self-end hover:opacity-20 duration-300 ease-in-out"
                >
                  close
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-10 w-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </span>
                </button>
              </header>
              <div className="grid md:grid-cols-2">
                <ul className="col-end-3">
                  <li className="border-b-2 border-white py-8 pt-8 pl-8 text-base transition-all">
                    <a
                      className="md:text-3xl text-2xl hover:underline cursor-pointer duration-300 ease-in-out hover:opacity-20"
                      href="about"
                    >
                      The Company
                    </a>
                    <p>Everything you need to know about our brand core.</p>
                  </li>
                  <li className="border-b-2 border-white py-8 pl-8 transition-all">
                    <a
                      className="md:text-3xl text-2xl hover:underline cursor-pointer duration-300 ease-in-out hover:opacity-20"
                      href="blueprint"
                    >
                      The Blueprint
                    </a>
                    <p>Our detailed plan on how we engage in business.</p>
                  </li>
                  <li className="border-b-2 border-white py-8 pl-8 transition-all">
                    <a
                      className="md:text-3xl text-2xl hover:underline duration-300 ease-in-out hover:opacity-20 cursor-pointer"
                      href="clients"
                    >
                      The Clientele
                    </a>
                    <p>The individuals and organizations we have served.</p>
                  </li>
                  <li className="border-b-2 border-white py-8 pl-8 transition-all">
                    <a
                      className="md:text-3xl text-2xl hover:underline cursor-pointer duration-300 ease-in-out hover:opacity-20"
                      href="capabilties"
                    >
                      Our Capabilities
                    </a>
                    <p>More details on the kind of workload we carry.</p>
                  </li>
                  <li className="border-b-2 border-white py-8 pl-8 transition-all">
                    <a
                      className="md:text-3xl text-2xl hover:underline cursor-pointer duration-300 ease-in-out hover:opacity-20"
                      href="insights"
                    >
                      Our Insights
                    </a>
                    <p>Thoughts from us or our friends on the industry.</p>
                  </li>
                  <li className="border-b-2 border-white py-8 pl-8 transition-all">
                    <a
                      className="md:text-3xl text-2xl hover:underline cursor-pointer duration-300 ease-in-out hover:opacity-20"
                      href="contact"
                    >
                      Our Contacts
                    </a>
                    <p>A list of the options to connect with our firm.</p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      ) : (
        <div>
          <header className="md:px-44 sticky top-0 bg-white py-10 mb-[21rem] z-10">
            <nav className="flex inline-flex px-6 justify-between mb:content-center w-full relative">
              <Reveal delay={0.3} y1={-25} y2={0}>
                <span onClick={() => redirect("/")}>
                  <svg
                    className="w-auto h-[1.75rem] translate-y-[0.25rem] cursor-pointer"
                    viewBox="0 0 151.35 25.68"
                  >
                    <path
                      d="M30.67,4.87a6.36,6.36,0,0,1,3.87,1.31l.93-1.33h3.12L36.34,8.34a6.36,6.36,0,0,1-2.14,8.2l-3.05,3.52a18.38,18.38,0,0,1,8.09,2v3.55c-7.91-5.27-10.41-1-14.78-4.76L24.52,17A8.2,8.2,0,0,0,28,19.56l1.51-1.67.36-.34a6.37,6.37,0,0,1,.84-12.68Zm0,3.1a3.28,3.28,0,1,1-3.28,3.28h0A3.26,3.26,0,0,1,30.67,8h0Z"
                      fill="#029e8e"
                      fillRule="evenodd"
                    ></path>
                    <path
                      d="M20.85,0a2,2,0,1,1-2,2A2,2,0,0,1,20.85,0Z"
                      fill="#029e8e"
                      fillRule="evenodd"
                    ></path>
                    <polygon
                      points="19.13 4.87 22.56 4.87 22.56 17.61 19.13 17.61 19.13 4.87"
                      fill="#029e8e"
                      fillRule="evenodd"
                    ></polygon>
                    <polygon
                      points="48.75 0 52.18 0 52.18 4.87 56.9 4.87 56.9 8.31 52.18 8.31 52.18 17.5 48.75 17.5 48.75 8.31 45.25 8.31 45.25 4.87 48.75 4.87 48.75 0"
                      fill="#029e8e"
                      fillRule="evenodd"
                    ></polygon>
                    <path
                      d="M64.93,4.87a6.31,6.31,0,0,1,3.45,1V4.72h3.44V17.5H68.38v-.91A6.37,6.37,0,1,1,64.93,4.87Zm0,3.22a3.16,3.16,0,1,1-3.16,3.16h0a3.15,3.15,0,0,1,3.15-3.15Z"
                      fill="#029e8e"
                      fillRule="evenodd"
                    ></path>
                    <polygon
                      points="74.42 0 77.86 0 77.86 17.61 74.42 17.61 74.42 0"
                      fill="#029e8e"
                      fillRule="evenodd"
                    ></polygon>
                    <path
                      d="M92,13.1H83.4A3.14,3.14,0,0,0,86,14.4a3.09,3.09,0,0,0,1-.17h4.61A6.55,6.55,0,1,1,92,13.1ZM83.18,9.67h5.47a3.16,3.16,0,0,0-4.32-1.15A3.1,3.1,0,0,0,83.18,9.67Z"
                      fill="#029e8e"
                      fillRule="evenodd"
                    ></path>
                    <path
                      d="M115.24,4.87a6.37,6.37,0,1,0,3.32,11.81v9H122V4.87h-3.43V5.8A6.41,6.41,0,0,0,115.24,4.87Zm0,3.21a3.16,3.16,0,1,0,3.16,3.16,3.15,3.15,0,0,0-3.16-3.16Z"
                      fill="#029e8e"
                      fillRule="evenodd"
                    ></path>
                    <path
                      d="M133.45,4.87h3.44v6.49h0a6.37,6.37,0,0,1-12.51,1.57h0a6.63,6.63,0,0,1-.21-1.26h0V4.87h3.44V12.4a3.15,3.15,0,0,0,5.86,0V4.87Z"
                      fill="#029e8e"
                      fillRule="evenodd"
                    ></path>
                    <path
                      d="M103.39,13H97.66l-3,.14A6.37,6.37,0,0,1,105.4,6.93l-2.2,2.33a3.16,3.16,0,0,0-5.1.26h8.78a6.66,6.66,0,0,1,.23,1.72,6.36,6.36,0,0,1-10.83,4.54l2.25-2.29a3.17,3.17,0,0,0,4.48-.06,2.89,2.89,0,0,0,.38-.47Z"
                      fill="#029e8e"
                      fillRule="evenodd"
                    ></path>
                    <path
                      d="M41.88,0a2,2,0,1,1-2,2A2,2,0,0,1,41.88,0Z"
                      fill="#029e8e"
                      fillRule="evenodd"
                    ></path>
                    <polygon
                      points="40.16 4.87 43.6 4.87 43.6 17.61 40.16 17.61 40.16 4.87"
                      fill="#029e8e"
                      fillRule="evenodd"
                    ></polygon>
                    <path
                      d="M151,13.1h-8.6a3.14,3.14,0,0,0,2.6,1.3,3.09,3.09,0,0,0,1-.17h4.6a6.37,6.37,0,1,1,.47-1.13Zm-8.79-3.43h5.47a3.16,3.16,0,0,0-4.32-1.15A3.1,3.1,0,0,0,142.21,9.67Z"
                      fill="#029e8e"
                      fillRule="evenodd"
                    ></path>
                    <path
                      d="M9.35,0A8.76,8.76,0,1,1,0,8.76,9.17,9.17,0,0,1,.2,6.88H3.78a5.32,5.32,0,1,0,6.86-3.1,5.41,5.41,0,0,0-1.86-.34H0V0Z"
                      fill="#029e8e"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </Reveal>
              <button
                onClick={toggleMenu}
                className="flex items-center gap-2.5"
              >
                <span className="text-lg">Menu</span>
                <svg
                  className="w-auto h-[0.630rem] pt-px"
                  viewBox="0 0 39.52 5.8"
                >
                  <rect width="39.52" height="0.84" fill="inherit"></rect>
                  <rect
                    y="4.96"
                    width="39.52"
                    height="0.84"
                    fill="inherit"
                  ></rect>
                </svg>
              </button>
            </nav>
          </header>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default Navigation;
