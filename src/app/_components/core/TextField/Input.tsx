import React, { ChangeEvent } from "react"
import styles from "./textField.module.scss"

type TextFieldInput = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  value: string
}

export default function TextFieldInput({
  onChange,
  placeholder,
  value,
}: TextFieldInput) {
  return (
    <input
      className={styles.text_field_input}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  )
}
