
const Notes = () => {
    const notes = [
        {
            title: 'Grocery List',
            text: 'Apples, bread, milk',
            noteClass: 'noteText',
        },
        {
            title: 'Vet Appointment',
            text: 'at 3:50pm on 2-5-2021',
            noteClass: 'noteText',
        },
        {
            title: 'Set up tattoo appointment!',
            text: '',
            noteClass: 'noteText',
        },
    ]
    return (
        <>
            <>
            <div>
                <ul className='notes'>
                {notes.map((input, index) => {
                    return(
                        <li key={index} className={input.noteClass}>
                            <h3>
                                {input.title}
                            </h3>
                            <p>
                                {input.text}
                            </p>
                        </li>   
                    )})}
                </ul>
            </div>
        </>
        </>
    )
}

export default Notes
