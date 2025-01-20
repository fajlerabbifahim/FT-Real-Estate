import React from "react";

function SectionTitle({ title, subTitle }) {
  return (
    <>
      <div className="text-center pt-20 pb-8">
        <h1 className="text-4xl font-semibold">{title}</h1>
        <p className="font-medium mt-2">{subTitle}</p>
      </div>
    </>
  );
}

export default SectionTitle;
