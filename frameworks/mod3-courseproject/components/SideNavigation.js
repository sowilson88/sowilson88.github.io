
const SideNavigation = () => {
    const sideBar = [
        {
            title: 'Home',
            cName: 'navText',
        },
        {
            title: 'New',
            cName: 'navText',
        },
        {
            title: 'Edit',
            cName: 'navText',
        },
        {
            title: 'Reminders',
            cName: 'navText',
        },
        {
            title: 'Trash',
            cName: 'navText',
        }
    ]
    return (
        <>
            <div>
                <ul className='navbar'>
                {sideBar.map((nav, index) => {
                    return(
                        <li key={index} className={nav.cName}>
                            <h3>
                                {nav.title}
                            </h3>
                        </li>   
                    )})}
                </ul>
            </div>
        </>
    )
}

export default SideNavigation
