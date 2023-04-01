import { useState } from "react";
import NotesList from "./Components/NotesList";
import {nanoid} from 'nanoid';
import Search from "./Components/Search";



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



  const [SearchNote,setSearchNote] = useState("")

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

  const deleteNote = (id)=>{
    const newNotes = notes.filter((note)=> note.id !== id)
    setnotes(newNotes)
    
   }

  return (
    <div className="container">
     <Search handleSearchNote = {setSearchNote}/>
    <NotesList notes={notes.filter((ele)=>
               ele.text.toLowerCase().includes(SearchNote))} 
               handleAddNote = {addNote} 
               handleDeleteNote = {deleteNote}/>
    </div>
  );
}

export default App;
