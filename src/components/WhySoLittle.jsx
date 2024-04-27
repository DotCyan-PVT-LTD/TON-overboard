import React, { useState, useEffect } from "react";

const WhySoLittle = () => {
  const [whyless, setWhyless] = useState([
    { id: "Expensive", isChecked: false },
    { id: "lesstime", isChecked: false },
    { id: "monthly", isChecked: false },
    { id: "rarely", isChecked: false },
  ]);
  useEffect(() => {
    console.log(whyless);
  }, [whyless]);
  return (
    <div className="mt-12">
      <h1 className=" text-2xl font-medium">Why so little??</h1>
      <div className="text-zinc-500">
        Is there something in particular putting you off coming back more often?
        Select the main reason that keeps you away.
      </div>
      <div className="my-10">
        <div></div>
        {whyless.map((items, idx) => {
          return (
            <div
              key={items.id}
              className={`flex my-2 justify-between border p-4 rounded-md checkbox-color items-center ${
                items.isChecked ? "border border-lime-500" : ""
              }`}
            >
              <label htmlFor={items.id}>{items.id}</label>
              <input
                type="checkbox"
                className=""
                id={items.id}
                onChange={() => {
                  if (!items.isChecked) {
                    items.isChecked = true;
                    setWhyless([...whyless]);
                  } else {
                    items.isChecked = false;
                    setWhyless([...whyless]);
                  }
                }}
              />
            </div>
          );
        })}
        <button className="w-full bg-[#14B8A6] mt-20  text-white p-3 rounded-md hover:bg-[#14b8a5a1]">
          Next
        </button>
      </div>
    </div>
  );
};

export default WhySoLittle;
