import React from 'react'
import './styles/index.css'
import {useState} from 'react'

function LoginModal({onModalClose, showBackground, setSupervisor}) {

    const [message, setMessage] = useState("");

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    
    function checkAuth (login, pass) {
        console.log("LOGIN: " + login);
        console.log("PASSWORD: " + pass);
        if (login === "cci" && pass === "cci") {
            setSupervisor(false);
            console.log("Regular mode");
            onModalClose(false);
        } else if (login === "admin" && pass === "admin") {
            setSupervisor(true);
            console.log("Admin mode");
            onModalClose(false);
        } else {
            setMessage("Invalid login or password!"); 
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            checkAuth(login, password);
        }
      }
    
    return (
        <div>
            <div className= 'modalBackground black_background'>
                <div className="modalContainer">
                <div className="reg_label label_bold label32 padding32">LOGIN</div>
                        <p className="reg_label">{message}</p>
                        <input value={login} className="input_field" placeholder="Login" onChange={(e)=>{setLogin(e.target.value);}} onKeyDown={handleKeyDown}></input>
                        <input value={password} type="password" className="input_field" placeholder="Password" onChange={(e)=>{setPassword(e.target.value);}} onKeyDown={handleKeyDown}></input>
                        <button className="input_field margin_top30 reg_label red_background spacer" onClick={(e)=>{checkAuth(login, password)}}>LOGIN</button>
                </div>            
            </div>
        </div>
    )
}

export default LoginModal
