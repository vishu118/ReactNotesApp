




const Note = ({id,text,date}) => {
  return (
    <div className='note' key={id}>
        <span>{text}</span>
        <div className='note-footer'>
                <small>{date}</small>
               <i className="fa-solid fa-trash-can"></i>
        </div>

    </div>
  )
}

export default Note