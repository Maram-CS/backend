import fs from "fs"
import path from "path"
import {DeleteNote,cleanDatabase} from "./exportFile.js";

const dir = import.meta.dirname;
console.log(dir);
const pathNote = path.join(dir,"backend/note.txt");
const LoadNote = () => {
    try{
        const Note = [fs.readFileSync(pathNote,"utf-8")][0].trim().split(",");
       
        const MapNote = new Map();
        Note.forEach((element,index) => {
            MapNote.set(index,element);
        });
        cleanDatabase(MapNote);
        console.log(MapNote);
        return MapNote;
    }catch(err)
    {
        console.log(`you are wrong in :${err}`);
    }


}


DeleteNote(1);

export {LoadNote};




