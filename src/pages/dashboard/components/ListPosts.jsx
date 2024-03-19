import { useContext } from "react"
import { DataContext } from "../../../App"
import PostItem from "./PostItem"

export default function ListPosts(){

    const { posts } = useContext(DataContext)

    return (
        <div className="post-list-container">
            {posts.toReversed().map((post, index) => (
                <PostItem post={post} key={index} />
            ))}
        </div>
    )
}