const ClientGrid = ({ data }) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="col-end-3 py-10 px-4 border-t-2 border-black first:border-none"
          >
            <h1 className="text-xl md:text-3xl font-heading tracking-wide font-bold">
              {item.header}
            </h1>
            <p className="md:text-lg text-black">{item.text}</p>
          </div>
        );
      })}
    </>
  );
};

export default ClientGrid;
