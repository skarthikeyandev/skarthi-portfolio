import React from 'react'
import { Link } from "react-router-dom";
import { greetings } from '../portfolio'
const Footer = () => {

    const FooterItems = ({ i, item }) => {
        return (
            <li key={i}>
                <Link to={item.url} target="_blank" rel="noreferrer"><i className={item.className}></i></Link>
            </li>
        )
    }

    return greetings && (
        <footer className="footer">
            <div className="footer-response">
                <div className="footer-logo">
                    <Link to="/" >{greetings.copyright} </Link>
                </div>
                <div className='footer-content'>
                    <Link to="/" ><span>{greetings.copyrightyear}</span></Link>
                </div>
                <nav className="media-icons">
                    <ul>
                        {greetings.mediaIcons.map((item, i) => {
                            return <FooterItems key={i} item={item} />;
                        })}
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer