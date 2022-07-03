import "./sidebar.css";
import { Users } from "../../dummyData"
import { CloseFriends } from "../closeFriends/CloseFriends"

export function Sidebar() {
  return (
    <div class="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <button className="sidebarIcon">Feed</button>
          </li>

          <li className="sidebarListItem">
            <button className="sidebarIcon">Feed</button>
          </li>

          <li className="sidebarListItem">
            <button
              className="sidebarIcon">Feed
            </button>
          </li>
        </ul>

        <button
          className="sidebarButton">Show more
        </button>

        <hr className="sidebarHr" />

        {/* Friend list */}
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriends key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
