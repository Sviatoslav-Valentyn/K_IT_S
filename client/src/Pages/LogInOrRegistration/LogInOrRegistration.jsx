/*import React from "react";
function LogInOrRegistration(user){
   
   const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({  Email: this.state.idValue,
        Password: this.state.pwValue })
};
fetch('https://reqres.in/api/posts', requestOptions)
    .then(response => response.json())
    .then(user => this.setState({ postId: user.id }));
}
export default LogInOrRegistration;*/

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
         <h1>login</h1>
         <input type="text" placeholder="email" 
         onChange={(e) => setEmail(e.target.value)} />
         <br />
         <input type="password" placeholder="password" 
          onChange={(e) => setPassword(e.target.value)}/>
         <br />
         <button onClick={login}>login</button>

     </div>
 )
}
export default LogInOrRegistration;