import data from '../services/data.json';
import { keys } from 'lodash';
import "./Topics.css"
import { useState } from 'react';

import { IoCheckmarkDoneSharp } from "react-icons/io5";

const parseData = (data:any) => {
  const topicKeys = keys(data);
  let results: any = [];
  for (let index = 0; index < topicKeys.length; index++) {
    const key = topicKeys[index];
    results.push({
      id: key,
      title: key,
      selected: false,
      description: data[key].description,
    })
  }
  return results;
};

const topicData = parseData(data);

export default function Topics() {

  const [topics, setTopics] = useState(topicData);

  const addTopic = (topics,topicId) => {
    console.log({
      topicId
    });
    for (let index = 0; index < topics.length; index++) {
      const topic = topics[index];
      if(topic.id === topicId) {
        topic.selected = true;
      }
    }
    setTopics([...topics]);
    console.log(topics);
  }

  const removeTopic = (topics,topicId) => {
    console.log({
      topicId
    });
    for (let index = 0; index < topics.length; index++) {
      const topic = topics[index];
      if(topic.id === topicId) {
        topic.selected = false;
      }
    }
    setTopics([...topics]);
    console.log(topics);
  }
  
  return (
    <div className="relative px-6 pt-2 pb-20 w-full overflow-auto">
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          {/* <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"></h2> */}
          <p className="mx-auto mt-2 text-md text-white">
            Let’s start  with what you’re interested in
          </p>
        </div>
        <div className="mt-4 grid grid-cols-3">
          {topics.map((topic:any) => (
            <div key={topic.title} className="flex flex-col shadow-lg topic-item pb-4 border-r-4">
              <div className="flex flex-1 flex-col justify-between p-4">
                <div className="flex-1 min-w-[200px]">
                  <div className="mt-2 block pb-6">
                    <p className="text-xl font-semibold text-white">{topic.title}</p>
                    <p className="mt-3 text-xs text-white pb-6">{topic.description}</p>
                  </div>
                  <div className="mt-2 block absolute bottom-8">
                    {topic.selected === false && (
                      <a className="btn text-white bg-blue-500 rounded-2xl cursor-pointer inline-flex items-center border border-transparent px-3 py-2 text-sm font-medium leading-4 shadow-sm hover:bg-black-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={() => addTopic(topics, topic.id)}>Add</a>
                    )}
                    {topic.selected === true && (
                      <a className="btn text-white bg-gray-700 rounded-2xl cursor-pointer inline-flex items-center border border-transparent px-3 py-2 text-sm font-medium leading-4 shadow-sm hover:bg-black-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={() => removeTopic(topics, topic.id)}><IoCheckmarkDoneSharp className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />Added</a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
