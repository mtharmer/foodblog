import React from "react";
import RecipeListItem from "./RecipeListItem";

export default function RecipeList({recipes = []}) {
  const showRecipes = recipes.map(recipe => {
    return (
      <div key={recipe.id} className="col text-wrap">
        <RecipeListItem recipe={recipe} />
      </div>
    );
  });

  const noRecipes = (
    <p>No recipes!</p>
  );

  return (
    <>
      {(recipes.length > 0) ? showRecipes : noRecipes}
    </>
  );
}
