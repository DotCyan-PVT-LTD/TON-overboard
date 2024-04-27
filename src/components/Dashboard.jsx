import React, { useEffect, useState } from "react";
import { CreditCard, PersonStanding } from "lucide-react";
const Dashboard = () => {
  const [categories, setcategories] = useState({
    yoga: null,
    Mindfulness: null,
    Strength: null,
  });
  useEffect(() => {
    console.log(categories);
  }, [categories]);

  return (
    <div className="mt-16">
      <h1 className="text-5xl ">
        <div className="flex gap-5 items-center">
          <span className="font-bold">Hey Alex</span>
          <span>
            <img src="/thugLife.png" alt="img" className="w-16" />
          </span>
        </div>
      </h1>
      <p className="my-4 text-2xl tracking-tight">
        You meditated for <span className="font-medium">20 minutes&ensp;</span>
        yesterday -<span className="font-medium">do it again today.</span>
      </p>
      <div className="p-2 border">
        <div className="grid grid-cols-5  place-items-center gap-4 space-x-1">
          <div className="p-2 bg-gray-600 rounded-md ml-4">
            <CreditCard size={48} color="white" />
          </div>

          <div className="col-span-4 space-x-2 text-sm tracking-tight ">
            <p></p>
            <div>
              <p className="font-medium">Got a sec??</p>
              <p className="text-zinc-500 ">
                {`You’ve used Relaxify for a week now - help us improve the app (
            it’ll take two minutes )`}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* recommended */}
      <div className="mt-10">Recommended</div>
      <div className=" border rounded-md">
        <div>
          <img src="/YogaDummy.png" alt="yogaimg" />
        </div>
        <div className="flex justify-between p-3 text-lg items-center">
          <div>
            <div className="font-medium">Serenity</div>
            <div className="text-zinc-400">20 min yoga with Jan</div>
          </div>
          <div>
            <button className="bg-[#99F6E4] px-4 py-2 text-[#115E59] rounded-md">
              start
            </button>
          </div>
        </div>
      </div>
      {/* tip of the day */}
      <div className="mt-6 text-zinc-500 tracking-tight">
        <p className="text-sm">
          <span className="font-medium text-black">Tip of the day</span> <br />
          When you’re feeling stressed, try to do something simple for just a
          couple of minutes. Read a few pages of a book or something else you
          find relaxing - but try to avoid a screen being involved.
        </p>
      </div>
      {/* Categories */}
      <div className="mt-6">
        <div className="text-sm font-medium">Categories</div>
        <div className="grid grid-cols-2 gap-4 my-3 text-sm">
          <button
            className="p-9 border rounded-md flex flex-col items-center"
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
            className="p-9 border rounded-md flex flex-col items-center "
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
            className="p-9 border rounded-md flex flex-col items-center "
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
