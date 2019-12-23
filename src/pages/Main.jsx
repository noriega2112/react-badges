import React from 'react';
import {Link} from 'react-router-dom';
import './Styles/Main.css';
import confLogo from "../images/logo.svg";
class Main extends React.Component {
    render() {
        return(
            <div className="page">
                <div className="hero">
                    <h1 className="prior">Print your Badges</h1>
                    <p>The easiest way to print your <br/> badges.</p>
                    <Link to="/badges" className="btn btn-primary">Start Now</Link>
                    <img 
                        className="logo__hero"
                        src={confLogo}
                        alt="Conf Logo"
                    />
                </div>
            </div>
        );
    }
    }

export default Main;
