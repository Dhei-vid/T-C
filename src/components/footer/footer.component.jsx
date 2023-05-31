import { Outlet } from "react-router-dom";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import Reveal from "../../utility/reveal";

const Footer = () => {
  const navigate = useNavigate();

  const redirect = useCallback((link) => navigate(link));

  return (
    <>
      <Outlet />
      <div className="bg-[#148F7C] md:h-[80vh] h-full px-6">
        <div className="md:px-44 grid md:grid-cols-4 gap-4 md:gap-y-32 pb-16 pt-12 text-white font-bold">
          <div className="pb-8">
            <div className="border-t-2 border-white pt-8"></div>
            <Reveal delay={0.3} y1={-25} y2={0}>
              <p className="font-bold leading-none tracking-wider">
                The Digital <br />
                <span className="pb-8">Transformation Agency</span>
              </p>
            </Reveal>
          </div>
          <div className="flex flex-col border-t-2 border-white pt-8 md:col-start-3 py-8">
            <a
              className="cursor-pointer hover:text-[#5bb1a3] transition duration-300 ease-in-out"
              href="https://www.instagram.com/wearetcafrica/"
              target="_"
            >
              Instagram
            </a>
            <a
              className="cursor-pointer hover:text-[#5bb1a3] transition duration-300 ease-in-out"
              href="https://twitter.com/WeAreTCAfrica"
              target="_"
            >
              Twitter
            </a>
            <a
              className="cursor-pointer hover:text-[#5bb1a3] transition duration-300 ease-in-out"
              href="https://www.linkedin.com/company/WeAreTCAfrica/"
              target="_"
            >
              LinkedIn
            </a>
          </div>
          <div className="border-t-2 border-white pt-8 py-8">
            <p
              className="cursor-pointer hover:text-[#5bb1a3] transition duration-300 ease-in-out"
              onClick={() => {
                redirect("/privacy");
              }}
            >
              Privacy Policy
            </p>
            <p
              className="cursor-pointer hover:text-[#5bb1a3] transition duration-300 ease-in-out"
              onClick={() => {
                redirect("/terms");
              }}
            >
              Terms & Conditions
            </p>
            <p>Site By David</p>
          </div>
          <div className="border-t-2 border-white pt-8 py-8">
            <p>For new business enquiries</p>
            <a href="mailto:office@thecorporation.xyz">
              office@thecorporation.xyz
            </a>
          </div>
          <div className="border-t-2 border-white pt-8 py-8 md:col-start-3">
            <p>8 IBM Haruna Str. Utako District, Abuja 900211</p>
          </div>
          <div className="border-t-2 border-white pt-8 py-8">
            <p>All Rights Reserved 2023</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
