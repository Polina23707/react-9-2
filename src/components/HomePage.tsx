import { useEffect } from "react";
import CreatePost from "./CreatePost";
import PostsList from "./PostsList";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";
import { IPost } from "./Post";

export interface AuthContextType {
  id: string;
  posts: IPost[]
  setId: (id: string | null) => void;
  setPosts: (posts: IPost[]) => void;
}

function HomePage() {
  return (
    <main className="content">
      <CreatePost />
      <PostsList />
    </main>
  )
}

export default HomePage;