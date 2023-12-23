export const classMerge = (classNames?: string[] | string) => {
  if (!classNames) {
    return ""
  }

  if (typeof classNames === "string") {
    return classNames
  }

  return classNames.join(" ")
}
