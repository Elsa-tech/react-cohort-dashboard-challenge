import { useContext, useEffect, useState } from "react"
import { DataContext } from "../../../App"
import { commentPost, getCommentsOnPost, getContactById } from "../../../http/request"
import InputForm from "./InputForm"
import PostComments from "./PostComments"
import Initials from "../../../components/Initials"
import { Link } from "react-router-dom"
import LoadingAnimation from "../../../components/LoadingAnimation"

export default function PostItem({post, index}){

    const { user, contacts, addComment, fetchComments, posts } = useContext(DataContext)
    const [comments, setComments] = useState([])
    const cc = contacts.find(c => c.id == post.contactId)
    const [loading, setLoading] = useState(true)

    const handleSubmit = async (content) =>{
        const body = {
            postId: post.id,
            content: content,
            contactId: user.id
        }
        try {
            await addComment(post.id, body)
            await fetchComments(post.id, setComments)
        } catch (error) {
            console.error('error posting or fetching comments: ', error)
        }
    }

    useEffect(() => {
        fetchComments(post.id, setComments)
        setLoading(false)
    },[posts])

    return (
    <li key={index} className="post-item-card">
        <div className="post-item-left-section">
            {cc != undefined ? (<>
            <Initials firstname={cc.firstName} lastname={cc.lastName} favouriteColour={cc.favouriteColour} />
            <div>
                <h4>{cc.firstName} {cc.lastName}</h4>
                <Link to={`/${post.id}`}>
                {post.title}
                </Link>
            </div>
            </>) : <LoadingAnimation /> }
        </div>
        <div className="post-item-right-section">
            <p>{post.content}</p>
            <hr/>{loading ? <LoadingAnimation /> : <PostComments comments={comments.reverse()} />}
        </div>
        <div>
            <InputForm user={user} handleSubmit={handleSubmit} placeholder="Add a comment" name="comment" />
        </div>
    </li>)
}