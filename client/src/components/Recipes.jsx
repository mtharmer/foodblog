import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "reducers/recipeSlice";
import RecipeList from "./RecipeList";

export default function Recipes() {
  const dispatch = useDispatch();

  const recipes = useSelector(state => state.recipes.allRecipes);
  // const auth = useSelector(state => state.auth);
  // TODO: Create a new component and action to retrieve an authenticated user's recipes list

  useEffect(() => {
    dispatch(getRecipes())
  }, [dispatch]);

  // @todo: Implement search and filter functionality utilizing redux selectors

  // TODO: Add a form to create new recipes

  return (
    <div className="container text-center">
      <h1>Recipes</h1>
      <div className="row row-cols-3" data-testid="recipe-list-grid">
        <RecipeList recipes={recipes} />
      </div>
    </div>
  );
}
