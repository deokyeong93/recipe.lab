"use client"

import reduxStore from "@/app/_store"
import { PropsWithChildren } from "react"
import { Provider } from "react-redux"

type ReduxProviderProps = PropsWithChildren

export default function ReduxProvider({ children }: ReduxProviderProps) {
  return <Provider store={reduxStore}>{children}</Provider>
}
