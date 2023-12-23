import React, { PropsWithChildren } from "react"

type MainLayoutProps = PropsWithChildren

export default function MainLayout({ children }: MainLayoutProps) {
  return <div>{children}</div>
}
