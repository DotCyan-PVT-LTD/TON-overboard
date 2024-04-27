import React, { useRef } from "react";

const Feedback = () => {
  const textref = useRef();
  const handlechange = () => {
    console.log(textref.current.value);
  };
  return (
    <div className="mt-12">
      <h1 className=" text-2xl font-medium">Thank you!!</h1>
      <div className="text-zinc-500">
        Thanks for taking the time to tell us your thoughts, it means a lot to
        us.
      </div>
      <div className="text-zinc-500 mt-4">
        If you have anymore to share, please add it below.
      </div>
      <div className="w-full py-3 px-3 mt-4 border rounded-md">
        <textarea
          name="feedback"
          id=""
          rows="10"
          className="w-full focus:focus:outline-0"
          onChange={handlechange}
          ref={textref}
          placeholder="Penny for your thoughts?"
        ></textarea>
      </div>
      <button className="w-full bg-[#14B8A6] mt-16  text-white p-3 rounded-md hover:bg-[#14b8a5a1]">
        Close
      </button>
    </div>
  );
};

export default Feedback;
