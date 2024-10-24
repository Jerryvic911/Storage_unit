import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed
import "./Navbar.css";

const BottomNav: React.FC = () => {
  return (
    <nav className="bottom-nav">
      <ul>
        <li>
          <Link to="/dashboard">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24"
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="icon"
            >
              <path d="M3 13h18l-5 8H8l-5-8z" />
              <path d="M3 8h18L12 3 3 8z" />
            </svg>
          </Link>
        </li>
        <li>
          <Link to="/deposit">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24"
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="icon"
            >
              <path d="M12 2v20m10-10H2" />
              <path d="M12 6l6 6-6 6-6-6 6-6z" />
            </svg>
          </Link>
        </li>
        <li>
          <Link to="/withdraw">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24"
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="icon"
            >
              <path d="M12 2v20m10-10H2" />
              <path d="M12 18l-6-6 6-6 6 6-6 6z" />
            </svg>
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24"
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="icon"
            >
              <path d="M3 3h18v18H3V3z" />
              <path d="M9 9h6v6H9V9z" />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
