import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../../context';
import SearchIcon from '../../images/searchIcon.svg';
import ProfileIcon from '../../images/profileIcon.svg';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

function Header() {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const { pageName,
    showHeader: { showName, showSearch, showProfile } } = useContext(Context);

  const history = useHistory();

  const handleProfile = () => {
    history.push('/profile');
  };

  const handleSearch = () => {
    setShowSearchInput((prev) => !prev);
  };

  return (
    <div>
      <header className="header">
        { showProfile && (
          <button
            className="btn-header"
            type="button"
            onClick={ handleProfile }
          >
            <img
              src={ ProfileIcon }
              alt="Profile"
              data-testid="profile-top-btn"
            />
          </button>
        )}
        { showName && (
          <h1
            className="title-header"
            data-testid="page-title"
          >
            { pageName }

          </h1>)}
        { showSearch && (
          <button
            className="btn-header"
            type="button"
            onClick={ handleSearch }
          >
            <img src={ SearchIcon } alt="SearchIcon" data-testid="search-top-btn" />
          </button>
        )}
        { showSearchInput && (
          <SearchBar />
        )}
      </header>
    </div>
  );
}

export default Header;
