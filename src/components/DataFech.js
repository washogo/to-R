import React, { useState, useEffect}from 'react'

const DataFech = () => {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    console.log("fetch")
    const url = `https://jsonplaceholder.typicode.com/posts/${page}`
    fetch(url)
      .then( res => res.json() )
      .then( res => {
      setUsers(res);
      })
  }, [page])
  
  return (
    <>
      <p>{page}ページ</p>
      <input
        type="button"
        value="next"
        onClick={() => setPage(prevPage => prevPage + 1)}
        />
      <ul>
      <li>{users.title}</li>
      </ul>
    </>
  )
}
export default DataFech
