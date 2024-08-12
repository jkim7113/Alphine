"use client"

import { useState } from "react";
import Link from "next/link";
import QuizCard from "../../../components/QuizCard";
import useIRT from "@/utilities/useIRT";

export default function LevelTest() {
  const [ isQuizInSession, setIsQuizInSession ] = useState(false)
  const [ numItems, setNumItems ] = useState(20)
  const [ count, setCount ] = useState(0)
  const [ item, setItem, theta ] = useIRT(numItems)

  function handleClick(isCorrect: boolean){
    if (count + 1 > numItems){
      return 
    }
    setCount(count + 1)
    setItem({
      ...item,
      u: +isCorrect
    })
  }

  function formatTheta(theta: number){
    theta = Math.min(0.9, Math.max(theta, 0.1))
    return (theta * 100).toFixed(2)
  }

  return (
    <>
      { isQuizInSession ? 
        count + 1 > numItems ? 
          <>
            <h2 className="text-center text-xl">Your estimated level: {formatTheta(theta)}%</h2>
            <Link className="text-blue-600 hover:underline" href="/">Back to home</Link>
          </>
        :
          <>
            <h3 className="text-lg mb-1">Instructions:</h3>
            <ul className="list-disc list-inside">
              <li className="desc mb-1">Answer &quot;Yes&quot; if you know at least one meaning of the word or &quot;No&quot; if you do not.</li>
              <li className="desc mb-1">There is no time limit, but try to answer each question to the best of your ability.</li>
            </ul>
            <QuizCard numItems={numItems} count={count} word={item.word} />
            <div className="flex flex-row justify-between">
              <button className="transition duration-75 text-lg w-[49%] p-2 border shadow-sm rounded-md hover:selected"
                      onClick={() => handleClick(true)}    
              >
                Yes
              </button>
              <button className="transition duration-75 text-lg w-[49%] p-2 border shadow-sm rounded-md hover:selected"
                      onClick={() => handleClick(false)} 
              >No
              </button>
            </div>
          </>
        :
        <>
          <p className="desc">We&apos;ll test you on several words of different levels to measure how good your English vocabulary is. Please select the length of test you prefer:</p>
          <div className="flex flex-row flex-wrap justify-around mt-8 mb-5">
            <button onClick={() => setNumItems(20)} 
                    className={`transition duration-75 w-1/2 max-sm:w-full p-5 border border-transparent rounded-md text-left ${numItems == 20 ? "selected" : ""}`}
            >
              <h3 className="text-lg mb-1">Basic</h3>
              <p className="desc-sm">A simple test consisting of 20 questions. Recommended for those who are just starting out or want a quick assessment.</p>
            </button>
            <button onClick={() => setNumItems(60)} 
                    className={`transition duration-75 w-1/2 max-sm:w-full border border-transparent p-5 rounded-md text-left ${numItems == 60 ? "selected" : ""}`}
            >
              <h3 className="text-lg mb-1">Advanced</h3>
              <p className="desc-sm">A more thorough test consisting of 60 questions. May be time-consuming but generally provides more accurate results.</p>
            </button>
          </div>
          <div className="flex flex-row justify-end px-1">
            <button className="text-blue-600 hover:underline text-lg" onClick={() => setIsQuizInSession(true)}>Next &gt;</button>
          </div>
        </>
      }
    </>
  );
}
