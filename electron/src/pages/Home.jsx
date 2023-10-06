import React from 'react';
import Logo from '../assets/download.png';
import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const red = () => {
    navigate('/screen-shots');
  };

  return (
    <div className="flex" style={{ backgroundColor: '#131324' }}>
      <nav className="w-1/5 h-screen p-4">
        <div className="text-white mb-4">
          <img src={Logo} className="w-20 h-14 text-white mb-4" alt="Logo" />
        </div>
        <ul>
          <li>
            <Link
              to="/home"
              className="text-white hover:text-gray-200 block mb-2"
            >
              Dashboard
            </Link>
          </li>
          <div className="my-2 border-t border-gray-600"></div>
          <li>
            <Link
              to="/myteam"
              className="text-white hover:text-gray-200 block mb-2"
            >
              My Team
            </Link>
          </li>
          <div className="my-2 border-t border-gray-600"></div>
          <li>
            <Link
              to="/screen-shots"
              className="text-white hover:text-gray-200 block mb-2"
            >
              All Screen Shots
            </Link>
          </li>
          <div className="my-2 border-t border-gray-600"></div>
          <li>
            <Link
              to="/overview"
              className="text-white hover:text-gray-200 block mb-2"
            >
              overview
            </Link>
          </li>
         
        </ul>
      </nav>

      <div className="w-4/5 p-4">
        <p className="text-xl text-white mb-6">Employee Monitoring Software</p>
        <button
          onClick={red}
          className="mt-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
        >
          Start Monitoring
        </button>
      </div>
    </div>
  );
};

export default HomePage;
