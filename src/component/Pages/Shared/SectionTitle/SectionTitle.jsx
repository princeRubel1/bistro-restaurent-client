const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center  max-w-screen-xl mx-auto space-y-2 mb-20">
      <p style={{ fontStyle: "italic" }} className=" text-yellow-600 text-xl">
        {subHeading}
      </p>
      <h2 className=" text-3xl font-semibold border-y-4 py-2">{heading}</h2>
    </div>
  );
};

export default SectionTitle;
