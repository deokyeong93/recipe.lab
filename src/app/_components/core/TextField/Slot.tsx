import React, { PropsWithChildren } from "react"
import styles from "./textField.module.scss"

type TextFieldSlotProps = PropsWithChildren

export default function TextFieldSlot({ children }: TextFieldSlotProps) {
  return <div className={styles.text_field_slot}>{children}</div>
}
