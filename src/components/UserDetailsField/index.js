import './index.css'

const UserDetailsField = (props) => {
    const {title , content} = props
    return(
        <li className='field-box'>
            <p>{title}</p>
            <p className='content'>{content}</p>
        </li>
    )
}

export default UserDetailsField