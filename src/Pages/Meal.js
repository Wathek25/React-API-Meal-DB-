import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const MealC = () => {
  const [meal, setMeal] = useState({});
  const [load, setLoad] = useState(false);
  const { idMeal } = useParams();

  useEffect(() => {
    getMeal();
  }, [idMeal]);

  const getMeal = async () => {
    try {
      setLoad(true);
      const result = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      setMeal(result.data.meals[0]);
      console.log(result.data.meals[0]);
      // console.log(result);
      setLoad(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {load ? (
        <img
          src="https://icon-library.com/images/loading-icon-transparent-background/loading-icon-transparent-background-12.jpg"
          alt="spinner"
        />
      ) : (
        <h1>{meal.strMeal}</h1>
      )}
    </div>
  );
};

export default MealC;
