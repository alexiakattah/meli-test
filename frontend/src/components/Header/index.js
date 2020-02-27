import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import history from '../../config/history';
import logoML from '../../assets/Logo_ML.png';
import searchicon from '../../assets/ic_Search.png';
import './header.css';

function Header() {
  const [value, setValue] = useState('');

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      history.push(`/items?search=${value}`);
      setValue(value);
    },
    [value],
    console.log(value)
  );

  return (
    <div className="header">
      <div className="headerCenter">
        <Link to="/">
          <img id="logo" src={logoML} alt="" />
        </Link>
        <form onSubmit={e => handleSubmit(e)}>
          <input
            onChange={e => setValue(e.target.value)}
            type="text"
            value={value}
            placeholder="Nunca deixe de comprar"
          />
          <button id="search_button">
            <img src={searchicon} alt="search" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;
