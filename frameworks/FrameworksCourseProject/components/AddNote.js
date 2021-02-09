import React, { useState, useContext, useRef, useEffect} from 'react';
import NotesContext from '../Context'

const AddNote = () => {
    const { state, dispatch } = useContext(NotesContext)
    const [value, setValue] = useState('')

    let ref = useRef();

    useEffect(() => {
        ref.current.focus();
    }, [])

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (value.trim() === '') {
            alert("Oops, I can't add a blank note!")
        } else {
            dispatch({ type: 'ADD_NOTE', payload: value })
            setValue('');
        }
    }
    return (
        <div className='noteForm'>
            <form onSubmit={ handleSubmit} action="">
                <input type="text" ref={ref} 
                onChange={ handleChange } value={ value }/>
                <button className='noteFormBtn'>Save Note</button>
            </form>
        </div>
    )
}

export default AddNote
