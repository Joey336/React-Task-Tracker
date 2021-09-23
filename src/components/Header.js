const Header = ({title}) => {
    return (
        <header>
            <h1>Task Tracker {title}</h1>
        </header>
    )
}

//if prop is not passed in sets prop to these 
Header.defaultProps = {
    title: 'Task Tracker',
}

export default Header
