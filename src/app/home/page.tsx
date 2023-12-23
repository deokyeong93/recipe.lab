import { SERVICE_NAME } from "@/constant"
import styles from "./home.module.scss"
import Image from "next/image"
import SearchTextField from "../_components/SearchTextField"
import BaseButton from "../_components/BaseButton"

export default function HomePage() {
  return (
    <main className={styles.container}>
      <section className={styles.button_section}>
        <BaseButton
          text="로그인"
          color="transparent"
          linkProps={{ href: "/auth/login" }}
        />
        <BaseButton text="회원가입" linkProps={{ href: "/auth/signup" }} />
      </section>

      <section className={styles.main_section}>
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
      </section>
    </main>
  )
}
