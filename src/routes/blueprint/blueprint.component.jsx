import { useState, useEffect } from "react";
import Reveal from "../../utility/reveal";
import Carousel from "../../components/carousel/carousel.component";
import Overview from "../../components/overview/overview.component";
import InsightPreview from "../../components/insights-preview/insights.preview.component";

const Blueprint = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleScreenWidth = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    handleScreenWidth();
    window.addEventListener("resize", handleScreenWidth);
  }, []);

  return (
    <>
      <div className="md:px-44 px-6 pb-12">
        <Reveal delay={0.5} y1={-50} y2={0}>
          <h1 className="md:text-7xl text-[3rem] font-bold leading-none tracking-wider">
            The Blueprint
          </h1>
        </Reveal>
      </div>

      {/* CAROUSEL */}
      <Carousel />

      {/* OVERVIEW */}
      <Overview />

      {/* INSIGHTS */}
      <div>
        <div className="md:col-span-4 px-6 pt-24 md:pl-44">
          <Reveal delay={0.4} y1={-20} y2={0}>
            <h3 className="text-3xl font-bold tracking-wider">Our Insights</h3>
          </Reveal>
        </div>
        <InsightPreview colsNo={dimensions.width >= 700 ? 4 : 1} />
      </div>
    </>
  );
};

export default Blueprint;
