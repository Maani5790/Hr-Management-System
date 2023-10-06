import React, { useState, useEffect } from 'react';
import Logo from '../assets/download.png';
import { Link } from 'react-router-dom';

import axios from 'axios';

function MyTeam() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    axios
      .get('http://server.rightclixs.com/team/') 
      .then((response) => {
        setTeam(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error('Error fetching team data:', error);
      });
  }, []);

  return (
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
      <div className="flex-1 max-w-6xl mx-auto p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-white mb-4">Team List</h1>
        <ul className="space-y-8">
          {team.map((member) => (
            <li key={member._id} className="text-white rounded-lg shadow-md p-4">
              <div className="mb-2">
                <strong className="text-white">Username:</strong> {member.username}
              </div>
              <div className="mb-2">
                <strong className="text-white">Email:</strong> {member.email}
              </div>
              <div className="mb-2">
                <strong className="text-white">Phone:</strong> {member.phone}
              </div>
              <div className="mb-2">
              <img src={member.imgUrl} alt={`${member.username}'s Image`} className="w-32 h-32 mt-2" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MyTeam;
