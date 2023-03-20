import { connect } from "mongoose"

export const initApp = () => {
  connect(`mongodb://localhost:27017/Siscone?authSource=admin`)
}