import React, { useState } from 'react'

const AddNote = ({handleAddNote}) => {
    const [ noteText,setnoteText] = useState('')

    const handleChange = (e)=>{
     setnoteText(e.target.value)
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
                    <small>200 Remaining</small>
                    <button className='save' onClick={handleSaveClick}>Save</button>
                  </div>
    </div>
  )
}

export default AddNote