import Reveal from "../../utility/reveal";
import CapabilitiesGridImages from "./capabilities.grid.component";

const CapabiltiesPreview = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1">
      <div className="md:col-span-3 py-10 md:pl-44 py-9 md:pt-32">
        <Reveal delay={0.4} y1={-20} y2={0}>
          <h3 className={`md:text-3xl tracking-wider font-bold px-6`}>
            Our Capabilities
          </h3>
        </Reveal>
      </div>

      <CapabilitiesGridImages
        translate1={"translate-y-[50%]"}
        translate2={"translate-y-[50%]"}
        translate3={"translate-y-[30%]"}
      />

      <div className="md:col-end-4 underline justify-self-end hover:text-gray-500 text-lg md:text-xl py-10 md:pr-[40%] pr-6">
        <a className="text-lg md:text-xl" href="/capabilities">
          All Capabilities
        </a>
      </div>
    </div>
  );
};

export default CapabiltiesPreview;
