/* eslint-disable jsx-a11y/anchor-is-valid */
import data from '../services/data.json';
import { keys } from 'lodash';
import "./Topics.css"

const parseData = (data) => {
  const topicKeys = keys(data);
  let results:any = [];
  for (let index = 0; index < topicKeys.length; index++) {
    const key = topicKeys[index];
    results.push({
      'id': key,
      'title': key,
      'description': data[key].description,
    })
  }
  return results;
};

const topics = parseData(data);

export default function Topics() {
  return (
    <div className="relative px-6 pt-2 pb-20 lg:px-8 lg:pt-8 lg:pb-28">
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          {/* <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"></h2> */}
          <p className="mx-auto mt-3 max-w-2xl text-xl text-white sm:mt-4">
            Let’s start  with what you’re interested in
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {topics.map((topic:any) => (
            <div key={topic.title} className="flex flex-col overflow-hidden shadow-lg topic-item pb-4 border-r-4">
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="flex-1">
                  <div className="mt-2 block pb-8">
                    <p className="text-xl font-semibold text-white">{topic.title}</p>
                    <p className="mt-3 text-xs text-white pb-6">{topic.description}</p>
                  </div>
                  <div className="mt-2 block absolute bottom-8">
                    <a className="btn text-white add-btn" href="#">Add</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
