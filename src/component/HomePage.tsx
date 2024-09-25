import React from 'react'; 
import "../style/Homepage.scss";
import { Button, Input } from 'reactstrap';
import expensetracker from "../assets/expensetracker.jpg"
const HomePage = () => {
  return (
    <div className="Home">
        <div className="page">
          <div className="page-div1">
            <img src={expensetracker} className="expenseimg"></img>
          </div>
          <div className="page-div2">
            <div className="form">
                <Input className="email" placeholder="Email...."></Input>
                <Input className="password" placeholder="Password...."></Input>
                <div className="loginbutton-div">
                    <Button className="signUp">SignUp</Button>
                </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default HomePage;