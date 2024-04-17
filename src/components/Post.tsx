import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { AuthContextType } from "./HomePage";

export interface IPost {
  id: string,
  content: string,
  created: string,

}

function Post({...props}: IPost) {
  const {id, setId} = useContext<AuthContextType>(AuthContext);

  const onPost = (event: any) => {
    setId(event.target.id);
    localStorage.setItem('id', event.target.id);
  }
  
  return (
    <NavLink to={`/posts/${props.id}`} onClick={onPost} className="post" id={props.id}>
      <div className="post__header">
        <div className="post__img"></div>
        <div className="post__author">Автор поста</div>
      </div>
      <div className="post__content">{props.content}</div>
    </NavLink>
  )
}

export default Post;