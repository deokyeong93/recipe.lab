import React from "react"
import Button from "../core/Button"
import styles from "./baseButton.module.scss"
import { LinkProps } from "next/link"

type BaseButtonProps = {
  onClick?: () => void
  text: string
  color?: "transparent"
  linkProps?: LinkProps
}

export default function BaseButton({
  onClick,
  text,
  color,
  linkProps,
}: BaseButtonProps) {
  const buttonColorClassName =
    color === "transparent"
      ? styles.base_button_transparent
      : styles.base_button_brown

  return (
    <Button.Wrapper
      onClick={onClick}
      classNames={buttonColorClassName}
      linkProps={linkProps}
    >
      <Button.Text text={text} />
    </Button.Wrapper>
  )
}
