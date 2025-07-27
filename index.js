import fs from "fs"
import path from "path"
import {DeleteNote,cleanDatabase} from "./exportFile.js";

const dir = import.meta.dirname;

const pathNote = path.join(dir,"backend/note.txt");
const addNote =(note) => {
    try{
        fs.appendFileSync(pathNote,`${note}`,"utf-8");

            return MapNote;
    }catch(err){
        console.log(err);
    }

}
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


//addNote("0:maram berrahal , 1:nahla berrahal , 2:loudjain berrahal , 3:sofia berrahal ,");
//DeleteNote(1);
export {LoadNote,pathNote};




