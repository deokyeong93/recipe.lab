import React, { FormEventHandler, PropsWithChildren } from "react"
import styles from "./textField.module.scss"

type TextFieldRootProps = PropsWithChildren<{
  className?: string
}>

export default function TextFieldWrapper({
  children,
  className,
}: TextFieldRootProps) {
  return (
    <div className={[styles.text_field_wrapper, className].join(" ")}>
      {children}
    </div>
  )
}
