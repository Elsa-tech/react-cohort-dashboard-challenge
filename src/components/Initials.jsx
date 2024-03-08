export default function Initials({firstname, lastname, favouriteColour}){

    const getInitials = (firstname, lastname) => {
        const name = firstname+" "+lastname
        return name.match(/(\b\S)?/g).join("");
    }

    const initials = getInitials(firstname, lastname)

    return (
        <div className="initial-display" style={{backgroundColor: favouriteColour}}><span className="initials">{initials}</span></div>
    )
}