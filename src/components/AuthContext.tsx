import { createContext } from "react";

export const AuthContext = createContext({
  posts: [
    {
      id: '',
      created: '',
      content: '',
    },
  ],
  id: '',
})