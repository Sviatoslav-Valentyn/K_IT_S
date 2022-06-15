import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './loginForm.css'
import LeftPhotoLogin from '../../Assets/imgHome/cloudLeft.png'
import RightPhotoLogin from '../../Assets/imgHome/cloudRight.png' 

function LogInOrRegistration(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    useEffect(() => {
        localStorage.removeItem('user-info');
        if(localStorage.getItem('user-info')){
           navigate('/', { replace: true }
           );
        }
    },[])
    async function login(){
        console.log(email, password)
        let item = {Email:email,Password:password};
        let result = await fetch("http://localhost:3001/user/login", 
        {method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            "Accept":'application/json'
        },
        body: JSON.stringify(item)

    });
    result =  await result.json();
    localStorage.setItem("user-info", JSON.stringify(result))
    navigate('/', { replace: true }
    )
    }
 return(
     <div>
          <div className ="wrapLogin">
  <div className="formaLogin">
          <h1 className="headerLogin">Ввійти</h1>
    <h1 className="nameLoginForma">Введіть:</h1>
    <label className="nameText">Електронну пошту</label>

         <input className="inputlogin" type="text" placeholder="email " 
         onChange={(e) => setEmail(e.target.value)} />
         <br />
         <label className="nameText">Пароль</label>
         <input  className="inputlogin" type="password" placeholder="password" 
          onChange={(e) => setPassword(e.target.value)}/>
         <br />
         <button className="buttonLogin" onClick={login}>Ввійти</button>

         </div>
         <div >
                <img class="photoLeftLogin" src={LeftPhotoLogin} alt="BeautyWomenBackgraungImage"/>
                <img class="photoRightLogin"src={RightPhotoLogin} alt="BeautyWomenBackgraungImage" />
            </div>
  </div>
     </div>
 )
}
export default LogInOrRegistration;
