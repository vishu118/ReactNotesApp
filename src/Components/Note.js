




const Note = ({id,text,date,handleDeleteNote}) => {
  return (
    <div className='note' key={id}>
        <span>{text}</span>
        <div className='note-footer'>
                <small>{date}</small>
               <i className="fa-solid fa-trash-can delete-icon" onClick = { ()=>handleDeleteNote(id)}></i>
        </div>

    </div>
  )
}

export default Note