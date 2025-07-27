import {LoadNote} from "./index.js"
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
    console.log(Note);
}
export {DeleteNote,cleanDatabase}