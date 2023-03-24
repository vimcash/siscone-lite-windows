import { getColumnByIndex } from "./getColumnByIndex"

const formatForComboBox = (data:any[], displayNamePos:number = 1, idPos:number = 0) => data.map(category => ({id: getColumnByIndex(category, 0), displayName: getColumnByIndex(category, 1)}))