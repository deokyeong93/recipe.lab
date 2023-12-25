import React, { PropsWithChildren } from "react"
import styles from "./button.module.scss"
import Link, { LinkProps } from "next/link"
import { classMerge } from "@/service/utils"

type ButtonWrapperProps = PropsWithChildren<{
  onClick?: () => void
  className?: string
  linkProps?: LinkProps
}>

export default function ButtonWrapper({
  children,
  className,
  linkProps,
}: ButtonWrapperProps) {
  const _className = classMerge([styles.wrapper, className])

  if (linkProps) {
    return (
      <Link {...linkProps} className={_className}>
        {children}
      </Link>
    )
  }

  return <button className={_className}>{children}</button>
}
