import { useState } from "react";
import { useAppContext } from "../../context/AppContext";

const NewRecipeForm = () => {
  const { state, setState } = useAppContext();

  const [submittedRecipe, setSubmittedRecipe] = useState({
    name: "",
    instructions: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(submittedRecipe);
    setState({
      ...state,
      recipeList: [...state.recipeList, submittedRecipe],
    });
  };
  const handleInput = (e, key) => {
    e.preventDefault();
    setSubmittedRecipe({ ...submittedRecipe, [key]: e.target.value });
  };
  return (
    <form id="recipe-form">
      <label htmlFor="newRecipeName">Recipe name: </label>
      <input
        type="text"
        id="newRecipeName"
        onChange={(e) => handleInput(e, "name")}
      />
      <label htmlFor="newRecipeInstructions">Instructions:</label>
      <textarea
        id="newRecipeInstructions"
        placeholder="write recipe instructions here..."
        onChange={(e) => handleInput(e, "instructions")}
      />
      <input type="submit" onClick={(e) => handleSubmit(e)} />
    </form>
  );
};
export { NewRecipeForm };
