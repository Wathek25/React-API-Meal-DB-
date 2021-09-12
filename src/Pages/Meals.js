import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import MealscardC from "../Components/Mealscards/Mealscard";
// import Mealscard from "../Components/Mealscards/Mealscard";

const MealsC = () => {
  const [meals, setMeals] = useState("");
  // const [loading, setLoading] = useState(false);
  useEffect(() => {
    getMeals();
  }, []);

  const getMeals = async () => {
    try {
      // setLoading(true);
      const result = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      setMeals(result.data);
      console.log(result.data);
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
