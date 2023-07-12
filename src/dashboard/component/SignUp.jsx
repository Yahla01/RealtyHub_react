import React from "react";
import '../style/SignUp.css'
const signUp = () =>{


    return(
        <div className="mainContainer">
            <div className="signUp">
                 FirstName <br />
                <input type="text" /><br />
                 LastName <br />
                <input type="text" />
                <input type="text" />
                <input type="text" />
            </div>
        </div>
    )
}
export default signUp;