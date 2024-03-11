import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Post() {

  type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
};

  const {id} = useParams();
  const [onePost, setOnePost] = useState<Post>()

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response => response.json())
    .then(json => setOnePost(json))
  },[])

  return (
    <div>
      <p>{onePost?.title}</p>
      <p>{onePost?.body}</p>
    </div>
  )
}
