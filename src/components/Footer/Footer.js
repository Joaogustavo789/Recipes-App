import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../context';
import drinkIcon from '../../images/drinkIcon.svg';
import mealIcon from '../../images/mealIcon.svg';
import './Footer.css';

function Footer() {
  const { showFooter } = useContext(Context);

  return (
    <div>
      {showFooter && (
        <footer className="footer" data-testid="footer">
          <Link to="/drinks">
            <img
              className="footer-icon-drink"
              data-testid="drinks-bottom-btn"
              src={ drinkIcon }
              alt="drink icon"
            />
          </Link>
          <Link to="/foods">
            <img
              className="footer-icon-food"
              data-testid="food-bottom-btn"
              src={ mealIcon }
              alt="meal icon"
            />
          </Link>
        </footer>
      )}
    </div>
  );
}

export default Footer;
