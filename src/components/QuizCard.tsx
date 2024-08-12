"use client"

import { useState, useEffect } from "react"


type Props = {
    numItems: number;
    count: number;
    word: string;
}

const QuizCard = (props: Props) => {
  const { numItems, count, word } = props

  return (
    <>
      <div className="relative min-h-60 w-full my-5 border shadow-md rounded-md">
        <p className="desc text-right mt-1 mr-2">{count + 1} of {numItems}</p>
        <h1 className="text-4xl center">{word}</h1>
      </div>
    </>
  )
}

export default QuizCard