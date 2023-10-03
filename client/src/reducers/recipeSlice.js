import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetcher } from "helpers/fetcher";

const initialState = {
  allRecipes: [],
  loading: false,
  status: "",
  selectedRecipe: {}
};

export const getRecipes = createAsyncThunk("recipes/all", async () => {
  const res = await fetcher.get("http://localhost:3001/api/v1/recipes");
  return res;
});

export const getRecipe = createAsyncThunk("recipe/one", async (id) => {
  const res = await fetcher.get(`http://localhost:3001/api/v1/recipes/${id}`);
  return res;
})

export const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(getRecipes.fulfilled, (state, action) => {
        state.allRecipes = action.payload;
        state.status = "success";
      })
      .addCase(getRecipes.pending, (state) => {
        state.loading = true;
        state.status = "loading";
      })
      .addCase(getRecipes.rejected, (state) => {
        state.loading = false;
        state.status = "failed";
      })
      .addCase(getRecipe.fulfilled, (state, action) => {
        state.selectedRecipe = action.payload;
      })
  }
});

export default recipeSlice.reducer;
