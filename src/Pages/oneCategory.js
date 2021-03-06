import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import MealscardC from "../Components/Mealscards/Mealscard";

export default function Category({ match }) {
  const [meals, setMeals] = useState([]);
  const [load, setLoad] = useState(false);
  const [isError, setisEerror] = useState(false);

  const getMeal = async () => {
    try {
      setLoad(true);
      let response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${match.params.category}`
      );
      console.log(match.params);
      setMeals(response.data.meals);
      console.log(response.data);
      console.log(meals);
      setLoad(false);
    } catch (error) {
      setisEerror(true);
      console.log(`can't fetch, ${error}`);
      setLoad(false);
    }
  };

  useEffect(() => {
    getMeal();
  }, [match.params.category]);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {meals === null ? (
        <h2>"Sorry, There is no meal with this category name"</h2>
      ) : (
        meals.map((el) => <MealscardC meal={el} key={el.idMeal} />)
      )}
    </div>
  );
}
