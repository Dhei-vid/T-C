import { Outlet } from "react-router-dom";
import Reveal from "../../utility/reveal";

const Contact = () => {
  return (
    <>
      <Outlet />
      <div className="md:px-36 py-28 px-6">
        <Reveal delay={0.5} y1={75} y2={0}>
          <div className="pb-14">
            <h3 className="font-bold md:text-4xl text-2xl leading-tight tracking-wide">
              If you’re interested in working with us and want to find out more
              about the results we’ve achieved, we’d love to hear from you.
            </h3>
          </div>
        </Reveal>
        <div className="px-4 pt-6 md:pl-[48vw] border-t-2 border-black pt-8"></div>
        <Reveal>
          <div className="grid px-4 pt-6 md:pl-[65%] pl-[45%] md:text-xl text-base">
            <h4 className="">Can we do business?</h4>
            <a
              className="underline cursor-pointer hover:text-gray-500"
              href="mailto:office@thecorporation.xyz"
            >
              Click this link to give us a shout
            </a>
          </div>
        </Reveal>
      </div>
    </>
  );
};

export default Contact;
