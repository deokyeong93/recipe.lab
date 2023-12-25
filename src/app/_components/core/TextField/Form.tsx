import React, { FormEvent, PropsWithChildren } from "react"
import styles from "./textField.module.scss"

type TextFieldForm = PropsWithChildren<{
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}>

export default function TextFieldForm({ children, onSubmit }: TextFieldForm) {
  return (
    <form className={styles.text_field_form} onSubmit={onSubmit}>
      {children}
    </form>
  )
}
