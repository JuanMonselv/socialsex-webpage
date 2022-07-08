import {
  useState,
  useEffect,
  useContext
} from 'react';

import axios from 'axios'
import "./feed.css";

import { Post } from "../post/Post";
import { Share } from "../share/Share";
import { AuthContext } from "../../context/AuthContext"

export function Feed({ username }) {
  const url = "http://localhost:4000/api/posts/"

  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(`${url}profile/${username}`)
        : await axios.get(`${url}timeline/${user._id}`)

      setPosts(res.data.sort((p1, p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt)
      }));
    }
    fetchPosts()
  }, [username, user._id])

  return (
    <div className="feed">
      <div className="feedWrapper">
        {username === user.username && <Share />}
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
