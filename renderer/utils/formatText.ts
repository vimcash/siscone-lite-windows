export const formatText = (inText:string) => {
  const stringArr = inText.split(' ')
  let ret = ""
  stringArr.map((string:string) => ret += ` ${string.substring(0, 1).toUpperCase()}${string.substring(1).toLowerCase()}`)
  return ret.trim()
}