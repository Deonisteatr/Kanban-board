import { useState } from "react";
import userImage from "../../img/user-avatar.jpeg";

const Header = (props) => {
    const [isInputVisible, setInputVisible] = useState(false);

    const handleClick = () => {
        setInputVisible(!isInputVisible);
    }

    return (
        <header className="header">
            <div className="header__title">
                <h1 className="header__text">Awesome Kanban Board</h1>
            </div>
            <div className={isInputVisible ? "header__user active" : "header__user"}>
                <div className="user-image" style={{backgroundImage: `url(${userImage})`}} onClick={handleClick}></div>
                <div className="user-datails">
                    <div className="user-datails__input">
                        Profile
                    </div>
                    <div className="user-datails__input">
                        Log Out
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header