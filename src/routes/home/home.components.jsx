import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

import Reveal from "../../utility/reveal";
import OverviewPreview from "../../components/overview-preview/overview.preview.component";
import CapabiltiesPreview from "../../components/capabilities-utility/capabilities.preview.component";
import ClientsPreview from "../../components/clients-preview/clients.preview.component";
import InsightPreview from "../../components/insights-preview/insights.preview.component";
import ClientGrid from "../../components/clients-preview/clients.preview.grid.component";

export const clientHomeData = [
  {
    header: "The Central Bank of Nigeria",
    text: "Set-up of the eNaira New Media Infrastructure. Built eNaira.gov.ng and the Web App",
  },
  {
    header: "Titan Trust Bank",
    text: "Web portal Development and Brand Identity",
  },
  {
    header: "The Securities and Exchange Commission (SEC)",
    text: "Website Redesign and Administrative Portals Development (Ongoing)",
  },
  {
    header: "The Infrastructural Corporation (InfraCo)",
    text: "Brand Identity, ICT Infrastructure and Website Development",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const clientNavigate = useCallback(() => {
    navigate("/clients");
  }, []);

  return (
    <div>
      {/* OVERVIEW */}
      <section className="px-44">
        <Reveal delay={0.5} y1={-50} y2={0}>
          <div>
            <h1 className="text-7xl font-bold leading-none tracking-wider">
              The Digital <br />
              <span className="pb-6">Transformation Agency</span>
            </h1>
          </div>
        </Reveal>
      </section>

      {/* OVERVIEW  + CAROUSEL*/}
      <section>
        <OverviewPreview />
      </section>

      {/* CAPABILITIES */}
      <section className="px-0">
        <CapabiltiesPreview />
      </section>

      {/* CLIENTS */}
      <section>
        <ClientsPreview />
        <div className="px-44">
          <div className="grid grid-cols-2 gap-x-24 border-t-2 border-black pt-8">
            <ClientGrid data={clientHomeData} />
            <div className="col-end-3 py-6 px-5 justify-self-end">
              <p
                onClick={clientNavigate}
                className="ml-auto underline hover:text-gray-500 text-lg md:text-xl cursor-pointer"
              >
                See More
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section>
        <div className="col-span-4 px-6 pt-24 pl-44">
          <Reveal delay={0.4} y1={-20} y2={0}>
            <h3 className="text-3xl font-bold tracking-wider">Our Insights</h3>
          </Reveal>
        </div>
        <InsightPreview colsNo={4} />
      </section>
    </div>
  );
};

export default Home;
