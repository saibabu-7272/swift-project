import './index.css'

const CommentItem = (props) => {
    const {postId, name, email, body} = props.comment
    let commentText = body.slice(0,30)
    return(
        <li className='comment-item'>
            <p className='id-col'>{postId}</p>
            <p className='col'>{name.slice(0,20)}...</p>
            <p className='col'>{email}</p>
            <p className='col'>{commentText}...</p>
        </li>
    )
}

export default CommentItem