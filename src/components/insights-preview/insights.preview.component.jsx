import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const InsightPreview = ({
  firstCol,
  secondCol,
  thirdCol,
  fourthCol,
  colsNo,
  moreInsights,
}) => {
  const navigate = useNavigate();

  const redirect = useCallback((link) => navigate(link));

  return (
    <>
      <div className={`grid grid-cols-${colsNo} gap-x-1 pt-10`}>
        {/* first grid item */}
        <div
          className={`w-full min-h-[65vh] bg-[url('https://digitalesque.xyz/static/17776059feb6f8c551fe240c7874e6da/677ad/art1.webp')] bg-cover bg-center ${firstCol}`}
        >
          <div
            onClick={() => redirect("/insights/africa-digital")}
            className={`h-[65vh] grid content-end justify-items-start text-white px-6 cursor-pointer transition ease-out delay-100 group hover:text-gray-400 bg-gradient-to-t from-black`}
          >
            <h3 className="md:text-3xl text-2xl font-bold tracking-wider mb-3 hover:underline">
              Tuning into Africa's Digital Transformation
            </h3>
            <button className="uppercase pb-6">Learn More</button>
          </div>
        </div>
        {/* second grid item */}
        <div
          className={`w-full min-h-[65vh] bg-[url('https://digitalesque.xyz/static/545c78c85d45d26721d2fd8c19b99823/16474/art2.webp')] bg-cover bg-center  ${secondCol}`}
        >
          <div
            onClick={() => redirect("/insights/lessons-from-india")}
            className={`min-h-[65vh] grid content-end justify-items-start text-white px-6 cursor-pointer transition ease-out delay-100 group hover:text-gray-400 bg-gradient-to-t from-black `}
          >
            <h3 className="md:text-3xl text-2xl font-bold tracking-wider mb-3 hover:underline">
              Digital Transformation in Africa: three lessons from India's
              experience
            </h3>
            <button className="uppercase pb-6">Learn More</button>
          </div>
        </div>
        {/* third grid item */}
        <div
          className={`w-full min-h-[65vh] bg-[url('https://digitalesque.xyz/static/d289f630210aaf5c760135c45ffffac9/6321c/art3.webp')] bg-cover bg-center ${thirdCol}`}
        >
          <div
            onClick={() => redirect("/insights/promises")}
            className={`h-[65vh] grid content-end justify-items-start text-white px-6 cursor-pointer transition ease-out delay-100 group hover:text-gray-400 bg-gradient-to-t from-black`}
          >
            <h3 className="md:text-3xl text-2xl font-bold tracking-wider mb-3 hover:underline">
              The Promises and perils of Africa's digital revolution
            </h3>
            <button className="uppercase pb-6">Learn More</button>
          </div>
        </div>
        {/* fourth grid item */}
        <div
          className={`w-full min-h-[65vh] bg-[url('https://digitalesque.xyz/static/1870e533bc9b273e95e8b7d8f63d7355/a01e3/art4.webp')] bg-cover bg-center ${fourthCol}`}
        >
          <div
            onClick={() => redirect("/insights/jack-of-all-trades")}
            className={`h-[65vh] grid content-end justify-items-start text-white px-6 cursor-pointer transition ease-out delay-100 group hover:text-gray-400 bg-gradient-to-t from-black`}
          >
            <h3 className="md:text-3xl text-2xl font-bold tracking-wider mb-3 hover:underline">
              Improving Africa's digital innovation ecosystem: five ways forward
            </h3>
            <button className="uppercase pb-6">Learn More</button>
          </div>
        </div>
      </div>

      {/* More insights */}
      <div
        className={`flex justify-end underline hover:text-gray-500 text-xl md:text-xl py-10 md:pr-44 pr-6 ${moreInsights}`}
      >
        <p
          onClick={() => redirect("insights")}
          className="cursor-pointer transition"
        >
          More Insights
        </p>
      </div>
    </>
  );
};

export default InsightPreview;
