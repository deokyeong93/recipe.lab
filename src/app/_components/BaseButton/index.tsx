import React, { ReactNode } from "react"
import Button from "../core/Button"
import styles from "./baseButton.module.scss"
import { LinkProps } from "next/link"
import { classMerge } from "@/service/utils"

type BaseButtonProps = {
  onClick?: () => void
  text: string
  color?: "transparent" | string
  linkProps?: LinkProps
  wrapperClassName?: string
  textClassName?: string
  textBeforeChildren?: ReactNode
}

export default function BaseButton({
  onClick,
  text,
  color,
  linkProps,
  wrapperClassName,
  textClassName,
  textBeforeChildren,
}: BaseButtonProps) {
  const buttonColorClassName =
    color === "transparent"
      ? styles.base_button_transparent
      : styles.base_button_brown

  return (
    <Button.Wrapper
      onClick={onClick}
      className={classMerge([buttonColorClassName, wrapperClassName])}
      linkProps={linkProps}
    >
      <Button.Slot>{textBeforeChildren}</Button.Slot>
      <Button.Text text={text} className={textClassName} />
    </Button.Wrapper>
  )
}
