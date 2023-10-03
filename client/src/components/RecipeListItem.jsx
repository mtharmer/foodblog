import React from "react";
import { useNavigate } from "react-router-dom";

export default function RecipeListItem({recipe}) {
  const navigate = useNavigate();
  const url = `/recipe/${recipe.id}`

  function selectRecipe() {
    navigate(url);
  }

  // TODO: Implement an "expand recipe" option to view details without going to the page,
  // in addition to a link inside the expanded view to go to the full page
  // Can utilize a selector to do this in redux

  return (
    <div className="card w-100 h-100" data-testid="recipe-card-div">
      <h4>{recipe.title}</h4>
      <p>{recipe.instructions}</p>
      <p>{recipe.ingredients}</p>
      <button className="btn btn-primary" onClick={selectRecipe}>Go to recipe</button>
    </div>
  );
}
