import React from "react"
import styles from "./button.module.scss"
import { classMerge } from "@/service/utils"

type ButtonTextProps = {
  text: string
  className?: string
}

export default function ButtonText({ text, className }: ButtonTextProps) {
  return (
    <span className={classMerge([styles.button_text, className])}>{text}</span>
  )
}
