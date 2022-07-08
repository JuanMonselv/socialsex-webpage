import inumaki from "../../assets/Inumaki.jpg";
import cake from "../../assets/img/icons/cake.png";
import nouser from "../../assets/img/persons/nouser.png"

import { Users } from "../../dummyData"
import { Online } from "../online/Online"

import { useEffect, useState } from 'react';
import "./rightbar.css";
import axios from "axios"

export function Rightbar({ user }) {
  const url = "http://localhost:4000/api/users/"

  const [friends, setFriends] = useState([])

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendsList = await
          axios.get(`${url}friends/${user._id}`)
        setFriends(friendsList.data)
      } catch (err) {
        console.log(err)
      }
    }
    getFriends()
  }, [user._id])

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img
            className="birthdayImg"
            src={cake}
            alt=""
          />

          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends.</b> have a birthday today
          </span>
        </div>

        <img className="rightbarAd" src={inumaki} alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>

        <ul className="rightbarFriendList">
          {Users.map(u => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>

        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>

          <div className="rightbarInfoItem">
            <span
              className="rightbarInfoKey">Relationship
            </span>

            <span
              className="rightbarInfoValue"
            >
              {user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : ":)"}
            </span>
          </div>
        </div>

        <h4 className="rightbarTitle">User friends</h4>

        <div className="righbarFollowings">
          {friends.map((friend) => (
            <div key={user._id} className="rightbarFollowing">
              <img
                src={
                  friend.profilePicture
                    ? friend.profilePicture
                    : nouser
                }
                className="rightbarFollowingImg"
                alt=""
              />
              <span
                className="rightbarFollowingName">
                {friend.username}
              </span>
            </div>
          ))}
        </div>
      </>
    )
  }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
