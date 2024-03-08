import { useEffect, useState } from "react"
import { getContactById } from "../../../http/request"
import Initials from "../../../components/Initials"

export default function CommentItem({comment, index}){

    const [contact, setContact] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchContact = async () => {
            const data = await getContactById(comment.contactId)
            setContact(data)
            setLoading(false)
        }
        fetchContact()
    },[])


    return (
        <div key={index} className="comment-card">
            <div className="comment-item">
            {loading ? <div>Loading ... </div> : 
            <Initials firstname={contact.firstName} lastname={contact.lastName} favouriteColour={contact.favouriteColour}/>}
            <p>{comment.content}</p>
            </div>
        </div>
    )
}