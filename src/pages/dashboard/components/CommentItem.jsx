import { useContext } from "react"
import Initials from "../../../components/Initials"
import { DataContext } from "../../../App"
import { Link } from "react-router-dom"

export default function CommentItem({comment, index}){

    const {contacts} = useContext(DataContext)

    const contact = contacts.find(c => c.id == comment.contactId)


    return (
        <>
        <div key={index} className="comment-card">
            <div className="comment-item">
            <Link to={`profile/${contact.id}`} style={{textDecoration: 'none'}}>
            <Initials firstname={contact.firstName} lastname={contact.lastName} favouriteColour={contact.favouriteColour}/>
            </Link>
                <div className="comment-text">
                    <h4>{contact.firstName} {contact.lastName}</h4>
                    <p>{comment.content}</p>
                </div>
            </div>
        </div>
    </>
    )
}