import React from "react";
import "../global.css";
import "./styles/badge.css";
import conflogo from "./images/badge-header.svg";
import Gravatar from "./Gravatar";
class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={conflogo} alt="Logo de la conferencia" />
        </div>{" "}
        <div className={"Badge__section-name"}>
          <Gravatar className="Badge__avatar" 
            email={this.props.email}
            alt="Avatar" 
          />
          <h2>
            {" "}{this.props.firstName} <br /> {this.props.lastName}{" "}
          </h2>{" "}
        </div>
        <div className={"Badge__section-info"}>
          <h3> {this.props.jobTitle} </h3> <div> @ {this.props.twitter} </div>{" "}
        </div>{" "}
        <div className={"Badge__footer"}> #platziconf </div>{" "}
      </div>
    );
  }
}

export default Badge;
