import { useState, useEffect } from "react";

import Carousel from "../../components/carousel/carousel.component";
import CapabiltiesPreview from "../../components/capabilities-utility/capabilities.preview.component";
import Reveal from "../../utility/reveal";

const aboutText = [
  {
    text: "With more than 15 years of experience, we’ve earned a reputation for delivering innovative, value-for-money solutions. From the outset, the decision was made to focus purely on the ICT niche and since that time we have built a reputation for providing leading-edge, tailored solutions for clients drawn from the expertise and field experience of our Engineers and Consultants. Our people have the knowledge, expertise, and know-how that simply cannot be matched.",
  },
  {
    text: "As experienced Digital Transformation consultants, we help you understand emerging technologies, manage ideation, build business cases, and deliver disruptive solutions. Not just innovation by a slide presentation, we roll up our sleeves and build together.",
  },
  {
    text: "We stand by our philosophy of service and delivery beyond all else and pride ourselves on providing outstanding expertise, professionalism, and client service. Being outcome-driven we ensure the solutions we recommend are focused on our client needs – specifically being able to meet budgetary, timeframes, and functionality requirements.",
  },
  {
    text: "Importantly, Digitalesque is vendor-neutral meaning the recommendations we make are not influenced by any commercial arrangements – we find the best ICT solution for our client’s specific needs.",
  },
];

const aboutPeople = [
  {
    name: "Abubakar Abdullahi",
    info: "Abubakar is a skilled digital transformation manager with over 15 years of experience supporting businesses to innovate. optimize ROI, transform and scale their organizations, and succeed",
  },
  {
    name: "Vivian Peters",
    info: "Vivian is a confident and dedicated technology leader that has led different phases of digital transformation initiatives while mentoring and motivating teams, successfully creating and implementing numerous digital change agendas for organizations and individuals",
  },
  {
    name: "Daniel Bawa",
    info: "Daniel has 18years’of experience working in class-leading organizations like Intel. He is well-balanced in business-focused program management, digital transformation, enterprise applications and infrastructure/services.",
  },
];

const About = () => {
  const [dimensions, setDimensions] = useState(
    {
      height: window.innerHeight,
      width: window.innerWidth,
    },
    []
  );

  console.log(dimensions.width);

  useEffect(() => {
    const handleScreenWidth = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleScreenWidth);
  }, []);

  return (
    <>
      <div className="md:px-44 px-6">
        <Reveal delay={0.5} y1={-75} y2={0}>
          <h1 className="md:text-7xl text-5xl font-bold leading-none tracking-wider">
            The Company
          </h1>
        </Reveal>
      </div>

      {/* Carousel */}
      <Carousel />
      <div className="md:px-44 px-6 py-12">
        <Reveal delay={0.5} y1={-75} y2={0}>
          <h3 className="md:text-4xl text-2xl font-bold">
            We are a digital transformation consultancy and engineering company
            that delivers cutting-edge solutions for ambitious companies,
            brands, and founders.
          </h3>
        </Reveal>
      </div>

      {/* ABOUT TEXT */}
      <div className="md:px-36">
        <div className="border-t-2 border-black pt-8"></div>
        <div className="grid md:grid-cols-2 gap-4 px-6">
          {aboutText.map((item, index) => {
            return (
              <div className="col-start-2" key={index}>
                <p className="md:text-lg text-base leading-none tracking-wider pb-4">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CAPABILITIES PREVIEW */}
      <CapabiltiesPreview />

      {/* ABOUT PEOPLE */}
      <div className="md:px-44 px-6 md:py-20 py-12">
        <Reveal delay={0.5} y1={-75} y2={0}>
          <h3 className="md:text-4xl text-2xl font-bold">
            Digitalesque has a dedicated team of highly skilled professionals
            who are passionate about delivering the company’s strategy. In a
            supportive environment, our employees are motivated through
            performance management systems, and recognition approaches that
            reward employee contribution.
          </h3>
        </Reveal>
      </div>

      {/* PEOPLE INFORMATION */}
      <div className="md:px-36">
        <div className="border-t-2 border-black pt-8"></div>
        <div className="grid md:grid-cols-2 gap-4 px-6">
          {aboutPeople.map((item, index) => {
            return (
              <div className="col-start-2" key={index}>
                <h3 className="md:text-2xl text-xl font-bold leading-none tracking-wider">
                  {item.name}
                </h3>
                <p className="md:text-lg text-base leading-none tracking-wider pb-4">
                  {item.info}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default About;
