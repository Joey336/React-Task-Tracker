import Button from "./Button"

const Header = ({title}) => {

    const onClick = (e) =>{
        console.log(e)
    }

    return (
        <header className='header'>
            <h1>Task Tracker {title}</h1>
            <Button color='blue' text='Add' onClick = {onClick}/>
        </header>
    )
}

//if prop is not passed in sets prop to these 
Header.defaultProps = {
    title: 'Task Tracker',
}

export default Header
