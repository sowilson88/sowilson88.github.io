import Nav from 'react-bootstrap/Nav'

const SideNavigation = () => {
    return (
        <div>
           <Nav className='flex-column mt-n3 mb-n4 navbar' defaultActiveKey='/home'>
               <Nav.Link href='/home'><h5 className='navText'>Home</h5></Nav.Link>
               <Nav.Link href='link-1'><h5 className='navText'>New</h5></Nav.Link>
               <Nav.Link href='link-2'><h5 className='navText'>Edit</h5></Nav.Link>
               <Nav.Link href='link-3'><h5 className='navText'>Reminders</h5></Nav.Link>
               <Nav.Link href='link-4'><h5 className='navText'>Trash</h5></Nav.Link>
           </Nav>
        </div>
    )
}

export default SideNavigation

