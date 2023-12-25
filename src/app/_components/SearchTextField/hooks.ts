import { mergeParmasWithUrl } from "@/service/utils"
import { useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, useState } from "react"

export type UseSearchTextFieldParams = {
  searchUrl: "main/explore"
  searchMethod: "push" | "replace"
}

const useSearchTextField = ({
  searchUrl,
  searchMethod,
}: UseSearchTextFieldParams) => {
  const router = useRouter()
  const [searchText, setSearchText] = useState("")

  const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }

  const search = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router[searchMethod](mergeParmasWithUrl(searchUrl, { search: searchText }))
    setSearchText("")
  }

  return {
    searchText,
    onTextChange,
    search,
  }
}

export default useSearchTextField
