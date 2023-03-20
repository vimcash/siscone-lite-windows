//2021-11-05T23:10:30Z
export const isDate = 
  (dateString) => 
    `${dateString}`.indexOf('-') == 4 &&
    `${dateString}`.indexOf('T') == 10 &&
    (`${dateString}`.indexOf('Z') == 23 || `${dateString}`.indexOf('Z') == 19)
