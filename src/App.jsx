import { useState } from "react";
import "./App.css";
import { NewRecipeForm } from "./components/NewRecipeForm/NewRecipeForm";
import { RecipeList } from "./components/RecipeList/RecipeList";
import { useAppContext } from "./context/AppContext";

const App = () => {
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
};

const App2 = () => {
  return (
    <div id="body">
      <h1>Select your favorite colors</h1>
      <form data-testid="check-form">
        <input
          class="general-input"
          type="checkbox"
          id="red"
          name="color-red"
          value="red"
        />
        <label for="red">Red</label>
        <input
          class="general-input"
          type="checkbox"
          id="orange"
          name="color-orange"
          value="orange"
        />
        <label for="orange">Orange</label>
        <input
          class="general-input"
          type="checkbox"
          id="yellow"
          name="color-yellow"
          value="yellow"
        />
        <label for="yellow">Yellow</label>
        <input
          class="general-input"
          type="checkbox"
          id="green"
          name="color-green"
          value="green"
        />
        <label for="green">Green</label>
        <input
          class="general-input"
          type="checkbox"
          id="blue"
          name="color-blue"
          value="blue"
        />
        <label for="blue">Blue</label>
        <input
          class="general-input"
          type="checkbox"
          id="indigo"
          name="color-indigo"
          value="indigo"
        />
        <label for="indigo">Indigo</label>
        <input
          class="general-input"
          type="checkbox"
          id="violet"
          name="color-violet"
          value="violet"
        />
        <label for="violet">Violet</label>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default App2;
