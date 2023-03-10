// export default TestSwipe;
import classNames from "classnames";
import React, { useState } from "react";
import DispatchCard from "./DispatchCard";
// import TinderCard from "react-tinder-card";

import dislikeImage from "../assets/woozy-face_1f974.png";
import thumbsupImage from "../assets/thumbs-up_1f44d.png";
import { Spinner } from "./Spinner";

const items = [
  {
    name: "",
    id: 32,
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
    id: 32,
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

function TestSwipe(props: { onComplete: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentItems, setCurrentItems] = useState(items);

  const setLike = (val: boolean) => {
    const newItems = [...currentItems];
    currentItems[currentIndex].liked = val;

    setCurrentItems(newItems);
    setCurrentIndex(currentIndex + 1);

    if (currentIndex === items.length - 1) {
      setTimeout(() => {
        props.onComplete();
      }, 500);
    }
  };

  return (
    <div className="text-white text-center">
      <h1 className="my-10 text-base">
        Tell us what kind of messages you would like to see...
      </h1>
      <div className="flex justify-center items-center max-w-[800px] mx-auto">
        <div
          className="btn cursor-pointer flex flex-col justify-center items-center border border-[#0E1116] hover:border-[#4088F7] hover:rounded p-2 transition ml-4 w-[100px]"
          onClick={() => setLike(false)}
        >
          <img src={dislikeImage} alt="" className="w-6 mb-1" />
          No thanks!
        </div>
        <div className="cardContainer w-[400px] h-[440px] mx-[80px] overflow-hidden">
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
              <DispatchCard dispatchMessageId={String(item.id)} />
            </div>
          ))}
        </div>
        <div
          className="btn cursor-pointer flex flex-col justify-center items-center border border-[#0E1116] hover:border-[#4088F7] hover:rounded p-2 transition mr-4 w-[100px]"
          onClick={() => setLike(true)}
        >
          <img src={thumbsupImage} alt="" className="w-6 mb-1" />
          more like this
        </div>
      </div>
      {/* <p>currentItems: {JSON.stringify(currentItems)}</p> */}
    </div>
  );
}

export default TestSwipe;
