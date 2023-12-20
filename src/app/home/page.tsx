import { SERVICE_NAME } from "@/constant"
import styles from "./home.module.scss"
import Image from "next/image"
import SearchTextField from "../_components/SearchTextField"

export default function HomePage() {
  return (
    <main className={styles.container}>
      <header className={styles.header_wrapper}>
        <Image
          className={styles.header_logo}
          src={"/images/logo.png"}
          alt="logo"
          width={380}
          height={360}
        />
        <h1>{SERVICE_NAME}</h1>
      </header>
      <section className={styles.search_text_field_section}>
        <SearchTextField className={styles.search_text_field_wrapper} />
      </section>
    </main>
  )
}
