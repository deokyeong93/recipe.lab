import { SERVICE_NAME } from "@/constant"
import Image from "next/image"
import React from "react"
import styles from "./logoHeader.module.scss"
import { classMerge } from "@/service/utils"

type LogoHeaderProps = {
  size: "large" | "small"
  className: string
  onClick?: () => void
}

export default function LogoHeader({
  size,
  className,
  onClick,
}: LogoHeaderProps) {
  const logoDefaultSize = {
    width: size === "small" ? 54 : 380,
    height: size === "small" ? 48 : 360,
  }

  return (
    <div
      className={classMerge([styles[size], className])}
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      <header className={styles.header_wrapper}>
        <Image
          className={styles.header_logo}
          src={"/images/logo.png"}
          alt="logo"
          width={logoDefaultSize.width}
          height={logoDefaultSize.height}
        />
        <h1>{SERVICE_NAME}</h1>
      </header>
    </div>
  )
}
