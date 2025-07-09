import './index.css'

const CommentItem = (props) => {
    const {postId, name, email, body} = props.comment
    let commentText = body.slice(0,30)
    return(
        <li className='comment-item'>
            <p className='col'>{postId}</p>
            <p className='col'>{name}</p>
            <p className='col'>{email}</p>
            <p className='col'>{commentText}...</p>
        </li>
    )
}

export default CommentItem