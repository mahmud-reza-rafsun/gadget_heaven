import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <div className="mt-48 lg:mt-96 text-center">
      <h2 className="text-3xl lg:text-4xl font-semibold lg:font-bold">
        {title}
      </h2>
      <p>{subtitle}</p>
    </div>
  );
};

export default Heading;
