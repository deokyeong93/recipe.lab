export const classMerge = (classNames?: string[] | string) => {
  if (!classNames) {
    return ""
  }

  if (typeof classNames === "string") {
    return classNames
  }

  return classNames.join(" ")
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
