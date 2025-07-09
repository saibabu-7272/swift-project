import './index.css'

const UserDetailsField = (props) => {
    const {title , content} = props
    return(
        <li className='field-box'>
            <p className='title no-extra-space'>{title}</p>
            <p className='content no-extra-space'>{content}</p>
        </li>
    )
}

export default UserDetailsField