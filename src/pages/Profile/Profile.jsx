import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../../context';
import './style.css';

function Profile() {
  const { setShowFooter, setPageName, setShowHeader } = useContext(Context);
  useEffect(() => {
    setShowHeader({
      showName: true,
      showSearch: false,
      showProfile: true,
    });
    setPageName('Profile');
    setShowFooter(true);
  }, []);

  const history = useHistory();

  const email = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div className="Profile">
      { email !== null && (
        <p
          className="email-user"
          data-testid="profile-email"
        >
          { email.email }
        </p>
      )}
      <button
        className="Profile-done-btn"
        onClick={ () => history.push('/done-recipes') }
        type="button"
        data-testid="profile-done-btn"
      >
        Done Recipes
      </button>
      <button
        className="Profile-favorite-btn"
        onClick={ () => history.push('/favorite-recipes') }
        type="button"
        data-testid="profile-favorite-btn"
      >
        Favorite Recipes
      </button>
      <button
        className="Profile-logout-btn"
        onClick={ handleLogout }
        type="button"
        data-testid="profile-logout-btn"
      >
        Logout

      </button>
    </div>
  );
}

export default Profile;
