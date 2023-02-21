import React, { useEffect } from 'react';
import cartoon from "../images/cartoon.png";
import { greetings } from "../portfolio";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    document.title = "Home"
  }, []);
  const ListItems = ({ i, data }) => {
    return (
      <li key={i}>
        <Link to={data.url} target="_blank" rel="noreferrer" >
          {data.name} <i className={data.className}></i>
        </Link>
      </li>
    )
  }

  return greetings && (
    <section className="profile-container">
      <nav className="social">
        <ul>
          {greetings.mediaIcons.map((data, i) => {
            return <ListItems key={i} data={data} />;
          })}
        </ul>
      </nav>
      <div className="profile-contents">
        <img src={cartoon} alt="me"/>
        <span>Hello, I'm</span>
        <h1>{greetings.name}</h1>
        <p>{greetings.professional}</p>
        <Link to="https://github.com/skarthikeyandev" target="_blank" rel="noreferrer" className="main-btn">View my work <i class="fa-brands fa-github"></i></Link>
      </div>
    </section>
  );
};

export default Home;