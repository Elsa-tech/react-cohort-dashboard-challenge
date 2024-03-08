import { DataContext } from "../../../App"
import { useContext } from "react"
import { postContentToList } from "../../../http/request"
import InputForm from "./InputForm"

export default function PostContent(){

    const { user, setLoading } = useContext(DataContext)

    const handleSubmit = async (content) => {
        const body = {
            contactId: user.id,
            title: content,
            content: content
        }
        await postContentToList(body)
    }

    return (
    <div className="post-content-container">
        <InputForm user={user} name="postContent" placeholder="What's on your mind?" handleSubmit={handleSubmit}/>
    </div>
    )
}