
import Header from './components/Header'
import SideNavigation from './components/SideNavigation'
import Notes from './components/Notes'

const App = () => {
  return (
    <div className='container'>
      <Header title='My Note Pad'/>
      <Notes />
      <SideNavigation />
    </div>
  )
}

export default App
