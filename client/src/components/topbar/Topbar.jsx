import "./topbar.css";
import nouser from "../../assets/img/persons/nouser.png";

import Search from "@mui/icons-material/Search";
import { Link } from "react-router-dom"

import { AuthContext } from "../../context/AuthContext"
import { useContext } from "react"

export function Topbar() {

  const { user } = useContext(AuthContext)

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}	>
          <span className="logo">Social Sex</span>
        </Link>
      </div>

      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />

          <input className="searchInput" type="text" placeholder="Search" />
        </div>
      </div>

      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>

        <div className="topbarIcons">
          <div className="topbarIconItem">
            <span className="topbarIconBadge">1</span>
          </div>

          <div className="topbarIconItem">
            <span className="topbarIconBadge">2</span>
          </div>

          <div className="topbarIconItem">
            <span className="topbarIconBadge">3</span>
          </div>
        </div>

        <Link to={`/profile/${user.username}`}>
          <img
            alt=""
            src={
              user.profilePicture
                ? user.profilePicture
                : nouser
            }
            className="topbarImg"
          />
        </Link>
      </div>
    </div>
  );
}
