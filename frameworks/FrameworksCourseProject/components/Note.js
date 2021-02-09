import React, { useContext } from 'react'
import NotesContext from '../Context'

const Note = ({ note }) => {
    const { dispatch } = useContext(NotesContext);

    return (
        <div className='note'>
            <h3>{note.text}</h3>
            <div className='btnContainer'>
                <button onClick={() => 
                    dispatch({ type: 'SET_CURRENT_NOTE', payload: note})} 
                    className="edit">Edit</button>
                <button onClick={() =>
                    dispatch({ type: 'DELETE_NOTE', payload: note.id })}
                    className="delete">Delete</button>
            </div>
        </div>
    )
}

export default Note
