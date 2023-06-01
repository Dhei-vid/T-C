import { useState, useEffect } from "react";

import Carousel from "../../components/carousel/carousel.component";
import ClientsPreview from "../../components/clients-preview/clients.preview.component";
import ClientGrid from "../../components/clients-preview/clients.preview.grid.component";
import InsightPreview from "../../components/insights-preview/insights.preview.component";

import { clientHomeData } from "../home/home.components";

const clientData = [
  ...clientHomeData,
  {
    header:
      "The Nigeria incentive-Based Risk Sharing System for Agricultural Lending (NIRSAL)",
    text: "ICT infrastructure and Brand Identity Development",
  },
  {
    header: "The Taj Bank",
    text: "Brand Identity Development and ICT Infrastructure Development",
  },
  {
    header: "The CBN Center for Economics and Finance (CBN-CENEF)",
    text: "Brand Identity Development and ICT Infrastructure Development",
  },
  {
    header: "The Office of the Chief Economic Adviser to the President",
    text: "ICT Infrastructure and New Media Orchestration for The World Economic Forum on Africa",
  },
  {
    header: "The Nigerian Police Force",
    text: "Police Complaint Units' ICT integration",
  },
  {
    header: "The Bayelsa State Government",
    text: "New Media Set up and Website Development for the Bayelsa Jazz Festival",
  },
];

const Client = () => {
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
        <h1 className="md:text-7xl text-5xl font-bold leading-none tracking-wider">
          The Clientele
        </h1>
      </div>

      {/* CAROUSEL */}
      <Carousel />

      {/* CLIENT PREVIEW */}
      <ClientsPreview />
      <div className="md:px-44 px-6">
        <div className="grid md:grid-cols-2 md:gap-x-24 gap-x-2 border-t-2 border-black pt-8">
          <ClientGrid data={clientData} />
        </div>
      </div>

      {/* INSIGHT PREVIEW */}
      <div className="col-span-4 px-6 pt-24 md:pl-44">
        <h3 className="text-3xl font-bold tracking-wider">Our Insights</h3>
      </div>
      <InsightPreview colsNo={dimensions.width >= 700 ? 4 : 1} />
    </>
  );
};

export default Client;
