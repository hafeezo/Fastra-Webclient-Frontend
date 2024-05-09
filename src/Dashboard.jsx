import React, { useState } from 'react';
import { FaBars, FaBell } from 'react-icons/fa';
import SearchIcon from "./image/search.svg";
import './Dashboard.css';
import admin from './image/admin.svg';
import CardList from './CardList';

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    // You can perform search operations here based on the search query
    // For example, you can filter a list of items based on the search query
  };

  return (
    <div id='dashboard' className='dash'>
      <div className='dashhead'>
        <ul className='headwrap'>
          <li className='hom'>
            <FaBars className='dashnav'/>
            <p>Home</p>
          </li>
          <li className='sash'>
            <div className='sashtag'>
              <img src={SearchIcon} alt='Search' className='sashnav'/>
              <input type="text" placeholder="Search..." value={searchQuery}
              onChange={handleSearch} className='sashput'/>
            </div>
          </li>
          <li className='alert'>
            <FaBell/>
          </li>
          <li className='admin'>
            <img src={admin} alt='admin' className='adminimg'/>
            <div className='adminname'>
              <p className='ad1'>Administrator</p>
              <p className='ad2'>info@companyname.com</p>
            </div>
          </li>
        </ul>
      </div>

      <div className='dashbody'>
        <div className='bocard'>
            <CardList/>
        </div>
      </div>
    </div>
  );
}