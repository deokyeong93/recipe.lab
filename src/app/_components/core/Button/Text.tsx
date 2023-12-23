import React from "react"
import styles from "./button.module.scss"

type ButtonTextProps = {
  text: string
}

export default function ButtonText({ text }: ButtonTextProps) {
  return <span className={styles.button_text}>{text}</span>
}
