import { useNavigate } from "react-router-dom";
import { useCallback, useState, useEffect } from "react";

import Reveal from "../../utility/reveal";
import InsightPreview from "../../components/insights-preview/insights.preview.component";

const LessonsFromIndia = () => {
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
              <h2 className="md:text-6xl text-3xl font-bold leading-tight">
                Digital Transformation in Africa: three lessons from India's
                experience
              </h2>
              <p className="pb-6 pt-2">Posted October 02, 2022</p>
            </div>
          </Reveal>
          <div className="border-b-2 border-black"></div>
        </div>
      </div>

      {/* IMAGE */}
      <div>
        <img
          className="w-full h-[80vh] object-cover"
          src="https://digitalesque.xyz/static/545c78c85d45d26721d2fd8c19b99823/16474/art2.webp"
          alt=""
        />
      </div>

      {/* BODY */}
      <article className="md:px-44 px-6 leading-[1.1] pt-10">
        {/* DESCRIPTION TEXT */}
        <div className="pt-16">
          <p className="mb-8 md:pr-12 md:text-lg leading-8">
            Delegates from Brazil, Russia, India, China and South Africa are in
            Johannesburg this week for the
            <a href="https://blogs.die-gdi.de/2018/07/04/brics-and-africa/">
              10th BRICS summit
            </a>
            . The theme – ‘BRICS in Africa: collaboration for inclusive growth
            and shared prosperity in the fourth industrial revolution’ –
            suggests a big focus on what these five countries can do to support
            digital transformation in Africa.
          </p>

          <p className="mb-8 md:pr-12 md:text-lg leading-8">
            Among the BRICS economies, India
            <a href="http://www.itu.int/net4/ITU-D/idi/2017/index.html">
              ranks lowest
            </a>
            on information and communications technology development, with a
            score comparable to that of Africa on average. Despite obvious
            differences, African economies and India have faced many similar
            challenges to digital transformation: low internet connectivity; the
            digital divide; a skills-mismatch.
          </p>

          <p className="mb-8 md:pr-12 md:text-lg leading-8">
            However, India has successfully launched many unique digital
            initiatives in the last few years. So what lessons can African
            countries learn from India’s experience?
          </p>
        </div>

        {/* SECTION 1 */}
        <div className="md:pr-20">
          <h2 className="md:text-[2em] text-2xl font-bold py-6">
            1. Develop a national digital identification system
          </h2>
          <p className="mb-8 md:text-lg leading-8">
            Having a digital identity is the very basis of functioning in a
            digital economy. It is a key enabler of access to government
            benefits, cross-border authentication, digital payments and
            e-commerce growth.
          </p>

          <p className="mb-8 pr-12 md:text-lg leading-8">
            India has the world’s largest digital identification programme –
            ‘Aadhar’, literally meaning ‘foundation’. Launched less than a
            decade ago, it already has over a billion Indian residents enrolled
            and uses cloud technology to allocate a unique 12-digit
            identification number to each person based on their demographic and
            biometric information. It is emerging as an important platform for
            linking individuals’ banking transactions, utility bills, telephone
            number and physical address. &nbsp;
          </p>

          <p className="mb-8 pr-12 md:text-lg leading-8">
            The best comparable example within Africa is the Ghana Card, aiming
            to rapidly deliver public services to Ghanaian citizens. It’s still
            in its pilot phase, with over 500 people receiving their Ghana Card
            last month. But its coverage is limited – there aren’t enough
            enrolment and printing centres, and distribution is limited mainly
            to Greater Accra. A second big challenge is dealing with the
            enormous amount of data generated; here too, it could learn from
            Aadhar’s use of cloud technology for data management. &nbsp;
          </p>

          <p className="mb-8 pr-12 md:text-lg leading-8">
            The Aadhar card has however suffered from its own issues around data
            privacy, information leaks and data storage. To avoid similar
            pitfalls, African governments should address data security issues
            before implementing their national identification schemes. They can
            do this by introducing virtual IDs that add an extra data security
            layer (what India is doing now), automating security procedures,
            giving privacy and security training to employees in data-related
            activities, and putting plans in place for responding to data
            breaches.
          </p>
        </div>

        {/* SECTION 2 */}
        <div className="md:pr-20">
          <h2 className="md:text-[2em] text-2xl font-bold py-6">
            2. Invest in building – and sharing – digital infrastructure
          </h2>
          <p className="mb-8 pr-12 text-lg leading-8">
            Several large-scale initiatives have developing India’s digital
            infrastructure at their core. The
            <a href="http://www.digitalindia.gov.in/">‘Digital India’</a>
            programme, for example, has brought internet connectivity to 250,000
            gram panchayats (village councils) in rural India by laying optical
            fibres across the country.
          </p>
          <p className="mb-8  md:text-lg leading-8">
            But this isn’t the only way to improve internet penetration and
            bridge the digital divide.
          </p>
          <p className="mb-8 md:text-lg leading-8">
            Recently, the government also granted a Unified License for Mobile
            Virtual Network Operators (MVNOs). Unlike mobile network operators
            (MNOs), MVNOs do not have their own infrastructure; instead they
            ‘share infrastructure’ with established telecom providers who have
            excess network capacity. Each MVNO then sells services, such as data
            for internet, at its own price.
          </p>
          <p className="mb-8 md:text-lg leading-8">
            As firms compete for market share, the cost of internet can fall,
            which would be particularly useful in African countries where the
            telecom market is more monopolistic.
          </p>
          <p className="mb-8  md:text-lg leading-8">
            Kenya&nbsp;has already granted
            <a href="https://www.mobileworldlive.com/money/news-money/kenya-shakes-mobile-money-licensing-three-mvnos/">
              MVNO licenses to three companies
            </a>
            offering mobile money and data services. As a result, we have seen
            an
            <a href="http://ca.go.ke/index.php/what-we-do/94-news/408-kenya-s-mobile-penetration-hits-90-per-cent-as-mvnos-take-root">
              8.2% increase
            </a>
            in internet subscriptions in the first three months of this year.
            Other African countries that grant licenses for MVNOs should see
            similarly significant improvements in internet costs and access.
          </p>
        </div>

        {/* SECTION 3 */}
        <div className="md:pr-20">
          <h2 className="md:text-[2em] text-2xl font-bold py-6">
            3. Take a targeted approach towards skills development
          </h2>
          <p className="mb-8 md:text-lg leading-8">
            The
            <a href="https://set.odi.org/digitalisation-manufacturing/">
              evidence
            </a>
            shows that sub-Saharan African economies reap lower benefits from
            digitalisation compared to other countries, probably because their
            workforces don’t have as many of the relevant skills. India’s
            experience suggests that Africa needs to develop a targeted approach
            to skills development, where policies encourage innovation and
            entrepreneurship to meet local demand.
          </p>
          <p className="mb-8 md:text-lg leading-8">
            In 2015, India set up the National Skill Development Policy to
            provide an overall framework for all skills-related activities
            within the country, to link them with skill-demand centres and to
            align them with common standards. A key aim is to improve attitudes
            to technical and vocational educational training (TVET) through
            awareness campaigns and introductory certificates in education.
            Similar policies will be useful in Africa where there is a very low
            demand for TVET.&nbsp;
          </p>
          <p className="mb-8 md:text-lg leading-8">
            India has also set up schemes providing easy access to information
            on the demand and supply of skills in a particular sector or
            location; promoting industry-academia collaboration; and boosting
            tertiary education with a focus on science, technology, engineering
            and mathematics. It is now developing a
            <a href="http://www.skilldevelopment.gov.in/nsqf.html">
              National Skills Qualification Framework
            </a>
            , which is expected to allow easier transition from the non-formal
            to the organised job market through recognising and certifying prior
            learning. Short term training will also be provided for people who
            are unemployed or have dropped out of school or college.
          </p>
          <p className="mb-8  md:text-lg leading-8">
            These kinds of schemes are particularly useful in Africa, where the
            <a href="https://www.weforum.org/press/2017/05/close-skills-gaps-to-prepare-africa-s-workforce-for-tomorrow-s-jobs/">
              skills gap
            </a>
            is a huge barrier to employability – as high as 41% of firms in
            Tanzania identify inadequately skilled workforces as a major
            constraint to operations. African economies looking ahead to a
            ‘youth bulge’ could benefit from implementing similar skills
            development programmes to help make their young people more
            employable.
          </p>
        </div>
      </article>

      {/* GRID IMAGES */}
      <InsightPreview
        secondCol={"hidden"}
        moreInsights={"hidden"}
        colsNo={dimensions.width >= 768 ? 3 : 1}
      />
    </>
  );
};

export default LessonsFromIndia;
