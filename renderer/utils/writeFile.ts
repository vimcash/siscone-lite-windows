// file system module to perform file operations
import { writeFile as save } from 'fs'

export const writeFile = (inSave) => {
  // stringify JSON Object
  var jsonContent = JSON.stringify(inSave)
  console.log(jsonContent)
   
  save("C:\\app\\Siscone\\return.json", jsonContent, 'utf8', function (err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    } 
  })
}
