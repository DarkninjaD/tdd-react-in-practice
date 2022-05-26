import { useState } from "react";
import "./App.css";
import { NewRecipeForm } from "./components/NewRecipeForm/NewRecipeForm";
import { RecipeList } from "./components/RecipeList/RecipeList";
import { useAppContext } from "./context/AppContext";

function App() {
  const { state } = useAppContext();
  const [isAddRecipeFormDisplayed, setIsAddRecipeFormDisplayed] =
    useState(false);
  return (
    <div className="App">
      <div className="App-header">
        <h1> My Recipes </h1>
        {isAddRecipeFormDisplayed ? (
          <NewRecipeForm />
        ) : (
          <button
            id="add-recipe"
            onClick={() => setIsAddRecipeFormDisplayed(true)}
          >
            Add Recipe
          </button>
        )}
        {state.recipeList.length === 0 ? (
          <p>There are no recipes to list.</p>
        ) : (
          <RecipeList />
        )}
      </div>
    </div>
  );
}

export default App;
