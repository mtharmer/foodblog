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
    <div data-testid="recipe-list-div">
      {(recipes.length > 0) ? showRecipes : noRecipes}
    </div>
  );
}
