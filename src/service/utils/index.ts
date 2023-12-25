type NestedArray<T> = T | NestedArray<T>[]

export const classMerge = (classNames?: NestedArray<string | undefined>) => {
  if (!classNames) {
    return ""
  }

  if (typeof classNames === "string") {
    return classNames
  }

  return classNames
    .flat(5)
    .filter((className) => !!className)
    .join(" ")
}

export const mergeParmasWithUrl = (
  url: string,
  params: {
    [key: string]: string | number
  }
) => {
  const paramsEntries = Object.entries(params)

  const joinedParmas = paramsEntries
    .map(([key, value]) => `${key}=${value}`)
    .join("")

  return `${url}?${joinedParmas}`
}
