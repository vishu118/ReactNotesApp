import { useState } from "react";
import NotesList from "./Components/NotesList";
import {nanoid} from 'nanoid';



const App = ()=> {
  const [notes,setnotes] = useState([
    { 
      id : nanoid(),
      text : "This is my first Note",
      date : '01/04/2023'
    },

    { 
      id : nanoid(),
      text : "This is my first Note",
      date : '01/04/2023'
    },

    { 
      id : nanoid(),
      text : "This is my 2 Note",
      date : '01/04/2023'
    },

    { 
      id : nanoid(),
      text : "This is my 3 Note",
      date : '01/04/2023'
    },

    { 
      id : nanoid(),
      text : "This is my 4 Note",
      date : '01/04/2023'
    },

    { 
      id : nanoid(),
      text : "This is my 5 Note",
      date : '01/04/2023'
    }
  ])


  const addNote = (text) =>{
   const date = new Date()
   const newNote = {
    id : nanoid(),
    text :text,
    date :date.toLocaleDateString()
   }

   const newNotes = [...notes ,newNote] 
   setnotes(newNotes)
  
  }

  return (
    <div className="container">
    <NotesList notes={notes} handleAddNote = {addNote}/>
    </div>
  );
}

export default App;
