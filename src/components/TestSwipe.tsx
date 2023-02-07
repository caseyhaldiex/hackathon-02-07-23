// import TinderCard from 'react-tinder-card'
// import DispatchCard from './DispatchCard'

// const onSwipe = (direction: string) => {
//   console.log('You swiped: ' + direction)
// }

// const onCardLeftScreen = (myIdentifier: string) => {
//   console.log(myIdentifier + ' left the screen')
// }

// const TestSwipe = () => {
//   return (
//     <div className="TestSwipe border border-red-500">
//       <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>
//         <DispatchCard dispatchMessageId="120" />
//       </TinderCard>
//       <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>
//         <DispatchCard dispatchMessageId="196" />
//       </TinderCard>
//     </div>
//   )
// };

// export default TestSwipe;
import classNames from "classnames";
import React, { useState } from "react";
import DispatchCard from "./DispatchCard";
// import TinderCard from "react-tinder-card";

const items = [
  {
    name: "Richard Hendricks",
  },
  {
    name: "Erlich Bachman",
  },
  {
    name: "Monica Hall",
  },
  {
    name: "Jared Dunn",
  },
  {
    name: "Dinesh Chugtai",
  },
] as { name: string; liked?: boolean }[];

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
      <h1>Tell us what kind of messages you would like to see...</h1>
      <div className="flex justify-center items-center max-w-[800px] mx-auto">
        <div className="btn cursor-pointer" onClick={() => setLike(false)}>
          no thanks
        </div>
        <div className="cardContainer w-[380px] h-[300px] mx-auto overflow-hidden">
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
              <DispatchCard dispatchMessageId="120" />
            </div>
          ))}
        </div>
        <div className="btn cursor-pointer" onClick={() => setLike(true)}>
          more like this
        </div>
      </div>
      {/* <p>currentItems: {JSON.stringify(currentItems)}</p> */}
    </div>
  );
}

export default TestSwipe;
