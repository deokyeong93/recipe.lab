import React, { PropsWithChildren } from "react"
import styles from "./button.module.scss"
import Link, { LinkProps } from "next/link"
import { classMerge } from "@/app/_helper"

type ButtonWrapperProps = PropsWithChildren<{
  onClick?: () => void
  classNames?: string | string[]
  linkProps?: LinkProps
}>

export default function ButtonWrapper({
  children,
  classNames,
  linkProps,
}: ButtonWrapperProps) {
  if (linkProps) {
    return (
      <Link
        {...linkProps}
        className={`${styles.wrapper} ${classMerge(classNames)}`}
      >
        {children}
      </Link>
    )
  }

  return (
    <button className={`${styles.wrapper} ${classMerge(classNames)}`}>
      {children}
    </button>
  )
}
