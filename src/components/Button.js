import PropTypes from 'prop-types'

//takes color, text, onClick function as props
const Button = ({color, text, onClick}) => {
   
    return (
        <button onClick={onClick} style={{backgroundColor: color}} className='btn'>{text}</button>
    )
}

//props when nothing is called in during component call
Button.defaultProps = {
    color: 'black',
    text: 'default'
}

//Assert data type for props passed into component
//(Makes props strongly typed)
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}


export default Button