import { SERVICE_NAME } from "@/constant"
import styles from "./home.module.scss"
import Image from "next/image"

export default function HomePage() {
  return (
    <main className={styles.container}>
      <header className={styles.header_wrapper}>
        <Image src={"/images/logo.png"} alt="logo" width={380} height={360} />
        <h1>{SERVICE_NAME}</h1>
      </header>
      <section className={styles.search_wrapper}></section>
    </main>
  )
}
