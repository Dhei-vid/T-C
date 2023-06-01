import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navigation from "./navigation.component";

const MobileNavigation = ({ open, close }) => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
        className="absolute bg-[#148F7C] text-white z-40 top-0 w-full h-100% overflow-hidden"
      >
        <div className="md:px-44 px-6 py-12 font-bold block">
          <header className="flex md:flex-row flex-col-reverse md:gap-8 gap-12 items-center z-30 justify-between border-b-2 border-white pb-8">
            <h2 className="md:text-4xl text-2xl">
              The Digitalesque Website Menu
            </h2>
            <button
              onClick={closeModal}
              className="text-2xl flex justify-center gap-1 align-items-center self-end"
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
              <li className="border-b-2 border-white py-8 pt-8 pl-8 text-base">
                <a
                  className="md:text-3xl text-2xl hover:underline cursor-pointer"
                  href=""
                >
                  The Company
                </a>
                <p>Everything you need to know about our brand core.</p>
              </li>
              <li className="border-b-2 border-white py-8 pl-8">
                <a
                  className="md:text-3xl text-2xl hover:underline cursor-pointer"
                  href="http://"
                >
                  The Blueprint
                </a>
                <p>Our detailed plan on how we engage in business.</p>
              </li>
              <li className="border-b-2 border-white py-8 pl-8">
                <a
                  className="md:text-3xl text-2xl hover:underline cursor-pointer"
                  href="/clients"
                >
                  The Clientele
                </a>
                <p>The individuals and organizations we have served.</p>
              </li>
              <li className="border-b-2 border-white py-8 pl-8">
                <a
                  className="md:text-3xl text-2xl hover:underline cursor-pointer"
                  href="http://"
                >
                  Our Capabilities
                </a>
                <p>More details on the kind of workload we carry.</p>
              </li>
              <li className="border-b-2 border-white py-8 pl-8">
                <a
                  className="md:text-3xl text-2xl hover:underline cursor-pointer"
                  href="http://"
                >
                  Our Insights
                </a>
                <p>Thoughts from us or our friends on the industry.</p>
              </li>
              <li className="border-b-2 border-white py-8 pl-8">
                <a
                  className="md:text-3xl text-2xl hover:underline cursor-pointer"
                  href="http://"
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
  );
};

export default MobileNavigation;
