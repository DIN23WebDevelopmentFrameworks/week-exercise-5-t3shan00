import { IRecipeListProps } from './Interfaces';
import Recipe from './Recipe';

/* RecipeList is the component that a list of recipes and it uses Recipe components to do so. The App component should deliver the correct recipes to render for this component as props. */

const RecipeList: React.FC<IRecipeListProps> = ({ recipes = [], onBack }) => {
  return (
    <div>
      <button onClick={onBack}>Back to Tags</button>
      <h2>Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes found for this tag.</p>
      ) : (
        <div>
          {recipes.map((recipe) => (
            <Recipe key={recipe.id} recipeData={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;
