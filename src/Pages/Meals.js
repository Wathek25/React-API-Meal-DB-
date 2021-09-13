import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import MealscardC from "../Components/Mealscards/Mealscard";
import MealC from "./Meal";
// import Mealscard from "../Components/Mealscards/Mealscard";

const MealsC = () => {
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  // const [loading, setLoading] = useState(false);
  useEffect(() => {
    getMeals();
  }, []);

  useCallback((searchTerm) => {
    searchMeal();
  }, []);

  const searchMeal = async () => {
    try {
      // setLoading(true);
      const result = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      setMeals(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const searchMealHandler = useCallback(() => {
    searchMeal(searchTerm);
  }, [searchTerm, searchMeal]);

  const getMeals = async () => {
    try {
      // setLoading(true);
      const result = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      setMeals(result.data);
      // console.log(result.data);
      // window.alert(JSON.stringify(meals));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      <div>
        <input
          type="text"
          placeholder="Search for meal..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={searchMealHandler}>Search</button>
      </div>
      {meals.meals ? (
        meals.meals.map((meal) => (
          // <div key={meal.idMeal}>
          //   <h1>{meal.strMeal}</h1>
          //   <h2>{meal.strCategory}</h2>
          //   <img src={meal.strMealThumb} alt="thumbs" />
          // </div>

          <MealscardC meal={meal} key={meal.idMeal} />
        ))
      ) : (
        <h1>Data not found</h1>
      )}
    </div>
  );
};

export default MealsC;
