"use client";
import { useState } from "react";

const Add = () => {
  const [quentity, setQuentity] = useState(1);

  // TEMPORARY
  const stock = 4;

  const handleQuentity = (type: "i" | "d") => {
    if (type === "d" && quentity > 1) {
      setQuentity((prev) => prev - 1);
    }
    if (type === "i" && quentity < stock) {
      setQuentity((prev) => prev + 1);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quentity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuentity("d")}
            >
              -
            </button>
            {quentity}
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuentity("i")}
            >
              +
            </button>
          </div>
          <div className="text-xs">
            Only <span className="text-orange-500 ">4 items</span> 4 item left!
            <br /> {"Don't"} miss it
          </div>
        </div>
        <button className="w-36 text-sm rounded-3xl ring-1 ring-lama text-lama py-2 px-4 hover:bg-lama hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:ring-0 disabled:text-white disabled:ring-none">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default Add;
