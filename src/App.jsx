import './styling/App.css'
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Dashboard from './pages/dashboard'
import Profile from './pages/profile'
import { Routes, Route} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCommentsOnPost, getContactById, getPosts } from './http/request'
import { createContext } from 'react'

const DataContext = createContext()

export default function App() {
  // User is a contact, user is the one logged in
  const [user, setUser] = useState({})
  const [posts, setPosts] = useState([])
  
  TODO: // add comments here with contact ids
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getContactById(3)
        setUser(data)
      } catch (error){
        console.error('error fetching data', error)
      }
    }
    fetchData()
  },[])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPosts()
        const initalPosts = data.map(post => ({...post, comments: []}));
        setPosts(initalPosts)
      } catch(error){
          console.error('error fetching data', error)
      } 
  } 
    fetchData()
  },[])


  console.log(posts)

  return (
    <>
      <DataContext.Provider value={{ posts:posts, user: user }}>
        <Header />
        <Navbar />
        <Routes>
          <Route path={'/'} element={<Dashboard />} />
          <Route path={'/profile'} element={<Profile />} />
        </Routes>
      </DataContext.Provider>
    </>
  )
}

export { DataContext }
