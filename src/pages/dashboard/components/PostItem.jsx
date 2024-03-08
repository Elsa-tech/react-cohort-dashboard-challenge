import { useContext, useEffect, useState } from "react"
import { DataContext } from "../../../App"
import { commentPost, getCommentsOnPost, getContactById } from "../../../http/request"
import InputForm from "./InputForm"
import PostComments from "./PostComments"
import Initials from "../../../components/Initials"

export default function PostItem({post, index}){

    const { user } = useContext(DataContext)
    const [contact, setContact] = useState({})
    const [loading, setLoading] = useState(true)
    const [comments, setComments] = useState([])

    useEffect(() => {
        const fetchContact = async () => {
            setLoading(true)
            try {
                const data = await getContactById(post.contactId)
                setContact(data)
            } catch(error){
                console.error('error fetching contact: ', error)
            } finally {
                setLoading(false)
            } 
        }
        fetchContact()
    },[])

    useEffect(() => {
        const fetchComments = async () => {
            const data = await getCommentsOnPost(post.id)
            setComments(data)
        }
        fetchComments()
    },[])

    const handleSubmit = async (content) =>{
        const body = {
            postId: post.id,
            content: content,
            contactId: user.id
        }
        commentPost(post.id, body)
    }

    return (<>{loading ? (<div>Loading ...</div>) :
        (
    <li key={index}>
        <div>
            <div>
                <Initials firstname={user.firstName} lastname={user.lastName} favouriteColour={user.favouriteColour} />
                <div>
                    <h4>{contact.firstName} {contact.lastName}</h4>
                    <p>{post.title}</p>
                </div>
            </div>
        </div>
        <div>
            <p>{post.content}</p>
            <hr/>
            <PostComments comments={comments} />
        </div>
        <div>
            <InputForm user={user} handleSubmit={handleSubmit} placeholder="Add a comment" name="comment" />
        </div>
    </li>)
    }</>)
}