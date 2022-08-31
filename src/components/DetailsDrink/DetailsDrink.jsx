import PropTypes from 'prop-types';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useHistory, useParams } from 'react-router-dom';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import ShareButton from '../ShareButton/ShareButton';

const DetailsDrink = ({ recipeData, recommendations, isFood }) => {
  const { id: recipeId } = useParams();
  const history = useHistory();
  const renderButton = !JSON.parse(
    localStorage.getItem('doneRecipes') || '[]',
  ).some((recipe) => recipe.id === recipeData.idDrink);

  const recipeInProgress = !Object.keys(
    JSON.parse(localStorage.getItem('inProgressRecipes') || '{}'),
  ).some((id) => id === recipeData.idDrink);

  const ingredientsKeys = Object.keys(recipeData || {}).filter(
    (key) => key.includes('strIngredient') && recipeData[key],
  );
  return (
    <div className="recipe-details">
      <img
        className="recipe-image"
        src={ recipeData.strDrinkThumb }
        alt={ recipeData.strDrink }
        data-testid="recipe-photo"
      />

      <div className="recipe-container">
        <div className="title-container">
          <p
            className="recipe-title font-Great-Vibes"
            data-testid="recipe-title"
          >
            {recipeData.strDrink}
          </p>

          <div className="favorite-button-container">
            <FavoriteButton isFood={ isFood } recipeData={ recipeData } />
            <ShareButton isFood={ isFood } id={ recipeId } />
          </div>
        </div>

        <p
          className="recipe-category"
          data-testid="recipe-category"
        >
          {recipeData.strAlcoholic}
        </p>

        <div>
          <p className="ingredient-title">
            Ingredients
          </p>
          {ingredientsKeys.map((key, index) => (
            <p
              className="recipe-ingredient"
              key={ key }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              {`${recipeData[`strIngredient${index + 1}`]} - ${
                recipeData[`strMeasure${index + 1}`] || ''
              }`}
            </p>
          ))}
        </div>

        <div>
          <p className="ingredient-title">
            Instructions
          </p>
          <p
            className="recipe-instructions"
            data-testid="instructions"
          >
            {recipeData.strInstructions}
          </p>
        </div>
      </div>

      <div>
        <div className="recipe-container">
          <p className="ingredient-title">
            Recommended
          </p>
        </div>
        <Swiper
          className="swiper-container"
          slidesPerView={ 1 }
        >
          {recommendations
            .filter((_, index) => index < +'6')
            .map((recommendation, index) => (
              <SwiperSlide
                className="swiper-image-container"
                key={ index }
                data-testid={ `${index}-recomendation-card` }
                onClick={ () => history.push(`/foods/${recommendation.idMeal}`) }
              >
                <img
                  className="swiper-image"
                  src={ recommendation.strMealThumb }
                  alt={ recommendation.strMeal }
                  data-testid="recipe-photo"
                />
                <p
                  className="recomendation-text"
                  data-testid={ `${index}-recomendation-title` }
                >
                  {recommendation.strMeal}
                </p>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      <div className="start-recipe-button-container">
        {renderButton && (
          <button
            className="start-recipe-button font-Great-Vibes"
            type="button"
            data-testid="start-recipe-btn"
            onClick={ () => history.push(`/drinks/${recipeData.idDrink}/in-progress`) }
          >
            {recipeInProgress ? 'Continue Recipe' : 'Start Recipe'}
          </button>
        )}
      </div>
    </div>
  );
};

DetailsDrink.propTypes = {
  recipeData: PropTypes.shape({
    idDrink: PropTypes.string,
    strAlcoholic: PropTypes.string,
    strDrink: PropTypes.string,
    strInstructions: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strYoutube: PropTypes.string,
  }).isRequired,
  recommendations: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DetailsDrink;
