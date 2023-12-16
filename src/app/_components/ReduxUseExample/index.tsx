"use client"

import React, { useState } from "react"
import { counterActions, selectCount } from "@/app/_store/slices/counter"
import { useAppDispatch, useAppSelector } from "@/app/_store/hooks"

// NOTE: 프로젝트시 DELETE 대상
export default function ReduxUseExample() {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  const { increment, decrement, incrementByAmount } = counterActions
  const [incrementAmount, setIncrementAmount] = useState("2")

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <button
          aria-label="Decrement value"
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          byAmount
        </button>
      </div>

      <input
        aria-label="Set increment amount"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
    </div>
  )
}
