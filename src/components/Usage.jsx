import React, { useEffect, useState } from "react";

const Usage = () => {
  const [checkboxes, setCheckboxes] = useState([
    { id: "daily", isChecked: false },
    { id: "once", isChecked: false },
    { id: "monthly", isChecked: false },
    { id: "rarely", isChecked: false },
  ]);
  useEffect(() => {
    console.log(checkboxes);
  }, [checkboxes]);
  return (
    <div className="mt-12">
      <h1 className=" text-2xl font-medium">Usage</h1>
      <div className="text-zinc-500">
        We don’t track your usage - would you be willing to share how much you
        use the app?
      </div>
      <div className="my-10">
        <div></div>
        {checkboxes.map((items, idx) => {
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
                    setCheckboxes([...checkboxes]);
                  } else {
                    items.isChecked = false;
                    setCheckboxes([...checkboxes]);
                  }
                }}
              />
            </div>
          );
        })}
        <button className="w-full bg-[#14B8A6] mt-24  text-white p-3 rounded-md hover:bg-[#14b8a5a1]">
          Next
        </button>
      </div>
    </div>
  );
};

export default Usage;
