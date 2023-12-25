import styles from "./home.module.scss"
import SearchTextField from "../_components/SearchTextField"
import BaseButton from "../_components/BaseButton"
import Image from "next/image"
import { SERVICE_NAME } from "@/constant"
import LogoHeader from "../_components/LogoHeader"

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
        <LogoHeader size="large" />
        <div className={styles.search_text_field_wrapper}>
          <SearchTextField
            className={styles.search_text_field}
            searchUrl="main/explore"
            searchMethod="push"
          />
        </div>
      </section>
    </main>
  )
}
