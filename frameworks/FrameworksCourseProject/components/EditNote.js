import React, { useState, useContext, useRef, useEffect} from 'react';
import NotesContext from '../Context'


const EditNote = () => {
    const { state, dispatch } = useContext(NotesContext);
    const [value, setValue] = useState(state.currentNote.text);

    let ref = useRef();

    useEffect(() => {
        ref.current.focus();
    }, [])

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (value.trim() === '') {
            alert("Oops, I can't add a blank note!")
        } else {
            dispatch({ type: 'UPDATE_NOTE', payload: value })
            setValue('')
        }
    }
    return (
        <div className='noteForm'>
            <form onSubmit = {handleSubmit} action="">
                <textarea 
                className='textArea'
                ref={ref} 
                onChange={handleChange} 
                value={value}
                name="" id="" cols="30" rows="10"/>
                    <div>
                        <button className='noteFormBtn'>Update Note</button>
                    </div>
            </form>
        </div>
    )
}

export default EditNote
