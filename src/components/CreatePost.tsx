import { NavLink } from "react-router-dom"

export default function CreatePost() {
  return(
    <div className='create-post'>
      <NavLink to={"/posts/new"} className="create-post__btn">Создать пост</NavLink>
    </div>
  )
}