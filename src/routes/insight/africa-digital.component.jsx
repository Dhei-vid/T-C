import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import Reveal from "../../utility/reveal";

import InsightPreview from "../../components/insights-preview/insights.preview.component";

const AfricaDigital = () => {
  const navigate = useNavigate();

  const InsightNavigate = useCallback(() => {
    navigate("/insights");
  });

  return (
    <>
      {/* INTRO */}
      <div className="px-44">
        <div className="px-6 mb-8 border-b-2 border-black">
          <Reveal delay={0.5} y1={-50} y2={0}>
            <p
              className="underline cursor-pointer hover:text-gray-500"
              onClick={InsightNavigate}
            >
              Back to Our Insights
            </p>
            <h2 className="text-6xl font-bold leading-tight">
              Tuning into Africa's digital Transformation
            </h2>
            <p className="pb-6">Posted September 29, 2022</p>
          </Reveal>
        </div>
      </div>

      {/* IMAGE */}
      <div className="">
        <img
          className="w-full h-[80vh] object-cover"
          src="https://digitalesque.xyz/static/17776059feb6f8c551fe240c7874e6da/677ad/art1.webp"
          alt=""
        />
      </div>

      {/* BODY */}
      <article className="px-44 leading-[1.1] pt-10">
        <div className="section-1 px-6 leading-relaxed">
          <h2 className="text-[2em] font-bold py-6 pr-16">
            Why the continent’s digital prospects look bright (and are getting
            brighter)
          </h2>
          <p className="mb-8 pr-12 text-lg">
            Africa is the last frontier of large global expansion opportunities
            for western companies. Despite its almost 1.4 billion people, 500
            million+ internet users, and 330 million+ e-commerce consumers1,
            Africa is still not on the radar for many businesses or investors
            outside the continent.
          </p>
          <p className="mb-8 pr-12 text-lg">
            Now, companies that missed out on the meteoric growth of India and
            China have one final opportunity to secure a foothold in a large,
            fast-growing marketplace. With countries across Africa rapidly
            modernizing and showing promising signs of growth, now is the time
            to seriously consider this market before the first-mover opportunity
            window closes.
          </p>
          <p className="mb-8 pr-12 text-lg">
            <span className="underline">
              Accenture was recently commissioned by Google to conduct an
              extensive primary and secondary research into the African tech
              ecosystem.
            </span>
            &#160; We surveyed 1600 software developers and interviewed more
            than 25 tech start-ups, investors, and other enabling tech ecosystem
            players to understand the conversation around this space.
          </p>
          <p className="mb-8 pr-12 text-lg">
            Here’s what we found and why it matters for your business.
          </p>
        </div>

        <div className="section-2 px-6 leading-snug">
          <h2 className="text-[2em] font-bold py-6 pr-16">
            On the brink of a tech explosion
          </h2>
          <p className="mb-8 pr-12 text-lg">
            Across Africa, the internet-based economy is on the rise. In the
            past decade alone, several African nations have achieved sustained
            growth in internet-driven GDP (iGDP)2– in many cases doubling from
            1.5% to more than 3% since 20123.
          </p>
          <p className="mb-8 pr-12 text-lg">
            Some countries are on an especially rapid trajectory. For example,
            by 2050, the share of the economy powered by the internet (the iGDP)
            in Kenya, Morocco, Senegal, and South Africa will be approximately
            6%, similar to where the US is today. While others, like Ghana, are
            set to reach between 4%-5% iGDP, comparable to Brazil’s present
            level.
          </p>
          <p className="mb-8 pr-12 text-lg">
            Some countries are on an especially rapid trajectory. For example,
            by 2050, the share of the economy powered by the internet (the iGDP)
            in Kenya, Morocco, Senegal, and South Africa will be approximately
            6%, similar to where the US is today. While others, like Ghana, are
            set to reach between 4%-5% iGDP, comparable to Brazil’s present
            level.
          </p>
          <p className="mb-8 pr-12 text-lg">
            Buoyed by these exciting trends, the internet economy could
            contribute up to:
          </p>
          <p className="mb-8 pr-12 text-lg">$180B</p>
          <p className="mb-8 pr-12 text-lg">to the African economy by 20254</p>
          <p className="mb-8 pr-12 text-lg">$712B</p>
          <p className="mb-8 pr-12 text-lg">to the African economy by 20254</p>
          <p className="mb-8 pr-12 text-lg">
            With a whole range of lagging and leading indicators pointing
            towards accelerated growth, Africa’s fast-expanding tech ecosystem
            is an outstanding opportunity for tech and non-tech companies to
            make their move into the continent.
          </p>
          <p className="mb-8 pr-12 text-lg">
            In fact, it’s no exaggeration to say that Africa offers a comparable
            level of potential to that previously seen in the APAC region.
          </p>
          <blockquote className="italic border-l-4 border-grey-600 pl-6">
            <p className="mb-8 pr-12 text-lg">
              "If Africa sustains and accelerates structural reforms, the
              continent has the potential to emulate China’s rapid economic rise
              over the past 50 years5".
            </p>
            <p>
              <strong>— World Economic Forum</strong>
            </p>
          </blockquote>
        </div>

        <div className="section-3 px-6 py-4 leading-snug">
          <h2 className="text-[2em] font-bold py-6 pr-16">
            The Africa tech ecosystem is strong and rapidly getting stronger
          </h2>
          <p className=" mb-8 pr-12 text-lg">
            Africa is also on pace to be home to the world’s next mass
            generation of consumers and talent. Consumer spending is expected to
            grow by two-thirds between 2015 and 2030 – especially for Africa’s
            fast-growing urban population which spends 80% more on goods and
            services than the continent average6. Even more exciting, Africa’s
            522 million internet users today are expected to expand by 11% over
            the next decade to comprise 16% of the global total7.
          </p>
          <p className=" mb-8 pr-12 text-lg">
            In line with its increasingly affluent and internet-enabled consumer
            base, the tech talent pool is also on the rise. Across the
            continent, the number of software developers has increased by 4%
            between April 2020 and October 20218. That compares with a ~1%
            increase in the US over a similar period9. Put another way, there
            are now more software developers in Africa (720K)10than in the
            entire state of California (630K)11. Africa’s potential to grow this
            talent pool at a grassroots level is particularly exciting,
            especially as western talent growth is leveling out. And it comes at
            a time when technology, like low-code/no-code (LCNC), is enabling
            developers and businesses to do more with less. For example,
            Africa’s massive supply of SMBs and junior developer talent can now
            easily spin up a website, payment capabilities, or apps without
            having or hiring advanced technical expertise or resources.
          </p>
          <p className=" mb-8 pr-12 text-lg">
            This isn’t a far-off-future scenario. It’s happening now. Companies
            across the globe are already tapping into Africa’s abundant supply
            of talent. As the global shift to remote work globalized the talent
            pool for software developers, Africa is now even better positioned
            to attract a meaningful share of global demand. Our research shows
            that 38% of African software developers now work for at least one
            company headquartered outside the continent12.
          </p>
        </div>

        <div className="section-4 px-6 leading-snug">
          <h2 className="text-[2em] font-bold py-6 pr-16">
            Local digital transformation surges
          </h2>
          <p className=" mb-8 pr-12 text-lg">
            There’s a clear link between digital and economic growth, and Africa
            is poised to take advantage. Across the continent, 40% of the
            population (over 500 million people) now have internet access,
            catching up with India’s current 50% penetration13. With each 10%
            increase (which Africa is expected to achieve in the next decade),
            Africa can be expected to see a 2.5% increase in GDP per capita,
            compared with 2% globally14. Local businesses have been capitalizing
            on these promising trends. In the last two years, the use of digital
            tools and platforms in business surged.
          </p>
          <p className=" mb-8 pr-12 text-lg">22%</p>
          <p className=" mb-8 pr-12 text-lg">
            of sub-Saharan businesses said that they’d either started to use or
            increased their use of digital tech during 202015.
          </p>
          <p className=" mb-8 pr-12 text-lg">
            At the government level, there are also some very encouraging and
            positive signs. We have recently seen the launch of a number of
            promising, pro-innovation initiatives that aim to further accelerate
            tech growth. These include initiatives such as the Tunisian Startup
            Act, which is intended to foster and incentivize tech
            entrepreneurship. The Nigerian government is also planning to set up
            a Centre for AI and Robotics16, and Egypt has set up an AI Portal
            that aims to showcase the country’s progress in digitalization and
            highlight AI projects and events17. That’s not all. Regional
            harmonization is an ongoing trend, with the Africa Continental Free
            Trade agreement seen as a major boost for pan-continental digital
            businesses.
          </p>
        </div>

        <div className="section-5 px-6 leading-snug">
          <h2 className="text-[2em] font-bold py-6 pr-16">
            Startups take flight
          </h2>
          <p className=" mb-8 pr-12 text-lg">
            Africa is also home to a flourishing startup ecosystem. Since 2020,
            venture capital investment bounced back emphatically, reaching over
            $4.3 billion in 202118. Between 2015 and 2021, investment has grown
            more than 10 times19. These investments are supercharging new
            technologies and innovative businesses in the continent. &#160;
            <strong>
              Nigeria is a particularly exciting case in point, with leading
              training and skills development and a thriving ecosystem of
              startups
            </strong>
            .
          </p>
          <blockquote className="italic border-l-4 border-grey-600 pl-6">
            <p className=" mb-8 pr-12 text-lg">
              "Nigeria has become a beacon of start-up success, especially for
              fintech, capturing 37% of all VC funding in Africa in the first
              eight months of 2021 alone20."
            </p>
          </blockquote>
          <p className="mb-8 pr-12 text-lg">
            Nigeria is now established as a vibrant hub for new tech businesses,
            as shown by the 2019 NYSE debut of e-commerce player Jumia,
            surpassing a $1 billion valuation21. This is a promising sign for
            local skill development as 56% of developers we surveyed work for
            startups22, where they gain significant practical experience.
          </p>
          <p className="mb-8 pr-12 text-lg">
            So, what’s attracting this surge in startups and VC interest? Over
            the past two years, the relative risk of African investments has
            decreased as investors began to assess mature and emerging markets
            more similarly. As the assessment of risk in regions like Europe and
            the US have skyrocketed, the relative risk of investing in African
            countries has decreased. Regional resilience is another big draw23.
            Africa’s increasingly diversified economies are driving a faster
            economic recovery as well as reducing poverty23. Long-term
            structural trends are also playing their part. The African
            population is young, urban and tech-optimistic. And improving
            infrastructure, along with positive regulatory developments, is
            driving down the costs of pan-continental transactions23.
          </p>
        </div>

        <div className="section-6 px-6 leading-snug">
          <h2 className="text-[2em] font-bold py-6 pr-16">Getting going</h2>
          <p className="mb-8 pr-12 text-lg">
            As we’ve shown, many signposts are pointing the way to a bright
            digital future for Africa. Companies everywhere need to pay
            attention. So how should they move forward?
          </p>
          <p className="mb-8 pr-12 text-lg">
            The good news is that global companies provide an example to
            fast-follow. The likes of Amazon, Google, Microsoft and Orange have
            invested heavily in digital infrastructure and upskilling in the
            last 10 years to further improve the tech ecosystem’s foundations.
            Companies like them have succeeded by partnering with local
            governments and businesses as a way to better navigate the
            regulatory environment and local population needs and wants.
          </p>
          <p className="mb-8 pr-12 text-lg">
            Making sure that products and services meet local requirements is
            essential. Just think back to when mobile payments player M-Pesa
            launched in Kenya in 2007, giving Africa mobile banking before
            anywhere else in the world. It quickly became indispensable across
            several countries in the continent, by extending payment services to
            more than 50 million people24in otherwise underserved communities,
            leapfrogging the need for traditional telecoms and banking
            infrastructures.
          </p>
          <p className="mb-8 pr-12 text-lg">
            We could well see a similarly disruptive opportunity through
            low-code solutions to democratize digital innovation in Africa. Not
            only could these accelerate the continent’s digital transformation,
            but they could also empower a whole new generation of local
            developer talent to achieve innovation at scale and create powerful
            new solutions for the African market – and beyond. These could, in
            turn, help local tech companies punch above their weight on local
            and global stages.
          </p>
          <p className="mb-8 pr-12 text-lg">
            It’s hard to exaggerate the scale of the opportunity. The time to
            plan your African success story is now. Regardless of industry,
            Africa must be a key component of any global expansion roadmap.
            Accenture is an ideal partner to help structure and execute African
            expansion. Our unique purview on Africa is underpinned by local
            experts and extensive market knowledge.
          </p>
        </div>
      </article>

      <div className="sources px-44 leading-relaxed">
        <div className="px-4 py-6">
          <h2 className="text-[2em] font-bold py-6 pr-16">Sources</h2>
          <ol className="list-decimal flex flex-col gap-y-5 pr-12 pl-6 text-lg">
            <li className="pl-4 text-gray-600">
              <p className="text-black">Statista</p>
            </li>
            <li className="pl-4 text-gray-600">
              <p className="text-black">
                The proportion of GDP generated by the internet economy
              </p>
            </li>
            <li className="pl-4 text-gray-600">
              <p className="text-black">Accenture Analysis</p>
            </li>
            <li className="pl-4 text-gray-600">
              <p className="text-black">
                Google/IFC
                <a
                  className="underline"
                  href="https://kstatic.googleusercontent.com/files/ad1166fd6e3289b5e6445c73e4cff5bbb9df1927d35cff4f4b5efa8ebb4fe16620d5ddb499d17956ea850bcac8f6d05faf1c2f1ca7f558bf1296b5303958f334"
                >
                  e-Conomy Africa 2020
                </a>
              </p>
            </li>
            <li className="pl-4 text-gray-600">
              <p className="text-black">
                <a
                  className="underline"
                  href="https://www.africabv.com/what-can-we-expect-from-africa-consumer-spending-in-the-future/"
                >
                  Africa Business Ventures
                </a>
              </p>
            </li>
            <li className="pl-4 text-gray-600">
              <p className="text-black">
                Google/IFC
                <a
                  className="underline"
                  href="https://kstatic.googleusercontent.com/files/ad1166fd6e3289b5e6445c73e4cff5bbb9df1927d35cff4f4b5efa8ebb4fe16620d5ddb499d17956ea850bcac8f6d05faf1c2f1ca7f558bf1296b5303958f334"
                >
                  e-Conomy Africa 2020
                </a>
              </p>
            </li>
            <li className="pl-4 text-gray-600">
              <p className="text-black">
                <a
                  className="underline"
                  href="https://www.itu.int/dms_pub/itu-d/opb/pref/D-PREF-EF.BDT_AFR-2019-PDF-E.pdf#zoom=50"
                >
                  ITU
                </a>
              </p>
            </li>
            <li className="pl-4 text-gray-600">
              <p className="text-black">Accenture Analysis</p>
            </li>
            <li className="pl-4 text-gray-600">
              <p className="text-black">
                <a
                  className="underline"
                  href="https://www.daxx.com/blog/development-trends/number-software-developers-world"
                >
                  Daxx.com
                </a>
                (Evans Data Corporation)
              </p>
            </li>
            <li className="pl-4 text-gray-600">
              <p className="text-black">Accenture Analysis</p>
            </li>
            <li className="pl-4 text-gray-600">
              <p className="text-black">
                <a
                  className="underline"
                  href="https://www.daxx.com/blog/development-trends/number-software-developers-world"
                >
                  Daxx.com
                </a>
                (Evans Data Corporation)
              </p>
            </li>
            <li className="pl-4 text-gray-600">
              <p className="text-black">Accenture Analysis</p>
            </li>
            <li className="pl-4 text-gray-600">
              <p className="text-black">
                <a
                  className="underline"
                  href="https://www.itu.int/dms_pub/itu-d/opb/pref/D-PREF-EF.BDT_AFR-2019-PDF-E.pdf#zoom=50"
                >
                  ITU
                </a>
              </p>
            </li>
            <li className="pl-4 text-gray-600">
              <p className="text-black">
                Google/IFC
                <a
                  className="underline"
                  href="https://kstatic.googleusercontent.com/files/ad1166fd6e3289b5e6445c73e4cff5bbb9df1927d35cff4f4b5efa8ebb4fe16620d5ddb499d17956ea850bcac8f6d05faf1c2f1ca7f558bf1296b5303958f334"
                >
                  e-Conomy Africa 2020
                </a>
              </p>
            </li>
            <li className="pl-4 text-gray-600">
              <p className="text-black">
                <a
                  className="underline"
                  href="https://openknowledge.worldbank.org/bitstream/handle/10986/35342/9781464817144.pdf#zoom=50"
                >
                  WorldBank
                </a>
              </p>
            </li>
            <li className="pl-4 text-gray-600">
              <p className="text-black">
                <a
                  className="underline"
                  href="https://syncedreview.com/2020/09/04/nigerian-government-to-set-up-the-nations-centre-for-ai-and-robotics-to-empower-students/"
                >
                  Synced: AI Technology &amp; Industry Review
                </a>
              </p>
            </li>
            <li className="pl-4 text-gray-600">
              <p className="text-black">
                <a
                  className="underline"
                  href="https://dailynewsegypt.com/2021/07/04/egypts-cit-minister-launches-ai-platform-under-national-council-for-artificial-intelligence/"
                >
                  Daily News Egypt
                </a>
              </p>
            </li>
            <li className="pl-4 text-gray-600">
              <p className="text-black">
                <a
                  className="underline"
                  href="https://thebigdeal.substack.com/p/q3-2021-2020"
                >
                  Max Cuvellier, Africa: The Big Deal
                </a>
              </p>
            </li>
            <li className="pl-4 text-gray-600">
              <p className="text-black">
                <a
                  className="underline"
                  href="https://cdn-website.partechpartners.com/media/documents/2021-02_Partech_Africa_2020_Africa_Tech_VC_Report.pdf#zoom=50"
                >
                  Partech
                </a>
                2015-2019 and The Big Deal (
                <a
                  className="underline"
                  href="https://thebigdeal.substack.com/p/all-the-worlds-a-stage"
                >
                  2020
                </a>
                ,
                <a
                  className="underline"
                  href="https://thebigdeal.substack.com/p/q3-2021-2020"
                >
                  2021 YTD
                </a>
                )
              </p>
            </li>
            <li className="pl-4 text-gray-600">
              <p className="text-black">
                <a
                  className="underline"
                  href="https://thebigdeal.substack.com/p/q3-2021-2020"
                >
                  Max Cuvellier, Africa: The Big Deal
                </a>
              </p>
            </li>
            <li className="pl-4 text-gray-600">
              <p className="text-black">
                <a
                  className="underline"
                  href="https://techcrunch.com/2019/04/12/african-e-commerce-startup-jumias-shares-open-at-14-50-in-nyse-ipo/"
                >
                  Tech Crunch
                </a>
              </p>
            </li>
            <li className="pl-4 text-gray-600">
              <p className="text-black">Accenture Analysis</p>
            </li>
            <li className="pl-4 text-gray-600">
              <p className="text-black">
                <a
                  className="underline"
                  href="https://www.howwemadeitinafrica.com/the-new-investment-case-for-africa-and-emerging-sectors-of-opportunity/74375/"
                >
                  How We Made It in Africa
                </a>
              </p>
            </li>
            <li className="pl-4 text-gray-600">
              <p className="text-black">
                <a
                  className="underline"
                  href="https://www.vodafone.com/news/press-release/m-pesa-celebrates-reaching-50-million-customers"
                >
                  Vodafone
                </a>
              </p>
            </li>
          </ol>
        </div>
      </div>

      {/* GRID IMAGES */}
      <div>
        <InsightPreview
          firstCol={"hidden"}
          moreInsights={"hidden"}
          colsNo={3}
        />
      </div>
    </>
  );
};

export default AfricaDigital;
