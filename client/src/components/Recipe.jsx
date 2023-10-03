import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipe } from "reducers/recipeSlice";

export default function Recipe() {
  const dispatch = useDispatch();
  const params = useParams();
  const recipe = useSelector(state => state.recipes.selectedRecipe);

  // The title/ingredients/instructions could be set from a redux selector on the list page,
  // but we want to list shares/comments/etc. in the future that will have data not included
  // in the list page, therefore a dispatch will be required to load that data.
  // TODO: Load comments and add ability to share and comment

  useEffect(() => {
    dispatch(getRecipe(params.id))
  }, [dispatch, params])

  return (
    <div className="container">
      <h1>Recipe {params.id}</h1>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
      <hr />
      <h3>Ingredients</h3>
      <p>{recipe.ingredients}</p>
      {/* TODO: Load a comments component here */}
    </div>
  );
}
