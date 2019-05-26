import React from "react";
import StyledHeader from "./styles.js";
import logo from "../../logo.png";
import Home from "@material-ui/icons/Home";
import People from "@material-ui/icons/PeopleOutlineTwoTone";
import Jobs from "@material-ui/icons/CardTravel";
import Notifications from "@material-ui/icons/Notifications";
import Comment from "@material-ui/icons/Comment";
import Lens from "@material-ui/icons/Lens";
import OndemandVideo from "@material-ui/icons/OndemandVideo";
import Apps from "@material-ui/icons/Apps";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avator:
        "https://media.licdn.com/dms/image/C5603AQFcIplOECdFRw/profile-displayphoto-shrink_100_100/0?e=1564617600&v=beta&t=6Cvs5oOmi_Tid5bqrB5KfupaOapPRMtQlkIuUTVou6Q"
    };
  }
  render() {
    return (
      <StyledHeader>
        <div className="bar">
          <div className="logo">
            <img src={logo} className="app-logo" alt="Logo" />
          </div>
          <div className="search">
            <input
              className="input-search"
              type="text"
              placeholder="&#x1F50D; Search"
            />
          </div>
          <div className="nav">
            <ul>
              <li className="home">
                <div className="badge-home">
                  <Lens className="lens" />
                </div>
                <Home className="icon-home" />
                <span>
                  <a href="/home">Home</a>
                </span>
              </li>
              <li className="my-network">
                <People className="icon-people" />
                <span>
                  <a href="/home">My Network</a>
                </span>
              </li>
              <li className="jobs">
                <Jobs className="icon-jobs" />
                <span>
                  <a href="/home">Jobs</a>
                </span>
              </li>
              <li className="messaging">
                <Comment className="icon-comment" />
                <span>
                  <a href="/home">Messaging</a>
                </span>
              </li>
              <li className="notifications">
                <Notifications className="icon-notifications" />
                <span>
                  <a href="/home">Notifications</a>
                </span>
              </li>
              <li>
                <img src={this.state.avator} alt="avator" className="avator" />
                <span>
                  <a href="/home">Me</a>
                </span>
              </li>
            </ul>
          </div>
          <div className="actions">
            <ul>
              <li className="apps">
                <Apps className="icon-apps" />
                <span>
                  <a href="/home">Work</a>
                </span>
              </li>
              <li className="learning">
                <OndemandVideo className="icon-ondemandvideo" />
                <span>
                  <a href="/home">Learning</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </StyledHeader>
    );
  }
}

export default Header;
