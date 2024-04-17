import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import NewPost from './components/NewPost';
import PostPage from './components/PostPage';
import { AuthContext } from './components/AuthContext';

function App() {
  const [posts, setPosts] = useState<[]>([]);
  const [id, setId] = useState<string>('');
  return (
    <AuthContext.Provider value={{posts, setPosts, id, setId}}>
      <div className="page">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/new" element={<NewPost />} />
        <Route path="/posts/:id" element={<PostPage />} />
      </Routes>
    </div>
    </AuthContext.Provider>
  )
}

export default App
