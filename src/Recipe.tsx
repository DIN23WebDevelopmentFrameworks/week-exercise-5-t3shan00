import { IRecipeProps } from './Interfaces';

/* Recipe is the component that renders an individual recipe. The name of the recipe, ingredients and instructions should be displayed to the user. */

const Recipe: React.FC<IRecipeProps> = ({ recipeData }) => {
  return (
    <div className="recipe-box" style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <h3>{recipeData.name}</h3>
      <p>
        <strong>Difficulty:</strong> {recipeData.difficulty} | <strong>Cuisine:</strong> {recipeData.cuisine}
      </p>
      <p>
        <strong>Prep Time:</strong> {recipeData.prepTimeMinutes} mins | <strong>Cook Time:</strong> {recipeData.cookTimeMinutes} mins |{' '}
        <strong>Servings:</strong> {recipeData.servings}
      </p>
      <p>
        <strong>Calories per Serving:</strong> {recipeData.caloriesPerServing}
      </p>
      <p>
        <strong>Ingredients:</strong>
      </p>
      <ul>
        {recipeData.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>
        <strong>Instructions:</strong>
      </p>
      <ol>
        {recipeData.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;