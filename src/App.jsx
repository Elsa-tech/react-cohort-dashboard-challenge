import './styling/App.css'
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Dashboard from './pages/dashboard'
import Profile from './pages/profile'
import Post from './pages/post'
import { Routes, Route} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { commentPost, getCommentsOnPost, getContactById, getContacts, getPosts, postContentToList } from './http/request'
import { createContext } from 'react'
import LoadingAnimation from './components/LoadingAnimation'

const DataContext = createContext()

export default function App() {
  // User is a contact, user is the one that is logged in
  const [user, setUser] = useState({})
  const [posts, setPosts] = useState([])
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    fetchUser()
    fetchPosts()
    fetchContacts()
  },[])

  const fetchPosts = async () => {
    try {
      const data = await getPosts()
      setPosts(data)
      setLoading(false)
    } catch (error){
      console.error('error fetching posts: ', error)
      setLoading(false)
    }
  }
  const fetchUser = async () => {
    try {
      const data = await getContactById(3)
      setUser(data)
    } catch (error){
      console.error('error fetching user: ', error)
    }
  }


  const fetchContacts = async () => {
    try{
      const data = await getContacts()
      setContacts(data)
    } catch (error){
      console.error('error fetching contacts: ', error)
    }
  }

  const fetchComments = async (postId, setValue) => {
    try {
      const data = await getCommentsOnPost(postId)
      setValue(data)
    } catch (error){
      console.error('error fetching comments on post: ', error)
    }
  }

  const addPost = async (body) => {
    try {
      const data = await postContentToList(body)
      setPosts([...posts, data])
    } catch (error){
      console.error('error adding post to list: ', error)
    }
  }

  const addComment = async (postId, body) => {
    try {
      await commentPost(postId, body)
      
    } catch (error){
      console.error('error posting comment: ', error)
    } 
  }


  return (
    <>
      <DataContext.Provider value={{ 
        posts:posts, 
        user: user, 
        contacts: contacts,
        addPost: addPost,
        addComment: addComment,
        fetchComments: fetchComments }}>
        <Header />
        <Navbar />
        <Routes>
          <Route path={'/'} element={loading ? (<LoadingAnimation /> ) : (<Dashboard />)} />
          <Route path={'/profile'} element={<Profile />} />
          <Route path={'/profile/:id'} element={<Profile />}/>
          <Route path={'/:id'} element={<Post />}/>
        </Routes>
      </DataContext.Provider>
    </>
  )
}

export { DataContext }
