import Reveal from "../../utility/reveal";

const ClientsPreview = () => {
  return (
    <div className="md:px-44">
      <Reveal delay={0.5} y1={-75} y2={0}>
        <div className="pb-14 pt-20">
          <h3 className="font-bold md:text-4xl text-[1.5rem] leading-tight tracking-wide px-6">
            We have worked closely and successfully with government departments
            and major companies, and pride ourselves on meeting and exceeding
            our client’s high expectations. Here, you can find a selection of
            the many client organisations we already work closely alongside:
          </h3>
        </div>
      </Reveal>
    </div>
  );
};

export default ClientsPreview;
