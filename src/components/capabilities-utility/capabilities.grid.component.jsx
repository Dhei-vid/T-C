const CapabilitiesGridImages = () => {
  return (
    <>
      <div className="w-full md:min-h-[80vh] min-h-[65vh] bg-[url('https://images.pexels.com/photos/7690162/pexels-photo-7690162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center">
        <div className="p-10 md:min-h-full pt-[100%] bg-gradient-to-t from-black">
          <button className="flex w-full justify-between items-center text-2xl font-extrabold text-white">
            <p>Data Science Consulting</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="w-8 h-8 transition-all "
            >
              <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
            </svg>
          </button>
          <div className="text-base text-white hidden">
            <p className="pt-5">
              Our digital advisory services are to help companies and
              organizations achieve their goals in innovation and digital
              transformation in the most efficient way and stay relevant using
              information technology and digital channels.
            </p>
            <p className="pt-3">
              The range of IT consulting services spans from building a
              long-term digital innovation strategy to immediate transformations
              like integrations with third-party services, cloud migration,
              business process automation, consulting on big data, and custom
              software development.
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full md:min-h-[80vh] min-h-[65vh] bg-[url('https://images.pexels.com/photos/6393342/pexels-photo-6393342.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center">
        <div className="p-10 md:min-h-full pt-[100%] bg-gradient-to-t from-black">
          <div className="transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
            <button className="flex w-full justify-between items-center text-2xl font-extrabold text-white">
              <p>Data Science Consulting</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="w-8 h-8 transition-all "
              >
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
              </svg>
            </button>
            <div className="text-base text-white hidden">
              <p className="pt-5">
                Digitalesque renders data science consulting leveraging Machine
                Learning, Artificial Intelligence, and Deep Learning
                technologies to meet our clients’ most deliberate analytics
                needs. We can share and implement data science best practices to
                drive your decision-making with careful forecasting and
                effective root-cause analysis.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full md:min-h-[80vh] min-h-[65vh] bg-[url('https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center">
        <div className="px-10 md:min-h-full pt-[100%] bg-gradient-to-t from-black">
          <div className="absolute top-[25%] pr-4">
            <button className="flex w-full justify-between items-center text-2xl font-extrabold text-white">
              <p>Digital Culture Advisory</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="w-8 h-8 transition-all "
              >
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
              </svg>
            </button>
            <div className="text-base text-white ">
              <p className="pt-5">
                This involves providing training and advice on different digital
                areas and empowering employees to be able to work within this
                environment. It also includes developing a strategy that allows
                companies and organizations to capitalize on the digital world
                and changing the mindset of employees to explore the ways that
                technology can help improve prospects.
              </p>
              <p className="pt-3">
                Our Digital Culture specialists also help support teams to work
                collaboratively and to share ideas on digital strategy ensuring
                everyone is on board and embracing technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CapabilitiesGridImages;
