import { PersonStanding } from "lucide-react";
import React, { useState, useEffect } from "react";

const MyFavourites = () => {
  const [categories, setcategories] = useState({
    yoga: null,
    Mindfulness: null,
    Strength: null,
    Sleep: null,
    dailytips: null,
    trainer: null,
  });
  useEffect(() => {
    console.log(categories);
  }, [categories]);
  return (
    <div className="mt-8">
      <h1 className=" text-2xl font-medium">Favourites</h1>
      <div className="text-zinc-500">
        Whats your favourite part of Relaxify? If you love a few parts equally,
        select them all!
      </div>
      {/* Categories section */}
      <div className="my-12 grid grid-cols-2 gap-4 text-sm">
        <button
          className="p-5 border rounded-md flex flex-col items-center"
          style={{ border: categories?.yoga ? "1px solid green" : "" }}
          value={"Yoga"}
          onClick={(e) =>
            setcategories((prev) => {
              if (prev.yoga) {
                return { ...prev, yoga: null };
              }
              return { ...prev, yoga: "Yoga" };
            })
          }
        >
          <div className="">
            <PersonStanding />
          </div>
          <div>Yoga</div>
        </button>
        <button
          className="p-5 border rounded-md flex flex-col items-center "
          value={"Mindfulness"}
          style={{
            border: categories?.Mindfulness ? "1px solid green" : "",
          }}
          onClick={(e) =>
            setcategories((prev) => {
              if (prev.Mindfulness) {
                return { ...prev, Mindfulness: null };
              }
              return { ...prev, Mindfulness: "Mindfulness" };
            })
          }
        >
          <div className="">
            <PersonStanding />
          </div>
          <div>Mindfulness</div>
        </button>
        <button
          className="p-5 border rounded-md flex flex-col items-center "
          value={"Strength"}
          style={{
            border: categories?.Strength ? "1px solid green" : "",
          }}
          onClick={(e) =>
            setcategories((prev) => {
              if (prev.Strength) {
                return { ...prev, Strength: null };
              }
              return { ...prev, Strength: "Strength" };
            })
          }
        >
          <div className="">
            <PersonStanding />
          </div>
          <div>Strength</div>
        </button>

        <button
          className="p-5 border rounded-md flex flex-col items-center "
          value={"Sleep"}
          style={{
            border: categories?.Sleep ? "1px solid green" : "",
          }}
          onClick={(e) =>
            setcategories((prev) => {
              if (prev.Sleep) {
                return { ...prev, Sleep: null };
              }
              return { ...prev, Sleep: "Sleep" };
            })
          }
        >
          <div className="">
            <PersonStanding />
          </div>
          <div>Sleep</div>
        </button>

        <button
          className="p-5 border rounded-md flex flex-col items-center "
          value={"dailytips"}
          style={{
            border: categories?.dailytips ? "1px solid green" : "",
          }}
          onClick={(e) =>
            setcategories((prev) => {
              if (prev.dailytips) {
                return { ...prev, dailytips: null };
              }
              return { ...prev, dailytips: "dailytips" };
            })
          }
        >
          <div className="">
            <PersonStanding />
          </div>
          <div>Dailytips</div>
        </button>

        <button
          className="p-5 border rounded-md flex flex-col items-center "
          value={"trainer"}
          style={{
            border: categories?.trainer ? "1px solid green" : "",
          }}
          onClick={(e) =>
            setcategories((prev) => {
              if (prev.trainer) {
                return { ...prev, trainer: null };
              }
              return { ...prev, trainer: "trainer" };
            })
          }
        >
          <div className="">
            <PersonStanding />
          </div>
          <div>trainer</div>
        </button>
      </div>
      <button className="w-full bg-[#14B8A6]  text-white p-3 my-3 rounded-md hover:bg-[#14b8a5a1]">
        Next
      </button>
    </div>
  );
};

export default MyFavourites;
