import { useEffect, useState } from "react";
import { Recipes } from "./recepiData";
import { RecipeDataProps, RecipesProps } from "./recepiDatatype";

export const RandomRecipeGenerator = () => {
  const resipes: RecipesProps = Recipes;
  const [randomRecipe, setRandomRecipe] = useState<RecipeDataProps>({
    name: "",
    ingredients: [],
    instructions: [],
  });
  const [randomNumber, setRandomNumber] = useState(0);

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * resipes.length);
    setRandomNumber(randomNumber);
  };
  useEffect(() => {
    generateRandomNumber();
  }, [randomRecipe]);
  const generateRecipeHandler = () => {
    setRandomRecipe((prevData) => ({
      ...prevData,
      name: resipes[randomNumber].name,
      ingredients: resipes[randomNumber].ingredients,
      instructions: resipes[randomNumber].instructions,
    }));
  };
  return (
    <>
      <button onClick={generateRecipeHandler}>What should I eat?</button>
      <div>
        <h3>{randomRecipe.name}</h3>
        <ul>
          <div>
            {randomRecipe.ingredients.map((i) => {
              return <li>{i}</li>;
            })}
          </div>
        </ul>
        <div>{randomRecipe.instructions.join(" ")}</div>
      </div>
    </>
  );
};
