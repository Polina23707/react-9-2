import Post, { IPost } from "./Post";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useEffect } from "react";

function PostsList() {

  const {posts, setPosts} = useContext<AuthContextType>(AuthContext);

  useEffect(() => {
    const getData = async (url: string) => {
      try {
        const response = await fetch(url, {
          method: 'GET'
        })
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setPosts(data);
        localStorage.setItem('posts', JSON.stringify(data));
      } catch (e: any) {
        console.error('Error: ' + e.message);
      } 
    }
    getData('http://localhost:7070/posts');
  }, [])

  return (
    <div className="posts-list">
      {posts.map((post: IPost) => 
        <Post id={post.id} key={post.id} content={post.content} created={post.created}/>
      )}
    </div>
  )
}

export default PostsList;