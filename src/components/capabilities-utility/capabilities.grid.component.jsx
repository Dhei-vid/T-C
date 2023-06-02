import { useState } from "react";

const CapabilitiesGridImages = ({ translate1, translate2, translate3 }) => {
  const [text1, setText1] = useState(false);
  const [text2, setText2] = useState(false);
  const [text3, setText3] = useState(false);

  const onClickHandler1 = () => {
    setText1(!text1);
  };
  const onClickHandler2 = () => {
    setText2(!text2);
  };
  const onClickHandler3 = () => {
    setText3(!text3);
  };

  return (
    <>
      <div className="relative text-white overflow-hidden w-full h-[80vh] bg-[url('https://images.pexels.com/photos/7690162/pexels-photo-7690162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center">
        <div className="h-[80vh] bg-gradient-to-t from-black via-transparent to-transparent">
          <div
            className={`flex flex-col justify-center md:px-10 px-6 content-end overlay transition-transform duration-300 ease-in-out transform  ${
              text1
                ? `md:${translate1} translate-y-[50%]`
                : "translate-y-full h-[72vh]"
            }`}
          >
            <button
              onClick={onClickHandler1}
              className="flex w-full justify-between items-center text-2xl font-extrabold text-white"
            >
              <p>Digital Advisory</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className={`w-8 h-8 transition-all transition-transform duration-300 ease-in-out ${
                  text1 ? "rotate-45" : "rotate-0"
                }`}
              >
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
              </svg>
            </button>
            <div
              className={`grid grid-cols-1 self-center overlay transition-transform duration-300 ease-in-out transform ${
                text1 ? "" : "h-[100vh]"
              }`}
            >
              <p className="pt-5">
                Our digital advisory services are to help companies and
                organizations achieve their goals in innovation and digital
                transformation in the most efficient way and stay relevant using
                information technology and digital channels.
              </p>
              <p className="pt-3">
                The range of IT consulting services spans from building a
                long-term digital innovation strategy to immediate
                transformations like integrations with third-party services,
                cloud migration, business process automation, consulting on big
                data, and custom software development.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECOND GRID ITEM */}
      <div className="relative text-white overflow-hidden w-full h-[80vh] bg-[url('https://images.pexels.com/photos/6393342/pexels-photo-6393342.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center">
        <div className="h-[80vh] bg-gradient-to-t from-black via-transparent to-transparent">
          <div
            className={`flex flex-col justify-center md:px-10 px-6 content-end overlay transition-transform duration-300 ease-in-out transform  ${
              text2
                ? `md:${translate2} translate-y-[50%]`
                : "translate-y-full h-[72vh]"
            }`}
          >
            <button
              onClick={onClickHandler2}
              className="flex w-full justify-between items-center text-2xl font-extrabold text-white"
            >
              <p>Data Science Consulting</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className={`w-8 h-8 transition-all transition-transform duration-300 ease-in-out ${
                  text2 ? "rotate-45" : "rotate-0"
                }`}
              >
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
              </svg>
            </button>
            <div
              className={`grid grid-cols-1 self-center overlay transition-transform duration-300 ease-in-out transform ${
                text2 ? "" : "h-[100vh]"
              }`}
            >
              <p className="pt-5">
                Digitalesque renders data science consulting leveraging Machine
                Learning, Artificial Intelligence, and Deep Learning
                technologies to meet our clients’ most deliberate analytics
                needs. We can share and implement data science best practices to
                drive your decision-making with careful forecasting and
                effective root-cause analysis.
              </p>
              <p className="pt-5 opacity-0">
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

      {/* THIRD GRID ITEM */}
      <div className="relative text-white overflow-hidden w-full h-[80vh] bg-[url('https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center">
        <div className="h-[80vh] bg-gradient-to-t from-black via-transparent to-transparent">
          <div
            className={`flex flex-col justify-center md:px-10 px-6 content-end overlay transition-transform duration-300 ease-in-out transform  ${
              text3
                ? `md:${translate3} translate-y-[50%]`
                : "translate-y-full h-[72vh]"
            }`}
          >
            <button
              onClick={onClickHandler3}
              className="flex w-full justify-between items-center text-2xl font-extrabold text-white"
            >
              <p>Digital Culture Advisory</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className={`w-8 h-8 transition-all transition-transform duration-300 ease-in-out ${
                  text3 ? "rotate-45" : "rotate-0"
                }`}
              >
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
              </svg>
            </button>
            <div
              className={`grid grid-cols-1 self-center overlay transition-transform duration-300 ease-in-out transform ${
                text3 ? "" : "h-[100vh]"
              }`}
            >
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

      {/* SECOND GRID ITEM */}
      {/* <div className="relative text-white overflow-hidden w-full h-[80vh] bg-[url('https://images.pexels.com/photos/6393342/pexels-photo-6393342.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center">
        <div className="h-[80vh] bg-gradient-to-t from-black via-transparent to-transparent">
          <div
            className={`flex flex-col justify-center md:px-10 px-6 content-end overlay transition-transform duration-300 ease-in transform  ${
              text2
                ? `md:${translate2} translate-y-[60%]`
                : "translate-y-full h-[72vh]"
            }`}
          >
            <button
              onClick={onClickHandler2}
              className="flex w-full justify-between items-center text-2xl font-extrabold text-white"
            >
              <p>Data Science Consulting</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className={`w-8 h-8 transition-all transition-transform duration-300 ease-in-out ${
                  text2 ? "rotate-45" : "rotate-0"
                }`}
              >
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
              </svg>
            </button>
            <div
              className={`grid grid-cols-1 self-center overlay transition-transform duration-300 ease-in-out transform ${
                text2 ? "" : "h-[100vh]"
              }`}
            >
              <p className="pt-5">
                Digitalesque renders data science consulting leveraging Machine
                Learning, Artificial Intelligence, and Deep Learning
                technologies to meet our clients’ most deliberate analytics
                needs. We can share and implement data science best practices to
                drive your decision-making with careful forecasting and
                effective root-cause analysis.
              </p>
              <p className="pt-5 opacity-0">
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

      {/* THIRD GRID ITEM */}
      {/* <div className="relative text-white overflow-hidden w-full h-[80vh] bg-[url('https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center">
        <div className="h-[80vh] bg-gradient-to-t from-black via-transparent to-transparent">
          <div
            className={`flex flex-col justify-center md:px-10 px-6 content-end overlay transition-transform duration-500 ease-in-out transform  ${
              text3
                ? `md:${translate3} translate-y-[40%]`
                : "translate-y-full h-[72vh]"
            }`}
          >
            <button
              onClick={onClickHandler3}
              className="flex w-full justify-between items-center text-2xl font-extrabold text-white"
            >
              <p>Digital Culture Advisory</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className={`w-8 h-8 transition-all transition-transform duration-300 ease-in-out ${
                  text3 ? "rotate-45" : "rotate-0"
                }`}
              >
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
              </svg>
            </button>
            <div
              className={`grid grid-cols-1 self-center overlay transition-transform duration-300 ease-in-out transform ${
                text3 ? "" : "h-[100vh]"
              }`}
            >
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
      </div> */}
    </>
  );
};

export default CapabilitiesGridImages;
