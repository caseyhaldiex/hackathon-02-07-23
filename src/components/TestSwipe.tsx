// export default TestSwipe;
import classNames from "classnames";
import React, { useState } from "react";
import DispatchCard from "./DispatchCard";
// import TinderCard from "react-tinder-card";

import dislikeImage from "../assets/woozy-face_1f974.png";
import thumbsupImage from "../assets/thumbs-up_1f44d.png";

const items = [
  {
    name: "",
    id: 120,
  },
  {
    name: "",
    id: 196,
  },
  {
    name: "",
    id: 269,
  },
  {
    name: "",
    id: 120,
  },
  {
    name: "",
    id: 196,
  },
  {
    name: "",
    id: 269,
  },
] as { name: string; id: number; liked?: boolean }[];

function TestSwipe() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentItems, setCurrentItems] = useState(items);

  const setLike = (val: boolean) => {
    const newItems = [...currentItems];
    currentItems[currentIndex].liked = val;

    setCurrentItems(newItems);
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="text-white text-center">
      <h1 className="my-10">
        Tell us what kind of messages you would like to see...
      </h1>
      <div className="flex justify-center items-center max-w-[800px] mx-auto">
        <div
          className="btn cursor-pointer flex flex-col justify-center items-center"
          onClick={() => setLike(false)}
        >
          <img src={dislikeImage} alt="" className="w-6 text-center" />
          No thanks!
        </div>
        <div className="cardContainer w-[380px] h-[300px] mx-[80px] overflow-hidden">
          {items.map((item, i) => (
            <div
              className={classNames("absolute transition-all duration-500", {
                "pointer-events-none opacity-0":
                  item.liked !== undefined || i !== currentIndex,
                "translate-x-[200px] rotate-12 scale-80": item.liked === true,
                "-translate-x-[200px] -rotate-12 scale-80":
                  item.liked === false,
              })}
            >
              {item.id}
              <DispatchCard dispatchMessageId={String(item.id)} />
            </div>
          ))}
        </div>
        <div
          className="btn cursor-pointer flex flex-col justify-center items-center"
          onClick={() => setLike(true)}
        >
          <img src={thumbsupImage} alt="" className="w-6" />
          more like this
        </div>
      </div>
      {/* <p>currentItems: {JSON.stringify(currentItems)}</p> */}
    </div>
  );
}

export default TestSwipe;
