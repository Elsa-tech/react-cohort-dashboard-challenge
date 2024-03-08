import { useState } from "react"
import send from '../../../assets/logo/send-icon.svg'
import Initials from "../../../components/Initials"

export default function InputForm({user, handleSubmit, placeholder, name}){

    const [ content, setContent ] = useState('')

    const handleChange = (event) => {
        setContent(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        handleSubmit(content)
        setContent('')
    }

    return (
        <form onSubmit={onSubmit} className="input-form">
            <div className="input-section">
                <Initials firstname={user.firstName} lastname={user.lastName} favouriteColour={user.favouriteColour} />
                <div className="input-wrapper">
                <input type="text" name={name} value={content} placeholder={placeholder} onChange={handleChange}/> 
                <button type="submit">
                    <img src={send} />
                </button>
                </div>
            </div>
        </form>
    )
}