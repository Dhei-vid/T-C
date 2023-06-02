import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

import Reveal from "../../utility/reveal";
import InsightPreview from "../../components/insights-preview/insights.preview.component";

const JackOfAllTrades = () => {
  const navigate = useNavigate();
  const [dimensions, setDimensions] = useState(
    {
      height: window.innerHeight,
      width: window.innerWidth,
    },
    []
  );

  useEffect(() => {
    const handleScreenWidth = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleScreenWidth);
  }, []);

  const InsightNavigate = useCallback(() => {
    navigate("/insights");
  });

  return (
    <>
      {/* INTRO */}
      <div className="md:px-44 px-6">
        <div className="mb-8">
          <Reveal delay={0.5} y1={-50} y2={0}>
            <div className="px-6">
              <p
                className="underline cursor-pointer hover:text-gray-500 pb-3"
                onClick={InsightNavigate}
              >
                Back to Our Insights
              </p>
              <h2 className="md:text-6xl text-2xl font-bold leading-tight">
                Improving Africa's digital and innovation ecosystems: five ways
                forward
              </h2>
              <p className="pb-6 pt-2">Posted October 06, 2022</p>
            </div>
          </Reveal>
          <div className="border-b-2 border-black"></div>
        </div>
      </div>

      {/* IMAGE */}
      <div>
        <img
          className="w-full h-[80vh] object-cover"
          src="https://digitalesque.xyz/static/1870e533bc9b273e95e8b7d8f63d7355/a01e3/art4.webp"
          alt=""
        />
      </div>

      {/* BODY */}
      <article className="md:px-44 px-6 pt-10">
        <div className="pt-16 md:pr-20 text-base">
          <p className="mb-8 md:text-lg leading-8">
            Innovation and digital technologies have great potential to create
            jobs, boost productivity growth, reduce poverty, foster inclusion,
            and reduce inequality. They are vital for increasing the production
            of farms, firms, manufacturers, and service providers, and for
            accumulating knowledge capital. But they require collaboration by
            many actors working in digital and innovation ecosystems to ensure
            that they deliver benefits for society. This is not happening in
            Africa­––yet.
          </p>

          <p className="mb-8 md:text-lg leading-8">
            On February 23, ACET brought together key stakeholders, including
            entrepreneurs, policymakers, and international actors for a “deep
            dive” discussion on how African governments can improve policymaking
            to accelerate innovation, technology, and digital transformation in
            support of the continent’s economic transformation.
          </p>

          <p className="mb-8 md:text-lg leading-8">
            On February 23, ACET brought together key stakeholders, including
            entrepreneurs, policymakers, and international actors for a “deep
            dive” discussion on how African governments can improve policymaking
            to accelerate innovation, technology, and digital transformation in
            support of the continent’s economic transformation.
          </p>

          <p className="mb-8 md:text-lg leading-8">
            Freda Yawson, ACET Innovation and Infrastructure Senior Manager, and
            Rob Floyd, ACET Senior Fellow and World Bank Director, also
            participated in the webinar to present details on ACET’s new Digital
            &amp; Innovation Program. Research and analysis around the program
            will focus on ways to integrate innovation ecosystems at the
            national and regional levels, attract investment for digital
            infrastructure and skills development, and build human capital.
          </p>
        </div>

        {/* SECTION HEADING */}
        <div className="py-6">
          <h4 className=" text-lg font-bold">
            Five takeaways from the discussion:
          </h4>
        </div>
        {/* SECTION 1 */}
        <div className="md:text-lg md:pr-20">
          <p className="text-gray-600 font-bold pb-4 leading-8">
            **1.**
            <strong className="text-black">
              Policymakers need more support to close gaps in digital and
              innovation policy frameworks
            </strong>
          </p>
          <p className="pb-4 leading-8">
            In her opening remarks, Conrad explained that innovation and digital
            policies are either non-existent or only just being developed in
            many African countries. Panelists agreed policymakers have limited
            capacity and are urgently seeking inputs. Floyd emphasized the
            importance of peer learning and sharing of best practices to fill
            this gap.
          </p>
          <p className="pb-4 leading-8">
            Fehri shared his own experience in developing an enabling policy
            environment as the Minister of Communication Technologies and
            Digital Economy of Tunisia. Three of the four pillars of the digital
            economy strategy in the country failed, but the final pillar on
            setting up a Startup Act exceeded expectations. Fehri attributes
            this success to the active role provided for the youth, civil
            society, and the private sector. The elements of the Startup Act
            that contributed to its success include a legal framework that takes
            away the burden of paperwork for nascent businesses; financial
            instruments run by the private sector with contributions from the
            government; and a stronger ecosystem with incubators and
            accelerators that help startups gain the necessary skills and
            knowledge to scale. Other countries in Africa, including Senegal,
            have already started to develop similar startup legislation.
          </p>
          <p className="text-gray-600 font-bold pb-4 leading-8">
            **2.**
            <strong className="text-black">
              Digital transformation requires regional collaboration
            </strong>
          </p>
          <p className="pb-4 leading-8">
            Sowho shared some of the roadblocks that businesses face in a
            pan-African context, including the complex challenges posed by a
            wide range of tariffs, laws, currencies, and regulations across the
            continent. For African SMEs and innovative startups, in particular,
            this inhibits growth and scaling. Her advice to innovators is to
            recognize the reality and avoid replicating approaches from
            innovators in other markets. African startups cannot build and
            expect customers to come later, she said. In the weak infrastructure
            and low trust environment common across the continent, they need
            quick wins.
          </p>
          <p className="pb-4 leading-8">
            Sowho shared some of the roadblocks that businesses face in a
            pan-African context, including the complex challenges posed by a
            wide range of tariffs, laws, currencies, and regulations across the
            continent. For African SMEs and innovative startups, in particular,
            this inhibits growth and scaling. Her advice to innovators is to
            recognize the reality and avoid replicating approaches from
            innovators in other markets. African startups cannot build and
            expect customers to come later, she said. In the weak infrastructure
            and low trust environment common across the continent, they need
            quick wins.
          </p>
          <p className="font-bold pb-4 leading-8">
            <strong>3.</strong>&nbsp;
            <strong>
              Accelerators and incubators are key to preparing startups and
              unlocking****investment
            </strong>
          </p>
          <p className="pb-4 leading-8">
            Obeng-Apofo shared her insights as an entrepreneur about the value
            of incubators and accelerators. In her experience, the right
            SME-focused incubator can be very effective at preparing startups
            for investment readiness. Mentoring is a crucial component, as a lot
            of SMEs lack the ability to experiment and bring in new ideas,
            making it difficult to innovate. An additional benefit is the
            confidence that participation in an incubator can provide potential
            investors about entrepreneurs’ skills and knowledge.
          </p>
          <p className="pb-4 leading-8">
            Spoiala noted that the German development corporation and the EU are
            very involved in developing the startup ecosystem by supporting
            incubators and accelerators. Digital innovation was a key topic at
            the recent EU-AU summit, and mentoring and coupling EU companies
            with African startups is a major component of intercontinental
            cooperation.
          </p>
          <p className="text-gray-600 font-bold pb-4 leading-8">
            **4.**
            <strong className="text-black">
              African countries urgently need to update data policy frameworks
            </strong>
          </p>
          <p className="pb-4 leading-8">
            One of the key recommendations of_Integrating to Transform_is for
            countries to ensure transparent rules that foster regional
            integration of data markets. The panel discussion uncovered the
            complexities of developing a data policy framework.
          </p>
          <p className="pb-4 leading-8">
            While it is crucial for African governments to ensure that citizens’
            data is protected, the example of the EU’s General Data Protection
            Regulation, which went into effect in 2018, shows that it can be
            especially difficult for smaller companies to adapt to some
            regulations. Finding the right data protection environment that
            works for citizens but does not harm startups can pose a real
            challenge for policymakers. According to Sowho, the low-trust
            environment in Africa means that data policy cannot be approached
            the same way.
          </p>
          <p className="text-gray-600 font-bold pb-4 leading-8">
            **5.**
            <strong className="text-black">
              Africa needs to own its narrative and adapt innovations to the
              local context
            </strong>
          </p>
          <p className="pb-4 leading-8">
            A running theme throughout the discussion­––and a sentiment shared
            by all panelists­––is the need for Africa to “own its narrative” and
            for stakeholders to ensure that policies and practices are developed
            with a greater awareness of the local context. Obeng-Apage shared
            her own example of the uphill battle she faced to get African black
            soap certification for the EU market. Due to the lack of knowledge
            from EU regulators about her product, she faced certification
            requirements that did not line up with the needs of consumers and
            the nature of the soap. After much explanation and demonstration,
            she was able to establish a better-suited certification procedure
            for black soap­––concluding that, as an African entrepreneur, you
            have to know what you are about before you can convince others.
          </p>
          <p className="pb-4 leading-8">
            <em>
              <strong>Watch the recorded event below</strong>
            </em>
          </p>
          <h4 className="font-bold pt-10 pb-3">
            ACET research on innovation and African transformation
          </h4>
          <p className="pb-4 leading-8">
            The third edition of the&nbsp;
            <a className="underline" href="https://acetforafrica.org/atr/">
              African Transformation Report, Integrating to Transform
            </a>
            &nbsp;explores the critical need for African countries to work
            together beyond trade to tackle shared challenges.
          </p>
          <p className="pb-4 leading-8">
            <a
              className="underline"
              href="https://acetforafrica.org/atr/overview/#supporting-digital-innovation"
            >
              _Chapter 2: Supporting Digital Innovation_explores digital
              innovation
            </a>
            as one of the three opportunities for regional collaboration to
            accelerate economic transformation. The goal must be to transition
            from a fragmented landscape of closed proprietary systems––which
            lack interconnections between services and countries––to open
            integrated platforms and ecosystems, all interlinked.
          </p>
          <p className="py-4 leading-8 font-bold">
            <a
              className="underline"
              href="/pdfviewer/atr3-supporting-digital-innovation/"
            >
              Read ATR3: Supporting Digital Innovation
            </a>
          </p>
        </div>
      </article>

      {/* GRID IMAGES */}
      <InsightPreview
        fourthCol={"hidden"}
        colsNo={dimensions.width >= 768 ? 3 : 1}
        moreInsights={"hidden"}
      />
    </>
  );
};

export default JackOfAllTrades;
