import React from 'react';
import { useParams,Link } from 'react-router-dom';
import '../../App.css';

export default function SignUp() {
  return (
    <div className="sign-up">
    <div className="login-box">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Emblem_of_Samarkand.svg/1200px-Emblem_of_Samarkand.svg.png" class="avatar"/>
        <h1>Login Here</h1>
            <form>
            <p>Username</p>
            <input type="text" name="username" placeholder="Enter Username"/>
            <p>Password</p>
            <input type="password" name="password" placeholder="Enter Password"/>
           <Link to="/" ><input type="submit" name="submit" value="Login"/></Link>
            <a href="#">Forget Password</a>    
            </form>
        </div>
        </div>
  );
}
