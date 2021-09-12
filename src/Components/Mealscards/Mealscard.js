// import { Card } from "@material-ui/core";
import React from "react";
import "./Mealscard.css";
import { Link } from "react-router-dom";

const MealscardC = ({ meal }) => {
  return (
    <div>
      <Link to={{ pathname: `/meals/meal/${meal.idMeal}`, state: meal }}>
        <h1>{meal.strMeal}</h1>

        <h2>{meal.strCategory}</h2>

        <h3>{meal.strArea}</h3>
        <img
          src={meal.strMealThumb}
          alt="thumbs"
          width="300px"
          height="300px"
        />
      </Link>
    </div>
  );
};

export default MealscardC;
