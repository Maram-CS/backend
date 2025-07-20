import fs from "fs"
import os from "os"
import path from "path"

const dir = import.meta.dirname;
console.log(dir);
const pathNote = path.join(dir,"backend/note.txt");
const contentNote = fs.readFileSync(pathNote,"utf-8");
console.log(pathNote);


const NewNote = contentNote.split("\n");
function indexOfLastLine() {
    return NewNote.length-1;
}

function addNote(Note){
    NewNote.push(Note);
    

    try {
        fs.appendFileSync(pathNote,`${NewNote[NewNote.length-1]}\n`,"utf-8");

    }catch(err){
        console.log(err);
    }
}


addNote("socode");

console.log(NewNote.sort());

