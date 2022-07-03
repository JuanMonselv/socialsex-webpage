import emoji from "../../assets/img/icons/emoji.png";
import picture from "../../assets/img/icons/picture.png";
import nouser from "../../assets/img/persons/nouser.png"

import { AuthContext } from "../../context/AuthContext"
import { useContext, useState, useRef } from 'react'

import axios from "axios"
import "./share.css";

export function Share() {

  const { user } = useContext(AuthContext)
  const [file, setFile] = useState(null)
  const desc = useRef()

  const url = "http://localhost:4000/api/"

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    }

    if (file) {
      const data = new FormData()
      const fileName = Date.now() + file.name
      data.append("file", file)
      data.append("name", fileName)
      newPost.img = fileName

      try {
        //Send image to post server if there's a image file 
        await axios.post(`${url}upload`, data)
      } catch (err) {
        console.log("This is the error 11: " + err);
      }
    }

    try {
      //Send post to server
      await axios.post(`${url}posts`, newPost)
      window.location.reload()
    } catch (err) {
      console.log("This is the error 22: " + err);
    }
  }

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={user.profilePicture ? user.profilePicture : nouser} alt=""
          />

          <input
            className="shareInput"
            placeholder={`What's in your mind ${user.username}?`}
            type="text"
            ref={desc}
          />
        </div>

        {/* Options to publish something inside the post section */}
        <hr className="shareHr" />
        <form
          className="shareBottom"
          onSubmit={handleSubmit}
        >
          <div className="shareOptions">
            <label htmlFor="file" className="shareOpcion">
              <img className="shareIcon" src={picture} alt="" />

              <span className="shareOptionText">Photo/video</span>

              <input
                type="file"
                id="file"
                accept=".png,.jpeg,.jng"
                style={{ display: 'none' }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>

            <div className="shareOpcion">
              <img className="shareIcon" src={emoji} alt="" />
              <span className="shareOptionText"></span>
            </div>

            <div className="shareOpcion">
              <img className="shareIcon" src={picture} alt="" />
              <span className="shareOptionText"></span>
            </div>

            <div className="shareOpcion">
              <button className="shareIcon">@</button>
              <span className="shareOptionText">Photo</span>
            </div>
          </div>

          <button className="shareButton" type="submit">Share</button>
        </form>
      </div>
    </div>
  );
}
