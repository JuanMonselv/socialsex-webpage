import love from "../../assets/img/icons/love.png";
import likes from "../../assets/img/icons/like.png";
import nouser from "../../assets/img/persons/nouser.png";
import MoreVertSharp from "@mui/icons-material/MoreVert";

import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

import "./post.css";
import axios from "axios";
import { format } from "timeago.js";

export function Post({ post }) {

  const url = "http://localhost:4000/api/"

  const [user, setUser] = useState({});
  const [isLiked, setIsLiked] = useState(false);
  const [like, setLike] = useState(post.likes.length);
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id))
  }, [currentUser._id, post.likes])

  useEffect(() => {
    const fetchUser = async () => {
      const res =
        await axios.get(`${url}users?userId=${post.userId}`)
      setUser(res.data);
    }
    fetchUser()
  }, [currentUser._id, post.userId])

  //Handle like/unlike action when click
  const likeHandler = () => {
    try {
      axios.put(`${url}posts/${post._id}/like`,
        { userId: currentUser._id })
    } catch (err) {
      console.log("Post error" + err);
    }
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={user.profilePicture || nouser}
                alt=""
              />
            </Link>

            <span
              className="postUsername">
              {user.username}
            </span>

            <span className="postDate">{format(post.createdAt)}</span>
          </div>

          <div className="postTopRight">
            <MoreVertSharp />
          </div>
        </div>

        <div className="postCenter">
          <span
            className="postText">
            {post?.desc}
          </span>

          <img
            className="postImg"
            // src={post.img}
            alt=""
          />
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={likes}
              onClick={likeHandler}
              alt=""
            />

            <img
              className="likeIcon"
              src={love}
              onClick={likeHandler}
              alt=""
            />

            <span
              className="postLikeCounter">
              {like} people like it
            </span>
          </div>

          <div className="postBottomRight ">
            <span
              className="postCommentText">
              {post.comment} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
