
import Header from './components/Header'
import SideNavigation from './components/SideNavigation'
import Notes from './components/Notes'
import Footer from './components/Footer'

const App = () => {
  return (
    <container fluid>
      <div>
        <Header title='My Note Pad'/>
        <Notes />
        <SideNavigation />
        <Footer />
      </div>
    </container>
  )
}

export default App
