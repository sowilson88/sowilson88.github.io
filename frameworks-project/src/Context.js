import React from 'react'

const NotesContext = React.createContext({
    currentNote: null,
    notes: [
        {id: 1, text: 'Call vet'},
        {id: 2, text: 'Do Homework'},
        {id: 3, text: 'Set up tattoo appointment!'},
    ]
});

export default NotesContext
