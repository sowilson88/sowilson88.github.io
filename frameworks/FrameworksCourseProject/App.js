import React, {useContext, useReducer} from 'react';
import NotesContext from './Context'
import NotesReducer from './Reducer'
import Nav from './components/Nav'
import AddNote from './components/AddNote'
import NoteList from './components/NoteList'
import EditNote from './components/EditNote'

const App = () => {
  const initialState = useContext(NotesContext);
  const [state, dispatch] = useReducer(NotesReducer, initialState)
  return (
<div className='container'>
  <NotesContext.Provider value={{ state, dispatch }}>
    <Nav />
    {state.currentNote === null ? (
      <div>    
        <AddNote />
        <NoteList />
      </div>
    ) : <EditNote />}
    
  </NotesContext.Provider>
</div>
  )
  
}

export default App;
