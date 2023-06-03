import { getColumnByIndex } from "./getColumnByIndex"

export const formatForComboBox = (data:any[], displayNamePos:number = 1, idPos:number = 0) => data.map(item => ({id: getColumnByIndex(item, idPos), displayName: getColumnByIndex(item, displayNamePos)}))