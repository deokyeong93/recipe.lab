import { useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, useState } from "react"

const useSearchTextField = () => {
  const router = useRouter()
  const [searchText, setSearchText] = useState("")

  const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }

  const search = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(router, "이동합시다")
    console.log("검색어", searchText)
    setSearchText("")
  }

  return {
    searchText,
    onTextChange,
    search,
  }
}

export default useSearchTextField
