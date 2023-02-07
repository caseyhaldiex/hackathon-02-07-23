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
import React, { useState } from "react";
import DispatchCard from "./DispatchCard";
import TinderCard from "react-tinder-card";

const db = [
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
];
// const db = [
//   {
//     name: "Richard Hendricks",
//     url: "./img/richard.jpg",
//   },
//   {
//     name: "Erlich Bachman",
//     url: "./img/erlich.jpg",
//   },
//   {
//     name: "Monica Hall",
//     url: "./img/monica.jpg",
//   },
//   {
//     name: "Jared Dunn",
//     url: "./img/jared.jpg",
//   },
//   {
//     name: "Dinesh Chugtai",
//     url: "./img/dinesh.jpg",
//   },
// ];

function Simple() {
  const characters = db;
  const [lastDirection, setLastDirection] = useState<string>("");

  const outOfFrame = (name: string) => {
    console.log(name + " left the screen!");
  };

  const swiped = (direction: string, nameToDelete: string) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  return (
    <div>
      <div className="cardContainer w-80 mx-auto">
        {characters.map((character) => (
          <TinderCard
            className="swipe"
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name)}
            onCardLeftScreen={() => outOfFrame(character.name)}
          >
            <div className="absolute">
              <DispatchCard dispatchMessageId="120" />
            </div>
          </TinderCard>
        ))}
      </div>
      {/* {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />} */}
    </div>
  );
}

export default Simple;
