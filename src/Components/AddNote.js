import React, { useState } from 'react'

const AddNote = ({handleAddNote}) => {
    const [ noteText,setnoteText] = useState('')

    const charLimit = 200;

    const handleChange = (e)=>{
        if(charLimit - e.target.value.length >= 0 ){

            setnoteText(e.target.value)
        } 
    }


    const handleSaveClick = ()=>{
        if(noteText.trim().length>0){

            handleAddNote(noteText)
            setnoteText('')
        }
    }


  return (
    <div className='note new'>
          <textarea 
                  rows="8"
                  cols='10'
                  placeholder='Type Here To Add Note....'
                  value ={noteText}
                  onChange={handleChange}
                  ></textarea>
                  <div className="note-footer">
                    <small>{charLimit-noteText.length} Remaining</small>
                    <button className='save' onClick={handleSaveClick}>Save</button>
                  </div>
    </div>
  )
}

export default AddNote