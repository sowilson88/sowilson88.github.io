
const Header = ({ title }) => {
    return (
        <header className='header'>
            <h1> {title} </h1>  
            <input className='searchInput' type='text' value='Search...'/> 

        </header>
    )
}

export default Header
