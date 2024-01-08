import React, {useState} from "react";
import "../style/Notifications.css"
import notification from "../assets/image/notification.svg"


function Notifications () {
    const [liked,setLiked] = useState(false)

    const handleNotification = () => {
        setLiked()
    }


    return (
        <div className="notCon">
            <img className="notification" src={notification} alt="" />
            <div className="counter">0</div>
        </div>
    )
}

export default Notifications