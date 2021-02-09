import React, { useContext } from 'react';
import NotesContext from '../Context';
import Note from './Note'

const NoteList = () => {
    const { state } = useContext(NotesContext);
    return (
        <div className='notesContainer'> 
            {state.notes.map((note, i) => {
                return <Note note={note} key={i}/>;
            })}
        </div>
    )
}

export default NoteList
