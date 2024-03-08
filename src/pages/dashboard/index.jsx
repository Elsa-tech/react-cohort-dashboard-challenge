import ListPosts from "./components/ListPosts"
import '../../styling/pages/Dashboard.css'
import PostContent from "./components/PostContent"

function Dashboard(){

    return <main className="main-container">
        <PostContent />
        <ListPosts />
    </main>
}

export default Dashboard