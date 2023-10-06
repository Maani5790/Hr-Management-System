import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/download.png';


const Overview = () => {
  return (
    <>
    <div className="flex h-screen" style={{ backgroundColor: '#131324' }}>
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
      </div>
    </>
  )
}

export default Overview