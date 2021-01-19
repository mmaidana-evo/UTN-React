import React,{useState} from "react";
import NetContext from "./NetContext";

function GlobalState(props){    
    const [userlogin,setLogin] = useState(localStorage.getItem("userlogin"));
    const [username,setUserName] = useState(localStorage.getItem("username"));
    
    const loginUser = (p_username) => {
        setLogin(true);
        setUserName(p_username);
        localStorage.setItem("userlogin",true);
        localStorage.setItem("username",p_username);
    }

    const logoutUser = ()=>{
        setLogin(false);
        localStorage.removeItem("userlogin");
        localStorage.removeItem("username");
    }
    
    return(
        <NetContext.Provider
            value={{
                userlogin:userlogin,
                username:username,
                loginUser:loginUser,
                logoutUser:logoutUser
            }}
        >
            {props.children}
        </NetContext.Provider>
    )
    
}
export default GlobalState