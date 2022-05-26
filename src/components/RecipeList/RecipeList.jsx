import { useAppContext } from "../../context/AppContext";

const RecipeList = () => {
  const { state } = useAppContext();

  return (
    <div>
      {state.recipeList.map(({ name, instructions }, index) => {
        return (
          <div key={index}>
            <h3>{name}</h3>
            <li>{instructions}</li>
          </div>
        );
      })}
    </div>
  );
};

export { RecipeList };
