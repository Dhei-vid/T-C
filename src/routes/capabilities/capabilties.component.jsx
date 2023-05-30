import Carousel from "../../components/carousel/carousel.component";
import CapabilitiesGridImages from "../../components/capabilities-utility/capabilities.grid.component";
import Reveal from "../../utility/reveal";

const Capabilities = () => {
  return (
    <>
      <div className="px-44">
        <Reveal delay={0.5} y1={-50} y2={0}>
          <h1 className="text-7xl font-bold leading-none tracking-wider">
            Our Capabilities
          </h1>
        </Reveal>
      </div>

      {/* CAROUSEL */}
      <Carousel />

      <div className="px-36">
        <div className="grid px-8 border-b-2 border-black py-16">
          <p className="text-3xl leading-tight tracking-wide font-bold ">
            Maximizing the potential of technology within your company requires
            a mindset shift. Our strategic consulting is backed by real-world
            results. We don't just talk about transformation; we make it real.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 pt-10">
        <CapabilitiesGridImages />

        <div className="w-full min-h-[65vh] bg-[url('https://digitalesque.xyz/static/ae893a2dff3e538a678b494e9561958f/0de74/pe.webp')] bg-cover bg-center">
          <div className="justify-center items-center p-10 pt-[65vh] bg-gradient-to-t from-black">
            <button className="flex w-full justify-between items-center text-2xl font-extrabold text-white">
              <p>Data Science Consulting</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="w-8 h-8 transition-all "
              >
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Capabilities;
