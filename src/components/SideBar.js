import React from 'react';
import { Link } from 'react-router-dom';
import '../components/SideBar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>World Fitness</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
                   <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
