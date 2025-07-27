import {LoadNote,pathNote} from "./index.js"
import fs from "fs"
const cleanDatabase = (mapNote) =>{
   mapNote.forEach((element, index) => {
       if (element === ""){
           mapNote.delete(index);
       } 
   })
}


const DeleteNote = (index) => {
    const Note = LoadNote();
    Note.delete(index-1);
    if(DeleteNote){
        cleanDatabase(Note);
        fs.writeFileSync(pathNote,"","utf-8");
        Note.forEach(element =>{ 
            fs.appendFileSync(pathNote,`${element}`,"utf-8");
    }) 
    }

    return DeleteNote;
}
export {DeleteNote,cleanDatabase}