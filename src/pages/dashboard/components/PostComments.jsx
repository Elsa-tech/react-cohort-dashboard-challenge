import { useEffect, useState } from "react"
import CommentItem from "./CommentItem"
import { useParams } from "react-router-dom"

export default function PostComments({ comments }) {
    const { id } = useParams()
    const hasComments = comments.length > 0

    const allComments = comments
    const recentComments = comments.slice(0, 3)

    const [current, setCurrent] = useState(recentComments)
    const [showAll, setShowAll] = useState(false)
    const [option, setOption] = useState('Show all comments')

    const handleClick = () => {
        setShowAll(!showAll)
        if (showAll) {
            setCurrent(recentComments)
            setOption('Show all comments')
        } else {
            setCurrent(allComments)
            setOption('Show less')
        }
    }

    useEffect(() => {
        setCurrent(recentComments)
      },[comments])

    return (
        <>
            {hasComments ? (
                <>
                    {id != undefined ? (
                        <ul>
                            {allComments.map((comment, index) => (
                                <CommentItem comment={comment} key={index} />
                            ))}
                        </ul>
                    ) : (
                        <>
                            {allComments.length <= 3 ? null : (
                                <p className="see-comment-p" onClick={handleClick}>{option}</p>
                            )}
                            <ul>
                                {current.map((comment, index) => (
                                    <CommentItem comment={comment} key={index} />
                                ))}
                            </ul>
                        </>
                    )}
                </>
            ) : (
                <p className="no-comment-p">no comments yet, be the first ...</p>
            )}
        </>
    )
}
