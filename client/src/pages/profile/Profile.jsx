import { Feed } from "../../components/feed/Feed"
import { Topbar } from "../../components/topbar/Topbar"
import { Sidebar } from "../../components/sidebar/Sidebar"
import { Rightbar } from "../../components/rightbar/Rightbar"

import { useEffect, useState } from "react"
import { useParams } from "react-router"

import nouser from "../../assets/img/persons/nouser.png"
import nocover from "../../assets/img/covers/nocover.jpg"

import axios from "axios"
import "./profile.css"

export function Profile() {
    const [user, setUser] = useState({});
    const username = useParams().username;
    const url = "http://localhost:4000/api/"

    console.log("user from Profile: " + user);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`${url}users?username=${username}`)
            setUser(res.data);
        }
        fetchUser()
    }, [username])

    return (
        <div>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img
                                className="profileCoverImg"
                                src={
                                    user.coverPicture
                                    || nocover
                                }
                                alt=""
                            />
                            <img
                                className="profileUserImg"
                                src={
                                    user.profilePicture
                                    || nouser
                                }
                                alt=""
                            />
                        </div>

                        <div className="profileInfo">
                            <h4
                                className="profileInfoName">
                                {user.username}
                            </h4>

                            <span
                                className="profileInfoDesc">
                                {user.desc}
                            </span>
                        </div>
                    </div>

                    <div className="profileRightBottom">
                        <Feed username={username} />
                        <Rightbar user={user} />
                    </div>
                </div>
            </div>
        </div>
    )
}
