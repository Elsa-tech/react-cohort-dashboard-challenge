import CommentItem from "./CommentItem"
export default function PostComments({comments}){

    const hasComments = comments.length > 0
    
    return (
        <>{hasComments ? 
        <ul>
            {comments.map((comment, index) => (
                <CommentItem comment={comment} index={index} />
            ))}
        </ul> 
        : 
        <p>no comments yet, be the first ...</p>
        }</>
    )
}