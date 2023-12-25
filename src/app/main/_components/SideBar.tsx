"use client"

import BaseButton from "@/app/_components/BaseButton"
import React from "react"
import styles from "./sideBar.module.scss"
import LogoHeader from "@/app/_components/LogoHeader"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { classMerge } from "@/service/utils"

export default function SideBar() {
  const pathname = usePathname()
  const router = useRouter()

  const listItemInfos = [
    {
      text: "레시피 둘러보기",
      linkProps: { href: "explore" },
      textBeforeChildren: (
        <Image
          src="/images/icons/search.svg"
          width={42}
          height={42}
          alt="search_icon"
        />
      ),
    },
    {
      text: "꿀맛 표시한 레시피",
      linkProps: { href: "sweet" },
      textBeforeChildren: (
        <Image
          src="/images/icons/honey.svg"
          width={42}
          height={42}
          alt="honey_icon"
        />
      ),
    },
    {
      text: "내가 등록한 레시피",
      linkProps: { href: "my-recipe" },
      textBeforeChildren: (
        <Image
          src="/images/icons/recipe.svg"
          width={42}
          height={42}
          alt="recipe_icon"
        />
      ),
    },
    {
      text: "프로필",
      linkProps: { href: "profile" },
      textBeforeChildren: (
        <Image
          src="/images/icons/chef.svg"
          width={42}
          height={42}
          alt="chef_icon"
        />
      ),
    },
  ].map((info) => {
    const wrapperClassName = [styles.button_wrapper]
    if (`/main/${info.linkProps.href}` === pathname) {
      wrapperClassName.push(styles.button_wrapper_active)
    }

    return {
      ...info,
      color: "transparent",
      wrapperClassName: classMerge(wrapperClassName),
      textClassName: styles.button_text,
    }
  })

  return (
    <nav className={styles.nav_container}>
      <LogoHeader
        size="small"
        className={styles.logo_header_custom}
        onClick={() => {
          router.push("/main/explore")
        }}
      />
      <ul>
        {listItemInfos.map(
          (
            {
              text,
              linkProps,
              color,
              wrapperClassName,
              textClassName,
              textBeforeChildren,
            },
            index
          ) => (
            <li key={index}>
              <BaseButton
                text={text}
                linkProps={linkProps}
                color={color}
                wrapperClassName={wrapperClassName}
                textClassName={textClassName}
                textBeforeChildren={textBeforeChildren}
              />
            </li>
          )
        )}
      </ul>
    </nav>
  )
}
