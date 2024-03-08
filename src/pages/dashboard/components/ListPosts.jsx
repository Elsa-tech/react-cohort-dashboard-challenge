import { useContext } from "react"
import { DataContext } from "../../../App"
import PostItem from "./PostItem"

export default function ListPosts(){

    const { posts, loading } = useContext(DataContext)

    return (
        <div className="post-list-container">
            {loading ? <div>loading...</div> : posts.toReversed().map((post, index) => (
                <PostItem post={post} key={index} />
            ))}
        </div>
    )
}