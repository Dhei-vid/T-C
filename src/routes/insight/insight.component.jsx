import InsightPreview from "../../components/insights-preview/insights.preview.component";

const Insight = () => {
  return (
    <>
      <div className="px-44 pb-8">
        <h1 className="text-7xl font-bold leading-none tracking-wider">
          Our Insights
        </h1>
      </div>

      <div className="grid px-36 pb-8">
        <p className="text-4xl px-9 leading-tight tracking-wide font-bold border-t-2 border-black pt-8">
          We discuss and share ideas that will change your business and our
          society. The Our insights cover topics ranging from AI, data and
          transformation to major industry developments, present tech
          innovations and other issues that impact the digital future of Africa.
        </p>
      </div>

      {/* INSIGHT PREVIEW */}
      <InsightPreview colsNo={4} moreInsights={"hidden"} />
    </>
  );
};

export default Insight;
