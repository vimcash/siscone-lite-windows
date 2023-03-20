import { readFileSync } from "fs"

export const readConfig = async () => {
  const file = readFileSync("C:\\app\\Siscone\\config.json")
  return JSON.parse(file.toString('utf-8'))
}