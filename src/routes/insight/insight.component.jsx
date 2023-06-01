import { useEffect, useState } from "react";

import InsightPreview from "../../components/insights-preview/insights.preview.component";
import Reveal from "../../utility/reveal";

const Insight = () => {
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

    window.addEventListener("resize", handleScreenWidth);
  }, []);

  return (
    <>
      <div className="md:px-44 px-6 pb-12">
        <Reveal delay={0.5} y1={-50} y2={0}>
          <h1 className="md:text-7xl text-[3rem] font-bold leading-none tracking-wider">
            Our Insights
          </h1>
        </Reveal>
      </div>

      <div className="grid md:px-36 px-4 pb-8">
        <p className="md:text-4xl text-2xl md:px-9 px-2 leading-tight tracking-wide font-bold border-t-2 border-black pt-8">
          We discuss and share ideas that will change your business and our
          society. The Our insights cover topics ranging from AI, data and
          transformation to major industry developments, present tech
          innovations and other issues that impact the digital future of Africa.
        </p>
      </div>

      {/* INSIGHT PREVIEW */}
      <InsightPreview
        colsNo={dimensions.width >= 700 ? 4 : 1}
        moreInsights={"hidden"}
      />
    </>
  );
};

export default Insight;
