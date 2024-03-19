import { useParams } from "react-router-dom"
import { DataContext } from "../../App"
import { useContext, useEffect, useState } from "react"
import LoadingAnimation from "../../components/LoadingAnimation"
import '../../styling/pages/Profile.css'
import Initials from "../../components/Initials"
import EditProfile from "./EditProfile"

function Profile(){

    const { id } = useParams()
    const { user, contacts } = useContext(DataContext)
    const [contact, setContact ] = useState(user)

    useEffect(() => {
        if (id != undefined){
            let contact = contacts.find((c) => c.id == id)
            setContact(contact)
        } else {
            setContact(user)
        }
    }, [id, user, contacts])

    if (!contact){
        return <LoadingAnimation />
    }

    return <main className="main-container">
        <h1>Profile</h1>
        <div className="profile-container">
            <section className="profile-initials-name">
            <Initials firstname={contact.firstName} lastname={contact.lastName} favouriteColour={contact.favouriteColour} />
            <h2>{contact.firstName} {contact.lastName}</h2>
            </section>
            {id == undefined ? <EditProfile contact={contact} /> : <div className="profile-element">Not input form </div>}
        </div>
    </main>
    
}

export default Profile