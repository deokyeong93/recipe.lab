"use client"

import React, { ChangeEvent, HTMLAttributes } from "react"
import TextField from "../core/TextField"
import { INPUT_PLACEHOLDER } from "@/constant"
import Image from "next/image"
import styles from "./searchTextField.module.scss"
import useSearchTextField from "./hooks"

type SearchTextFieldProps = {
  placeholder?: string
  className?: string
}

export default function SearchTextField({
  placeholder = INPUT_PLACEHOLDER.SEARCH,
  className,
}: SearchTextFieldProps) {
  const { searchText, onTextChange, search } = useSearchTextField()

  return (
    <TextField.Wrapper className={className}>
      <TextField.Form onSubmit={search}>
        <TextField.Slot>
          <button className={styles.search_button}>
            <Image
              src={"/images/icons/search.svg"}
              width={24}
              height={24}
              alt="icon"
            />
          </button>
        </TextField.Slot>
        <TextField.Input
          placeholder={placeholder}
          value={searchText}
          onChange={onTextChange}
        />
      </TextField.Form>
    </TextField.Wrapper>
  )
}
