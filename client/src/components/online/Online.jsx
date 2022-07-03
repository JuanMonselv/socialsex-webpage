import "./online.css"

export function Online({ user }) {
    return (
        <div>
            <li className="rightbarFriend">
                <div className="rightbarProfileImgContainer">
                    <img
                        className="rightbarProfileImg"
                        src={user.profilePicture}
                        alt="couldn't load image"
                    />
                    <span className="rightbarOnline"></span>
                </div>
                <span
                    className="rightbarUsername">
                    {user.username}
                </span>
            </li>
        </div>
    );
}