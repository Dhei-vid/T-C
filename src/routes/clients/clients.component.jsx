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
  return (
    <>
      <div className="px-44">
        <h1 className="text-7xl font-bold leading-none tracking-wider">
          The Clientele
        </h1>
      </div>

      {/* CAROUSEL */}
      <Carousel />

      {/* CLIENT PREVIEW */}
      <ClientsPreview />
      <div className="px-44">
        <div className="grid grid-cols-2 gap-x-24 border-t-2 border-black pt-8">
          <ClientGrid data={clientData} />
        </div>
      </div>

      {/* INSIGHT PREVIEW */}
      <div className="col-span-4 px-6 pt-24 pl-44">
        <h3 className="text-3xl font-bold tracking-wider">Our Insights</h3>
      </div>
      <InsightPreview colsNo={4} />
    </>
  );
};

export default Client;
