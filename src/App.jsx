import { useState } from "react";
import "./App.css";
import { NewRecipeForm } from "./components/NewRecipeForm/NewRecipeForm";

function App() {
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
            {" "}
            Add Recipe{" "}
          </button>
        )}
        <p>There are no recipes to list.</p>
      </div>
    </div>
  );
}

export default App;
