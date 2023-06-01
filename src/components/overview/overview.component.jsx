import Reveal from "../../utility/reveal";

const Overview = () => {
  return (
    <div className="md:px-36 px-4">
      <section className="pt-10 md:pr-10 px-4">
        <Reveal delay={0.6} y1={75} y2={0}>
          <div>
            <h1 className="leading-tight font-bold md:text-4xl text-[1.5rem] tracking-wide">
              Our blueprint for digital transformation below gives an overview
              of the sequence, checklist, and guides at all levels of the
              organization through the journey ensuring that no area of the
              strategy is left unattended during the period of change:
            </h1>
          </div>
        </Reveal>
      </section>

      <section className="grid md:grid-cols-2 gap-x-24 pt-12">
        <div className=" border-t-2 border-black px-8 py-10">
          <h2 className="md:text-4xl text-[1.5rem] mb-4 tracking-wide font-bold ">
            Technology
          </h2>
          <p className="max-w-md md:text-xl">
            Digital transformation involves using digital technologies to remake
            a process to become more efficient or effective. The idea is to use
            technology not just to replicate an existing service in a digital
            form, but to use technology to transform that service into something
            significantly better.
          </p>
        </div>

        <div className="border-t-2 border-black px-8 py-10">
          <h2 className="md:text-4xl text-[1.5rem] mb-4 tracking-wide font-bold  ">
            Data
          </h2>
          <p className="max-w-md md:text-xl">
            Big Data is at the heart of digital transformation because it brings
            all the points together in one place for a more comprehensive and
            holistic view of the entire organization's ecosystem. Big data has
            to enable both the digitization and automation of operations which
            improves efficiency, spur innovation, and leads to new business
            models.
          </p>
        </div>

        <div className="border-t-2 border-black px-8 py-10">
          <h2 className="md:text-4xl text-[1.5rem] mb-4 tracking-wide font-bold">
            Process
          </h2>
          <p className="max-w-md md:text-xl">
            Digital transformation requires an end-to-end mindset, a rethinking
            of ways to meet customer needs, seamless connection of work
            activities, and the ability to manage across silos going forward.
            Process orientation is a natural fit with these needs necessitating
            radical process (re)engineering.
          </p>
        </div>

        <div className="border-t-2 border-black px-8 py-10">
          <h2 className="md:text-4xl text-[1.5rem] mb-4 tracking-wide font-bold">
            Culture
          </h2>
          <p className="max-w-md md:text-xl">
            The core driver of digital transformation is a digital culture
            because it empowers people to deliver results faster by increasing
            adoption, creating the right organizational alignment needed for the
            strategy to thrive dramatically reducing the gap between strategy
            and execution.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Overview;
