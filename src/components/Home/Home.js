import {Routes, Route,Link ,Outlet} from "react-router-dom";
import './Home.css'

const Home = () => {
  return (
    <div className="home-main">
        <h1 className="header">Welcome to my Todolist</h1>
        <div className="btn-container">
            <Link to="/todolist" className="start-btn">Start now</Link>
        </div>
    
    </div>
  );
}

export default Home;