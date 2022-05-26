const NewRecipeForm = () => {
  return (
    <form id="recipe-form">
      <label htmlFor="newRecipeName">Recipe name: </label>
      <input type="text" id="newRecipeName" />
      <label htmlFor="newRecipeInstructions">Instructions:</label>
      <textarea
        id="newRecipeInstructions"
        placeholder="write recipe instructions here..."
      />
      <input type="submit" />
    </form>
  );
};
export { NewRecipeForm };
