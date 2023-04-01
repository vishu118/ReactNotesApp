import React from 'react'
import Note from './Note'
import AddNote from './AddNote'


const NotesList = ({notes, handleAddNote}) => {
  return (
    
    <div className="notes-List" >
       {
        notes.map((ele)=>   <Note id = {ele.id}
                                  text = {ele.text}
                                  date = {ele.date}
        />)
       }
     
       <AddNote handleAddNote={handleAddNote}/> 
    </div>
  )
}

export default NotesList