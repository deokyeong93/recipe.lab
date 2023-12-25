import React, { PropsWithChildren } from "react"
import styles from "./button.module.scss"

type ButtonSlot = PropsWithChildren

export default function ButtonSlot({ children }: ButtonSlot) {
  return <div className={styles.button_slot}>{children}</div>
}
