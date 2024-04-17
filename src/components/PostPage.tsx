import { AuthContext } from "./AuthContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IPost } from "./Post";
import ShowPostPage from "./ShowPostPage";
import ChangePostPage from "./ChangePostPage";

type AuthContextType = {
  posts: IPost[],
  id: string,
  setPosts: (posts: IPost[]) => void,
  setId: (id: string | null) => void;
}

function PostPage() {
  const navigate = useNavigate();
  const [onChange, setOnChange] = useState<boolean>(false);

  let currentPost: IPost = {
    id: '',
    content: '',
    created: '',
  };

  JSON.parse(localStorage.posts).forEach((post: IPost) => {
    if (post.id == localStorage.id) {
      currentPost = post;
    }
  })

  const onDelete = (event: any) => {
    const deletePost = async (url: string) => {
      try {
        const response = await fetch(url, {
          method: 'DELETE',
        })
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data: IPost[] = await response.json();
        console.log(data);
      } catch (e: any) {
        console.error('Error: ' + e);
      } 
    }
    
    deletePost('http://localhost:7070/posts/' + event.target.id);
    navigate('/');  
  }

  const onChangeHandler = () => {
    if (onChange === true) {
      setOnChange(false);
    } else {
      setOnChange(true);
    }
  }

  return (
    <div className="post">
      {!onChange && <ShowPostPage currentPost={currentPost} onChangeHandler={onChangeHandler} onDelete={onDelete}/>}
      {onChange && <ChangePostPage currentPost={currentPost} onChange={onChangeHandler}/>}
    </div>
  )
}

export default PostPage;