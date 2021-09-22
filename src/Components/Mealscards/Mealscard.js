// import { Card } from "@material-ui/core";
import React from "react";
import "./Mealscard.css";
import { Link } from "react-router-dom";

const MealscardC = ({ meal }) => {
  return (
    <div className="meals_card">
      <Link to={{ pathname: `/meals/meal/${meal.idMeal}`, state: meal }}>
        <h4>{meal.strMeal}</h4>
        <img
          src={meal.strMealThumb}
          alt="thumbs"
          width="300px"
          height="300px"
        />
        <br></br>
        <button className="button">Details</button>
      </Link>
    </div>
  );
};

export default MealscardC;
