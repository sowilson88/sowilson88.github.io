const AddTask = () => {
    return (
        <form className ='addForm'>
            <div className='formControl'>
                <input
                    type='text'
                    placeholder='Add Task'/>
            </div> 

            <input type='submit' value='Save Task'
            className='button center' />
        </form>
    )
}

export default AddTask
