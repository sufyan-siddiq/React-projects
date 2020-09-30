import React, { useState, useEffect } from "react"
import axios from "axios"
import Pagination from "./components/Pagination";
import Posts from "./components/Posts"
const App = () => {

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  useEffect(() => {
    const fetchPosts = async () => {

      setLoading(true)

      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data)
      setLoading(false)


    }
    fetchPosts()
  }, [])

  // console.log(posts)
  // Get current page
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)


  return (
    <div className="container mt-2">
      <h1 className="text primary mb-3">My blog</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPost={posts.length} paginate={paginate} />
    </div>

  )
}

export default App