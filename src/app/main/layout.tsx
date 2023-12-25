import React, { PropsWithChildren } from "react"
import styles from "./mainLayout.module.scss"
import SideBar from "./_components/SideBar"

type MainLayoutProps = PropsWithChildren

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className={styles.layout_container}>
      <SideBar />
      <article className={styles.layout_content_article}>{children}</article>
    </main>
  )
}
