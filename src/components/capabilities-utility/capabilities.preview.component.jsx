import Reveal from "../../utility/reveal";
import CapabilitiesGridImages from "./capabilities.grid.component";

const CapabiltiesPreview = () => {
  return (
    <div className="grid grid-cols-3 ">
      <div className="col-span-3 pl-44 py-12">
        <Reveal delay={0.4} y1={-20} y2={0}>
          <h3 className="text-3xl font-bold tracking-wider">
            Our Capabilities
          </h3>
        </Reveal>
      </div>

      <CapabilitiesGridImages />

      <div className="col-end-4 underline hover:text-gray-500 text-lg md:text-xl py-10 px-6">
        <a className="text-lg md:text-xl" href="/capabilities">
          All Capabilities
        </a>
      </div>
    </div>
  );
};

export default CapabiltiesPreview;
