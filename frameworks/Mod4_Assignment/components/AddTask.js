import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert ('Please add a task')
            return
        }

        onAdd({ text })

        setText('')
    }
    
    return (
        <form className ='addForm' onSubmit={onSubmit}>
            <div className='formControl'>
                <input
                    type='text'
                    placeholder='Add Task'
                    value={text}
                    onChange={(e) => setText(e.target.value)}/>
            </div> 

            <input type='submit' value='Save Task'
            className='button center' />
        </form>
    )
}

export default AddTask
