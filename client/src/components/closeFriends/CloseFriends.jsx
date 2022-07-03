import "./closeFriends.css"

export function CloseFriends({ user }) {
    return (
        <li className="sidebarFriend">
            <img
                className="sidebarFriendImg"
                src={user.profilePicture}
                alt="Couldn't load the image"
            />
            <span className="sidebarFriendName">
                {user.username}
            </span>
        </li>
    );
}
