import {useEffect, useState} from 'react'
import styles from './list.module.css'

export default function List(): JSX.Element {

type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
};

type PostsType = Post[];

const [post, setPost] = useState<PostsType>([]);

useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(json => setPost(json.slice(0,10)))
      },[])

  return (
    <>
    <div className={styles.container}>
    {post.map(el=><div className={styles.post}key={el.id}>
      <p>{el.title}</p>
      <p>{el.body}</p>
      <a href={`/post/${el.id}`}><button className={styles.info}> info </button></a>
      </div>)}
    </div>
    </>
  )
}
