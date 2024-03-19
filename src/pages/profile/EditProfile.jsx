export default function EditProfile({contact}){

    const handleChange = () => {
        
    }

    return (
    <div className="profile-element">
            <section className="profile-account-info-section">
                <div className="input-group">
                    <label>
                        First name*
                        <input type="text" value={contact.firstName} />
                    </label>
                </div>
                <div className="input-group">
                <label>
                    Last name*
                    <input type="text" value={contact.lastName} />
                </label>
                </div>
                <div className="input-group">
                <label>
                    Email*
                    <input type="text" value={contact.email} />
                </label>
                </div>
            </section>
            <section className="profile-address-section">
                <div className="input-group">
                <label>
                    Street
                    <input type="text" value={contact.street} />
                </label>
                </div>
                <div className="input-group">
                <label>
                    City
                    <input type="text" value={contact.city} />
                </label>
                </div>
            </section>
            </div>
    )
}